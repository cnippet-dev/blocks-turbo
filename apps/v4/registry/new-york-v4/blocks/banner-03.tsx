"use client";

import { useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Banner03() {
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
                hidden={closedBanners.has("cookie-light")}
                className="flex w-full items-center gap-4 bg-gray-100 px-6 py-2"
            >
                <Cookie className="h-5 w-5 shrink-0 text-gray-700" />

                <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-900">
                        We use third-party cookies in order to personalize your
                        experience.{" "}
                        <Link href="#" className="text-gray-600 underline">
                            Read our Cookie Policy.
                        </Link>
                    </p>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleBanner("cookie-light")}
                    className="shrink-0 text-gray-900 hover:bg-white/10"
                >
                    Decline
                </Button>

                <Button
                    size="sm"
                    onClick={() => toggleBanner("cookie-light")}
                    className="shrink-0 bg-purple-600 text-white"
                >
                    Allow
                </Button>

                <Button
                    onClick={() => toggleBanner("cookie-light")}
                    className="shrink-0 bg-transparent p-1 text-gray-500 shadow-none hover:bg-transparent hover:text-gray-700"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            <div
                hidden={closedBanners.has("cookie-dark")}
                className="flex w-full items-center gap-4 bg-black px-6 py-2"
            >
                <Cookie className="h-5 w-5 shrink-0 text-white" />

                <div className="min-w-0 flex-1">
                    <p className="text-sm text-white">
                        We use third-party cookies in order to personalize your
                        experience.{" "}
                        <Link href="#" className="text-gray-100 underline">
                            Read our Cookie Policy.
                        </Link>
                    </p>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleBanner("cookie-dark")}
                    className="shrink-0 border-none bg-red-500 text-white hover:bg-red-600 hover:text-white"
                >
                    Decline
                </Button>

                <Button
                    size="sm"
                    onClick={() => toggleBanner("cookie-dark")}
                    className="shrink-0 bg-white text-black hover:bg-white/95"
                >
                    Allow
                </Button>

                <Button
                    onClick={() => toggleBanner("cookie-dark")}
                    className="shrink-0 bg-transparent p-1 text-white shadow-none hover:bg-transparent hover:text-purple-200"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
