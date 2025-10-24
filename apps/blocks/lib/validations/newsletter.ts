import { z } from "zod";

export const NewsletterFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
});

export type NewsletterFormData = z.infer<typeof NewsletterFormSchema>;
