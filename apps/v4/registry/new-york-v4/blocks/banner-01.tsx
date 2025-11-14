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
        <div className="w-full space-y-4 py-10">
            <div
                hidden={closedBanners.has("newsletter-light")}
                className="flex w-full max-w-full items-center gap-2 bg-gray-100 px-6 py-4"
            >
                <Mail className="h-6 w-6 shrink-0 text-gray-700" />

                <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">
                        Stay up to date with the latest news and updates
                    </h3>
                    <p className="text-xs text-gray-600">
                        Lorem ipsum dolor sit amet consectetur odio nunc
                        adipiscing viverra.
                    </p>
                </div>

                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full max-w-sm shrink-0 rounded-full bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 shadow-none"
                />

                <Button
                    variant="secondary"
                    size="sm"
                    className="shrink-0 rounded-full bg-black text-white hover:bg-black/80"
                >
                    Subscribe
                </Button>

                <Button
                    onClick={() => toggleBanner("newsletter-light")}
                    className="shrink-0 bg-transparent p-1 text-gray-500 shadow-none hover:bg-transparent hover:text-gray-700"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            <div
                hidden={closedBanners.has("newsletter-dark")}
                className="flex w-full items-center gap-2 bg-violet-700 px-6 py-4"
            >
                <Mail className="h-6 w-6 shrink-0 text-gray-100" />

                <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-100">
                        Stay up to date with the latest news and updates
                    </h3>
                    <p className="text-xs text-gray-200">
                        Lorem ipsum dolor sit amet consectetur odio nunc
                        adipiscing viverra.
                    </p>
                </div>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full max-w-sm shrink-0 rounded-full bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 shadow-none"
                />

                <Button
                    variant="secondary"
                    size="sm"
                    className="shrink-0 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black"
                >
                    Subscribe
                </Button>

                <Button
                    onClick={() => toggleBanner("newsletter-dark")}
                    className="shrink-0 bg-transparent p-1 text-gray-100 shadow-none hover:bg-transparent hover:text-gray-200"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
