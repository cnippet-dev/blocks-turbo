"use server";

import { prisma } from "@repo/db";

import { z } from "zod";
import { ContactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { Resend } from "resend";
import { render } from "@react-email/components";
import { ContactNotificationEmail } from "@/components/emails/contact-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactResult = {
    success?: boolean;
    data?: {
        id: string;
        name: string;
        email: string;
        subject: string;
        message: string;
        createdAt: Date;
    };
    error?: string;
};

export async function submitContactForm(
    formData: ContactFormData
): Promise<ContactResult> {
    try {
        const validatedData = ContactFormSchema.parse(formData);

        const contact = await prisma.contact.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                subject: validatedData.subject,
                message: validatedData.message,
            },
        });

        try {
            const adminEmail = process.env.ADMIN_EMAIL || process.env.FROM_EMAIL;
            if (adminEmail) {
                const emailHtml = await render(
                    ContactNotificationEmail({
                        name: validatedData.name,
                        email: validatedData.email,
                        subject: validatedData.subject,
                        message: validatedData.message,
                    })
                );

                await resend.emails.send({
                    from: process.env.FROM_EMAIL || "onboarding@resend.dev",
                    to: adminEmail,
                    subject: `New Contact Form Submission: ${validatedData.subject}`,
                    html: emailHtml,
                });
            }
        } catch (emailError) {
            console.error("Failed to send contact notification email:", emailError);
        }

        return {
            success: true,
            data: {
                id: contact.id,
                name: contact.name,
                email: contact.email,
                subject: contact.subject,
                message: contact.message,
                createdAt: contact.createdAt,
            },
        };
    } catch (error) {
        console.error("Contact form submission error:", error);
        
        if (error instanceof z.ZodError) {
            return { error: "Invalid form data. Please check your inputs." };
        }
        
        return { error: "Failed to submit contact form. Please try again." };
    }
}

export async function getContactMessages() {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: "desc" },
        });
        
        return { success: true, data: contacts };
    } catch (error) {
        console.error("Error fetching contact messages:", error);
        return { error: "Failed to fetch contact messages." };
    }
}

export async function deleteContactMessage(id: string) {
    try {
        await prisma.contact.delete({
            where: { id },
        });
        
        return { success: true };
    } catch (error) {
        console.error("Error deleting contact message:", error);
        return { error: "Failed to delete contact message." };
    }
} 