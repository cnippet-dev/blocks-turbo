import { NextResponse } from "next/server";
import { verifyPayment } from "@/lib/actions/payment.actions";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("body", body);
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            userId,
            planId,
            duration,
        } = body;

        if (
            !razorpay_order_id ||
            !razorpay_payment_id ||
            !razorpay_signature ||
            !userId ||
            !planId ||
            !duration
        ) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        const result = await verifyPayment(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            userId,
            planId,
            duration,
        );

        if (result.error) {
            return NextResponse.json({ error: result.error }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[PAYMENT_VERIFY] Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
