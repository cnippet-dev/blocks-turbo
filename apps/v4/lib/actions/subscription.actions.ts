// lib/actions/subscription.actions.ts
"use server";

import { prisma } from "@repo/db";

import { z } from "zod";

import { cancelSubscriptionSchema } from "@/lib/validations/subscription";
import { getServerSession } from "next-auth";
import { nextauthOptions } from "@/lib/nextauth-options";
import { getUserSession } from "./auth.actions";

type ActionResponse<T extends z.ZodTypeAny> =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | { success: true; message: string; data?: any }
    | { error: { general: string } | { [K in keyof z.infer<T>]?: string[] } };

/**
 * Check and update expired subscriptions for a specific user
 * Sets status to EXPIRED and updates user.pro to false if no active subscription exists
 */
export async function checkAndUpdateExpiredSubscriptions(
    userId: string,
): Promise<void> {
    try {
        const now = new Date();

        // Find all active subscriptions that have expired
        const expiredSubscriptions = await prisma.subscription.findMany({
            where: {
                userId: userId,
                status: "ACTIVE",
                endDate: {
                    lt: now,
                },
            },
        });

        // Update expired subscriptions
        if (expiredSubscriptions.length > 0) {
            await prisma.subscription.updateMany({
                where: {
                    userId: userId,
                    status: "ACTIVE",
                    endDate: {
                        lt: now,
                    },
                },
                data: {
                    status: "EXPIRED",
                },
            });
        }

        // Check if user has any active subscription after updating expired ones
        const activeSubscription = await prisma.subscription.findFirst({
            where: {
                userId: userId,
                status: "ACTIVE",
                endDate: {
                    gte: now,
                },
            },
        });

        // Update user pro status based on active subscription
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { pro: true },
        });

        if (!activeSubscription && user?.pro) {
            // No active subscription, but user has pro access - remove it
            await prisma.user.update({
                where: { id: userId },
                data: { pro: false },
            });
        } else if (activeSubscription && !user?.pro) {
            // Has active subscription but pro is false - set it to true
            // Only if plan is not Free
            if (activeSubscription.plan.toLowerCase() !== "free") {
                await prisma.user.update({
                    where: { id: userId },
                    data: { pro: true },
                });
            }
        }
    } catch (error) {
        console.error("Error checking expired subscriptions:", error);
        // Don't throw, just log the error
    }
}

/**
 * Check and update expired subscriptions for all users
 * This can be called from a cron job or scheduled task
 */
export async function checkAllExpiredSubscriptions(): Promise<void> {
    try {
        const now = new Date();

        // Find all active subscriptions that have expired
        const expiredSubscriptions = await prisma.subscription.findMany({
            where: {
                status: "ACTIVE",
                endDate: {
                    lt: now,
                },
            },
            select: {
                userId: true,
            },
            distinct: ["userId"],
        });

        // Update expired subscriptions
        await prisma.subscription.updateMany({
            where: {
                status: "ACTIVE",
                endDate: {
                    lt: now,
                },
            },
            data: {
                status: "EXPIRED",
            },
        });

        // For each user with expired subscriptions, check if they have any active ones
        for (const sub of expiredSubscriptions) {
            const activeSubscription = await prisma.subscription.findFirst({
                where: {
                    userId: sub.userId,
                    status: "ACTIVE",
                    endDate: {
                        gte: now,
                    },
                },
            });

            if (!activeSubscription) {
                // No active subscription, remove pro access
                await prisma.user.update({
                    where: { id: sub.userId },
                    data: { pro: false },
                });
            }
        }
    } catch (error) {
        console.error("Error checking all expired subscriptions:", error);
        // Don't throw, just log the error
    }
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getActiveSubscription(): Promise<ActionResponse<any>> {
    const session = await getUserSession();
    if (!session?.user?.id) {
        return { error: { general: "Unauthorized. Please sign in." } };
    }

    try {
        // First, check and update any expired subscriptions for this user
        await checkAndUpdateExpiredSubscriptions(session.user.id);

        const subscription = await prisma.subscription.findFirst({
            where: {
                userId: session.user.id,
                status: "ACTIVE",
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        if (!subscription) {
            return {
                success: true,
                message: "No active subscription found.",
                data: null,
            };
        }

        // Double-check that subscription hasn't expired
        const now = new Date();
        if (subscription.endDate < now) {
            // Subscription has expired, update it
            await prisma.subscription.update({
                where: { id: subscription.id },
                data: { status: "EXPIRED" },
            });
            await prisma.user.update({
                where: { id: session.user.id },
                data: { pro: false },
            });

            return {
                success: true,
                message: "No active subscription found.",
                data: null,
            };
        }

        return {
            success: true,
            message: "Active subscription found.",
            data: subscription,
        };
    } catch (error) {
        console.error("Error fetching active subscription:", error);
        return { error: { general: "Failed to fetch subscription details." } };
    }
}

export async function cancelSubscription(
    values: z.infer<typeof cancelSubscriptionSchema>,
): Promise<ActionResponse<typeof cancelSubscriptionSchema>> {
    const session = await getServerSession(nextauthOptions);
    if (!session || !session.user || !session.user.id) {
        return { error: { general: "Unauthorized. Please sign in." } };
    }

    const validatedFields = cancelSubscriptionSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { subscriptionId } = validatedFields.data;
    const userId = session.user.id;

    try {
        const subscription = await prisma.subscription.findUnique({
            where: { id: subscriptionId, userId },
        });

        if (!subscription) {
            return {
                error: {
                    general: "Subscription not found or you don't have access.",
                },
            };
        }

        if (
            subscription.status === "CANCELLED" ||
            subscription.status === "cancelled" ||
            subscription.status === "EXPIRED" ||
            subscription.status === "expired"
        ) {
            return {
                error: {
                    general: "Subscription is already cancelled or expired.",
                },
            };
        }

        await prisma.subscription.update({
            where: { id: subscriptionId },
            data: { status: "CANCELLED", endDate: new Date() },
        });

        // Check if user has any other active subscriptions
        const now = new Date();
        const otherActiveSubscription = await prisma.subscription.findFirst({
            where: {
                userId: userId,
                status: "ACTIVE",
                endDate: {
                    gte: now,
                },
                id: {
                    not: subscriptionId,
                },
            },
        });

        // If no other active subscription exists, remove pro access
        if (!otherActiveSubscription) {
            await prisma.user.update({
                where: { id: userId },
                data: { pro: false },
            });
        }

        return {
            success: true,
            message: "Subscription cancelled successfully.",
        };
    } catch (error) {
        console.error("Error cancelling subscription:", error);
        return {
            error: {
                general: "Failed to cancel subscription. Please try again.",
            },
        };
    }
}