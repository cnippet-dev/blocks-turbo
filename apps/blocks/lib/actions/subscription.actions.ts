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

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getActiveSubscription(): Promise<ActionResponse<any>> {
    const session = await getUserSession();
    if (!session?.user?.id) {
        return { error: { general: "Unauthorized. Please sign in." } };
    }

    try {
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
            subscription.status === "cancelled" ||
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
            data: { status: "cancelled", endDate: new Date() },
        });

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