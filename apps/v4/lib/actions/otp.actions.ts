"use server";
import { prisma } from "@repo/db";

import { render } from "@react-email/render";
import { OTPEmail } from "@/components/emails/otp-email";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;
    
const MAX_ATTEMPTS = 5;
const OTP_EXPIRATION_MINUTES = 10;

function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function storeOTP(email: string, otp: string) {
    try {
        const expiresAt = new Date(
            Date.now() + OTP_EXPIRATION_MINUTES * 60 * 1000,
        );

        return await prisma.otp.upsert({
            where: { email },
            update: {
                code: otp,
                expiresAt,
                attempts: 0, // Reset attempts on new OTP
                createdAt: new Date(),
            },
            create: {
                email,
                code: otp,
                expiresAt,
                attempts: 0,
            },
        });
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to store OTP");
    }
}

export async function sendOTP(email: string) {
    try {
        const otp = generateOTP();
        await storeOTP(email, otp);

        if (!resend) {
            return { error: "Email service is not configured. Please set RESEND_API_KEY environment variable." };
        }

        const emailHtml = await render(OTPEmail({ userEmail: email, otp }));
        await resend.emails.send({
            from: "Cnippet <system@cnippet.dev>",
            to: email,
            subject: `${otp} - Cnippet Sign-in Verification`,
            html: emailHtml,
        });

        return { success: true };
    } catch (error) {
        console.error("OTP Process Error:", error);
        return { error: "OTP process failed. Please try again." };
    }
}

export async function verifyOTP(email: string, otp: string) {
    try {
        // Get OTP record
        const otpRecord = await prisma.otp.findUnique({ where: { email } });

        // Validate OTP record
        if (!otpRecord) {
            return {
                error: "OTP not found. Please request a new one.",
                shouldReset: true,
            };
        }

        // Check if expired
        if (otpRecord.expiresAt < new Date()) {
            await prisma.otp.delete({ where: { email } });
            return {
                error: "OTP expired. Please request a new one.",
                shouldReset: true,
            };
        }

        // Check max attempts
        if (otpRecord.attempts >= MAX_ATTEMPTS) {
            await prisma.otp.delete({ where: { email } });
            return {
                error: "Too many attempts. Please request a new OTP.",
                shouldReset: true,
            };
        }

        // Validate OTP code
        if (otpRecord.code !== otp) {
            // Increment attempt counter
            await prisma.otp.update({
                where: { email },
                data: { attempts: { increment: 1 } },
            });

            const remainingAttempts = MAX_ATTEMPTS - (otpRecord.attempts + 1);
            let errorMsg = "Invalid OTP. Please try again.";

            if (remainingAttempts <= 2) {
                errorMsg += ` ${remainingAttempts} ${remainingAttempts === 1 ? "attempt" : "attempts"} left.`;
            }

            return {
                error: errorMsg,
                shouldReset: false,
            };
        }

        // OTP is valid
        await prisma.otp.delete({ where: { email } });
        return { success: true };
    } catch (error) {
        console.error("Verification Error:", error);
        return {
            error: "OTP verification failed. Please try again.",
            shouldReset: false,
        };
    }
}

export async function deleteOTP(email: string) {
    try {
        await prisma.otp.delete({ where: { email } });
        return { success: true };
    } catch (error) {
        console.error("OTP Deletion Error:", error);
        return { error: "Failed to delete OTP" };
    }
}
