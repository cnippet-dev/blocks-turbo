"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner02() {
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
                hidden={closedBanners.has("announcement-light")}
                className="flex w-full items-center gap-2 bg-gray-100 px-6 py-2"
            >
                <Sparkles className="h-5 w-5 shrink-0 text-gray-700" />

                <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-900">
                        <span className="font-semibold">
                            We&apos;ve just announced our Series A1
                        </span>{" "}
                        <Link href="#" className="text-gray-600 underline">
                            Read about it from our CEO.
                        </Link>
                    </p>
                </div>

                <Button
                    variant="secondary"
                    size="sm"
                    className="shrink-0 bg-black text-white hover:bg-black/80"
                >
                    Read update
                </Button>

                <Button
                    onClick={() => toggleBanner("announcement-light")}
                    className="shrink-0 bg-transparent p-1 text-gray-500 shadow-none hover:bg-transparent hover:text-gray-700"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            <div
                hidden={closedBanners.has("announcement-dark")}
                className="flex w-full items-center gap-2 bg-purple-600 px-6 py-2"
            >
                <Sparkles className="h-5 w-5 shrink-0 text-white" />

                <div className="min-w-0 flex-1">
                    <p className="text-sm text-white">
                        <span className="font-semibold">
                            We&apos;ve just announced our Series A1
                        </span>{" "}
                        <Link
                            href="#"
                            className="text-gray-100 underline hover:text-white"
                        >
                            Read about it from our CEO.
                        </Link>
                    </p>
                </div>

                <Button
                    variant="secondary"
                    size="sm"
                    className="shrink-0 bg-white text-purple-600 hover:bg-white"
                >
                    Read update
                </Button>

                <Button
                    onClick={() => toggleBanner("announcement-dark")}
                    className="shrink-0 bg-transparent p-1 text-white shadow-none hover:bg-transparent hover:text-purple-200"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
