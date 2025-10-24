"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/actions/contact.actions";
import { ContactFormSchema, type ContactFormData } from "@/lib/validations/contact";

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: ContactFormData) {
        setIsLoading(true);
        try {
            const result = await submitContactForm(values);

            if (result.success) {
                toast.success("Message sent successfully! We'll get back to you soon.");
                form.reset();
            } else {
                toast.error(result.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="relative w-full overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-4">
                <div className="relative w-full">
                    <div className="col-span-10 flex w-full flex-col items-center justify-center bg-white p-8 text-center md:p-16 dark:bg-black">
                        <div className="w-full max-w-md">
                            <div className="mb-12 text-left">
                                <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-500">
                                    Send us a message and we&apos;ll respond as soon as possible
                                </p>
                            </div>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-4 text-left"
                                >
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-medium text-black dark:text-white">
                                                    Full Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your full name"
                                                        className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-medium text-black dark:text-white">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter your email"
                                                        className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-medium text-black dark:text-white">
                                                    Subject
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="What is this about?"
                                                        className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-medium text-black dark:text-white">
                                                    Message
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us more about your inquiry..."
                                                        className="mt-1 w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-neutral-300 bg-transparent px-0 py-2 font-light shadow-none placeholder:text-base placeholder:text-neutral-500 focus:border-purple-500 focus:outline-none focus-visible:ring-0 dark:border-neutral-700 resize-none"
                                                        rows={5}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-none bg-blue-700 text-white shadow-none hover:bg-blue-800 mt-10"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            </Form>

                            <div className="mt-10 text-left">
                                <p className="text-sm text-gray-500">
                                    You can also reach us at{" "}
                                    <a
                                        href="mailto:contact@example.com"
                                        className="text-blue-600 hover:underline"
                                    >
                                        contact@cnippet.dev
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 