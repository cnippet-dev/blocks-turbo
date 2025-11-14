"use client";

import { useState } from "react";
import { Mail, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Banner01() {
    const [closedBanners, setClosedBanners] = useState<Set<string>>(new Set());

    const toggleBanner = (id: string) => {
        const newSet = new Set(closedBanners);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setClosedBanners(newSet);
    };

    return (
        <div className="w-full space-y-4 py-4 md:py-10">
            <div
                hidden={closedBanners.has("newsletter-light")}
                className="relative flex flex-col justify-between gap-3 bg-gray-100 px-4 py-4 md:flex-row md:items-center md:gap-2 md:px-6"
            >
                <div className="flex items-start gap-2 md:items-center">
                    <Mail className="h-5 w-5 shrink-0 text-gray-700 md:h-6 md:w-6" />

                    <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Stay up to date with the latest news and updates
                        </h3>
                        <p className="text-xs text-gray-600">
                            Lorem ipsum dolor sit amet consectetur odio nunc
                            adipiscing viverra.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row md:flex-row md:items-center">
                    <Input
                        id="email-light"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-full bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 shadow-none sm:max-w-sm md:max-w-sm"
                    />

                    <Button
                        variant="secondary"
                        size="sm"
                        className="w-full rounded-full bg-black text-white hover:bg-black/80 sm:w-auto"
                    >
                        Subscribe
                    </Button>

                    <Button
                        onClick={() => toggleBanner("newsletter-light")}
                        className="absolute top-2 right-2 shrink-0 bg-transparent p-1 text-gray-500 shadow-none hover:bg-transparent hover:text-gray-700 md:relative md:top-0 md:right-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div
                hidden={closedBanners.has("newsletter-dark")}
                className="relative flex flex-col justify-between gap-3 bg-violet-700 px-4 py-4 md:flex-row md:items-center md:gap-2 md:px-6"
            >
                <div className="flex items-start gap-2 md:items-center">
                    <Mail className="h-5 w-5 shrink-0 text-gray-100 md:h-6 md:w-6" />

                    <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-gray-100">
                            Stay up to date with the latest news and updates
                        </h3>
                        <p className="text-xs text-gray-200">
                            Lorem ipsum dolor sit amet consectetur odio nunc
                            adipiscing viverra.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row md:flex-row md:items-center">
                    <Input
                        id="email-dark"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-full bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 shadow-none sm:max-w-sm md:max-w-sm"
                    />

                    <Button
                        variant="secondary"
                        size="sm"
                        className="w-full rounded-full bg-gray-900 text-white hover:bg-white hover:text-black sm:w-auto"
                    >
                        Subscribe
                    </Button>

                    <Button
                        onClick={() => toggleBanner("newsletter-dark")}
                        className="absolute top-2 right-2 shrink-0 bg-transparent p-1 text-gray-100 shadow-none hover:bg-transparent hover:text-gray-200 md:relative md:top-0 md:right-0"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
