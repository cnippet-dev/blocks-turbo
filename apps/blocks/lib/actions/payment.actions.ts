"use server";

import { prisma } from "@repo/db";

import Razorpay from "razorpay";
import crypto from "crypto";
import { Resend } from "resend";
import { getUserSession } from "./auth.actions";

interface PaymentData {
    amount: number;
    plan: string;
    userId: string;
    duration: string;
}

interface PaymentResult {
    success?: boolean;
    orderId?: string;
    amount?: number;
    currency?: string;
    paymentId?: string;
    error?: string;
}

interface VerificationResult {
    success?: boolean;
    error?: string;
}

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const razorpay = process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_SECRET_ID
    ? new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET_ID,
    })
    : null;

export async function createPayment(
    paymentData: PaymentData,
): Promise<PaymentResult> {
    try {
        const { amount, plan, userId, duration } = paymentData;

        const amountInPaise = Math.round(amount * 100);
        const currency = "INR";

        if (!amountInPaise || amountInPaise <= 0) {
            return { error: "Invalid payment amount" };
        }

        const options = {
            amount: amountInPaise,
            currency: currency,
            receipt: `rcpt_${Date.now().toString().slice(-8)}_${userId.slice(-6)}`,
            payment_capture: 1,
            notes: {
                description: `Subscription payment for ${plan} plan`.toString(),
                planName: plan.toString(),
                userId: userId.toString(),
                originalAmount: amount.toString(),
                duration: duration.toString(),
            },
        };

        if (!razorpay) {
            return { error: "Payment service not configured. Please contact support." };
        }

        try {
            const order = await razorpay.orders.create(options);

            if (!order?.id) {
                console.error(
                    "[RAZORPAY_ORDER_CREATE] Order ID not returned by Razorpay.",
                );
                return {
                    error: "Failed to create payment order from Razorpay.",
                };
            }

            const payment = await prisma.payment.create({
                data: {
                    userId: userId,
                    amount: amount,
                    currency: currency,
                    receiptId: options.receipt,
                    status: "PENDING",
                    razorpayOrderId: order.id,
                    description: `Subscription payment for ${plan} plan`,
                },
            });

            const result: PaymentResult = {
                success: true,
                orderId: order.id,
                amount: amount,
                currency: currency,
                paymentId: payment.id,
            };

            return result;
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(
                "[RAZORPAY_ORDER_CREATE] Error creating Razorpay order:",
                error,
            );
            const errorMessage =
                error.error?.description ||
                error.message ||
                "Failed to create payment order. Please try again.";
            return { error: errorMessage };
        }
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("[PAYMENT_CREATE] General error:", error);
        return { error: "Something went wrong while initiating payment." };
    }
}

export async function verifyPayment(
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    userId: string,
    planId: string,
    duration: string,
): Promise<VerificationResult> {
    try {
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return { error: "Missing payment verification details" };
        }

        const ID = process.env.RAZORPAY_SECRET_ID
            ? process.env.RAZORPAY_SECRET_ID
            : undefined;

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", ID as string)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            console.error("[PAYMENT_VERIFuY] Invalid signature.");
            await prisma.payment.updateMany({
                where: { razorpayOrderId: razorpay_order_id, userId: userId },
                data: {
                    status: "FAILED",
                    razorpayPaymentId: razorpay_payment_id,
                    description: "Invalid signature",
                },
            });
            return { error: "Invalid payment signature." };
        }

        const payment = await prisma.payment.findFirst({
            where: { razorpayOrderId: razorpay_order_id, userId: userId },
        });

        if (!payment) {
            console.error("[PAYMENT_VERIFY] Payment record not found in DB.");
            return { error: "Payment record not found." };
        }

        if (!razorpay) {
            return { error: "Payment service not configured. Please contact support." };
        }

        const razorpayPaymentDetails =
            await razorpay.payments.fetch(razorpay_payment_id);

        // Prevent processing the same Razorpay payment ID more than once
        const existingByPaymentId = await prisma.payment.findFirst({
            where: { razorpayPaymentId: razorpay_payment_id },
        });
        if (existingByPaymentId && existingByPaymentId.id !== payment.id) {
            await prisma.payment.update({
                where: { id: payment.id },
                data: {
                    status: "FAILED",
                    description: "Duplicate razorpayPaymentId detected",
                },
            });
            return { error: "This payment has already been processed." };
        }
        if (razorpayPaymentDetails.status !== "captured") {
            console.error(
                `[PAYMENT_VERIFY] Razorpay payment status not captured: ${razorpayPaymentDetails.status}`,
            );
            await prisma.payment.update({
                where: { id: payment.id },
                data: {
                    status: razorpayPaymentDetails.status.toUpperCase(),
                    razorpayPaymentId: razorpay_payment_id,
                    description: `Razorpay status: ${razorpayPaymentDetails.status}`,
                },
            });
            return {
                error: `Payment not captured by Razorpay. Current status: ${razorpayPaymentDetails.status}.`,
            };
        }

        await prisma.payment.update({
            where: { id: payment.id },
            data: {
                status: "SUCCESS",
                razorpayPaymentId: razorpay_payment_id,
                method: razorpayPaymentDetails.method || "unknown",
            },
        });

        const startDate = new Date();
        const endDate = new Date();
        if (duration === "monthly") {
            endDate.setMonth(endDate.getMonth() + 1);
        } else if (duration === "annual" || duration === "yearly") {
            endDate.setFullYear(endDate.getFullYear() + 1);
        } else {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        const existingActiveSubscription = await prisma.subscription.findFirst({
            where: { userId: userId, status: "ACTIVE" },
            orderBy: { createdAt: "desc" },
        });

        if (existingActiveSubscription) {
            console.warn(
                `User ${userId} already has an active subscription. Expiring old one.`,
            );
            await prisma.subscription.update({
                where: { id: existingActiveSubscription.id },
                data: {
                    status: "EXPIRED",
                    endDate: new Date(),
                },
            });
        }

        await prisma.subscription.create({
            data: {
                userId: userId,
                plan: planId,
                status: "ACTIVE",
                startDate: startDate,
                endDate: endDate,
                paymentId: payment.id,
                razorpayOrderId: razorpay_order_id,
                razorpayPaymentId: razorpay_payment_id,
            },
        });

        await prisma.user.update({
            where: { id: userId },
            data: { pro: true },
        });

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (user?.email) {
            await resend?.emails.send({
                from: "subscription@yourapp.com",
                to: user.email,
                subject: "Subscription Confirmation",
                html: `<p>Thank you for subscribing to the ${planId} plan! Your subscription is now active.</p>`,
            });
        }

        return { success: true };
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("[PAYMENT_VERIFY] Error:", error);
        const errorMessage =
            error.message ||
            "Something went wrong during payment verification.";
        return { error: errorMessage };
    }
}

export async function getUserPayments(): Promise<{
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    payments?: any[];
    error?: string;
}> {
    const session = await getUserSession();
    if (!session?.user?.id) {
        return { error: "Unauthorized. Please sign in to view payments." };
    }

    try {
        const payments = await prisma.payment.findMany({
            where: {
                userId: session.user.id,
            },
            orderBy: {
                createdAt: "desc",
            },
            include: {
                subscription: true,
            },
        });
        return { payments: payments };
    } catch (error) {
        console.error("Error fetching user payments:", error);
        return { error: "Failed to fetch billing history. Please try again." };
    }
}
