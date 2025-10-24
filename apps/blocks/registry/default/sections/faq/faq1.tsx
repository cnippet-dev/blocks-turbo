import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";

export default function Component() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <div className="grid items-start gap-16 lg:grid-cols-2">
                {/* Left Column - Main Content */}
                <div className="space-y-8">
                    {/* FAQs Badge */}
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                        <span className="font-medium text-gray-600 dark:text-gray-400">FAQs</span>
                    </div>

                    {/* Main Heading */}
                    <div>
                        <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                            Frequently
                            <br />
                            Asked Questions
                        </h1>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                            Each artifact is more than just an object; it's a
                            piece of history, a remnant of a civilization long
                            gone.
                        </p>
                    </div>

                    {/* View all FAQs Button */}
                    <div>
                        <Button className="rounded-full bg-blue-600 dark:bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600">
                            View all FAQs
                        </Button>
                    </div>

                    {/* Support Options */}
                    <div className="grid gap-6 pt-8 sm:grid-cols-2">
                        {/* Live Chat */}
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                                    Live Chat
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Talk to customer support
                                </p>
                            </div>
                        </div>

                        {/* Read FAQs */}
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                <HelpCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                                    Read FAQs
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Browse general questions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - FAQ Accordion */}
                <div className="lg:pl-8">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="space-y-4"
                    >
                        <AccordionItem
                            value="item-1"
                            className="rounded-lg border border-gray-200 dark:border-gray-700 px-6"
                        >
                            <AccordionTrigger className="py-6 text-left font-semibold text-gray-900 dark:text-gray-100 hover:no-underline">
                                How does Antik source its artifacts?
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-gray-600 dark:text-gray-400">
                                (Frequently Asked Questions) Etiam convallis
                                lorem lobortis nulla molestie nec tincidunt ex
                                ullamcorper quisque ultrices lobortis elit sed
                                euismod.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-2"
                            className="rounded-lg border border-gray-200 px-6"
                        >
                            <AccordionTrigger className="py-6 text-left font-semibold text-gray-900 hover:no-underline">
                                What is Antik, and what do we do?
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-gray-600">
                                Antik is a platform dedicated to preserving and
                                sharing historical artifacts with collectors and
                                enthusiasts worldwide.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-3"
                            className="rounded-lg border border-gray-200 px-6"
                        >
                            <AccordionTrigger className="py-6 text-left font-semibold text-gray-900 hover:no-underline">
                                How do you verify the authenticity of artifacts?
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-gray-600">
                                We work with certified experts and use advanced
                                authentication methods to ensure every
                                artifact's authenticity.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            value="item-4"
                            className="rounded-lg border border-gray-200 px-6"
                        >
                            <AccordionTrigger className="py-6 text-left font-semibold text-gray-900 hover:no-underline">
                                Can I request more information about a specific
                                artifact?
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-gray-600">
                                Yes, you can contact our team for detailed
                                information about any artifact in our
                                collection.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
