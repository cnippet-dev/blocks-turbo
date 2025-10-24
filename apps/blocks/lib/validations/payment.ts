import { z } from "zod";

export const createRazorpayOrderSchema = z.object({
    amount: z.number().min(1, "Amount must be a positive number."),
    currency: z.string().default("INR").optional(), // Assuming INR for Razorpay
    receipt: z.string().min(1, "Receipt ID is required."),
    planId: z.string().min(1, "Plan ID is required for order creation."),
    planName: z.string().min(1, "Plan name is required."),
    duration: z.string().min(1, "Duration is required."), // Add duration
});

export const verifyRazorpayPaymentSchema = z.object({
    razorpay_order_id: z.string().min(1, "Razorpay Order ID is required."),
    razorpay_payment_id: z.string().min(1, "Razorpay Payment ID is required."),
    razorpay_signature: z.string().min(1, "Razorpay Signature is required."),
    planId: z.string().min(1, "Plan ID is required for verification."),
    duration: z.string().min(1, "Duration is required."), // Add duration
});
