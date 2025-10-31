"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { Index } from "@/__registry__";
import { useFavourites } from "@/hooks/use-favourites";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
    RiEyeLine,
    RiHeartFill,
    RiLayoutColumnLine,
    RiLayoutRowLine,
    RiSearchLine,
} from "@remixicon/react";
import { DashedBorderWithTopDots } from "@/components/dashed-layout";
import { Input } from "@/components/ui/input";

export default function PagesPage() {
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [failedImages, setFailedImages] = React.useState<Set<string>>(
        new Set(),
    );
    const { toggleFavourite, isFavourite, isPending } = useFavourites();

    const handleImageError = (pageName: string) => {
        setFailedImages((prev) => new Set(prev).add(pageName));
    };

    const pages = Object.values(Index).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.type === "registry:pages",
    );

    const filteredPages = pages.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => {
            if (item.type !== "registry:pages") return false;

            // Search filter
            if (
                searchQuery &&
                !item.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }

            return true;
        },
    );

    const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

    return (
        <>
            <section className="relative h-full">
                <DashedBorderWithTopDots />

                <div className="relative z-10 pt-4">
                    <div className="mx-auto max-w-7xl px-5">
                        <div className="relative min-h-screen">
                            <div className="grid grid-cols-12 gap-8">
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                    className="col-span-3 p-6"
                                >
                                    <div className="sticky top-20 space-y-8">
                                        <div className="relative">
                                            <RiSearchLine className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                placeholder="Search pages..."
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    setSearchQuery(
                                                        e.target.value,
                                                    )
                                                }
                                                className="h-10 rounded-xl border-gray-200 bg-white/80 shadow-sm backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500 focus-visible:ring-0 dark:border-neutral-700 dark:bg-neutral-800"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-semibold">
                                                Pages
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-neutral-400">
                                                Complete page templates ready to
                                                use
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className="col-span-9"
                                >
                                    <header className="border-b dark:border-neutral-800">
                                        <div className="flex h-16 items-center justify-between pr-2">
                                            <div className="flex items-center gap-1 text-gray-600 dark:text-neutral-400">
                                                <span className="text-sm font-medium">
                                                    {filteredPages.length}
                                                </span>
                                                <span className="text-sm">
                                                    pages found
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-neutral-900">
                                                    <Button
                                                        variant={
                                                            viewMode === "grid"
                                                                ? "default"
                                                                : "ghost"
                                                        }
                                                        size="sm"
                                                        onClick={() =>
                                                            setViewMode("grid")
                                                        }
                                                        className="h-8 w-8 rounded-md p-0"
                                                    >
                                                        <RiLayoutColumnLine className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant={
                                                            viewMode === "list"
                                                                ? "default"
                                                                : "ghost"
                                                        }
                                                        size="sm"
                                                        onClick={() =>
                                                            setViewMode("list")
                                                        }
                                                        className="h-8 w-8 rounded-md p-0"
                                                    >
                                                        <RiLayoutRowLine className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </header>

                                    {/* Enhanced Content */}
                                    <main className="px-2 py-10">
                                        {filteredPages.length === 0 ? (
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.6 }}
                                                className="flex flex-col items-center justify-center py-20 text-center"
                                            >
                                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
                                                    <RiSearchLine className="h-10 w-10 text-blue-600" />
                                                </div>
                                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                                    No pages found
                                                </h3>
                                                <p className="mb-6 max-w-md text-gray-600">
                                                    Try adjusting your search
                                                    terms to find what you&apos;re
                                                    looking for
                                                </p>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => setSearchQuery("")}
                                                    className="rounded-full"
                                                >
                                                    Clear search
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 1.4,
                                                }}
                                                className={`grid gap-8 ${
                                                    viewMode === "grid"
                                                        ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-2"
                                                        : "grid-cols-1"
                                                }`}
                                            >
                                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                                {filteredPages.map((page: any, index: number) => {
                                                    const pageNumber = page.number || "1";
                                                    const pageSlug = `/pages/${page.name.split('-').slice(0, -1).join('-')}`;
                                                    const thumbnail = `https://res.cloudinary.com/dcxm3ccir/image/upload/v1761545260/${page.name}.png`;
                                                    
                                                    return (
                                                        <motion.div
                                                            key={page.name}
                                                            initial={{
                                                                y: 20,
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                y: 0,
                                                                opacity: 1,
                                                            }}
                                                            transition={{
                                                                duration: 0.6,
                                                                delay: 1.6 + index * 0.1,
                                                            }}
                                                        >
                                                            <Card className="group overflow-hidden border-none shadow-none transition-all duration-300">
                                                                <CardContent className="p-0">
                                                                    <div className="relative overflow-hidden">
                                                                        <div className="relative overflow-hidden rounded-xl border border-gray-200/40">
                                                                            {failedImages.has(
                                                                                page.name,
                                                                            ) ? (
                                                                                <Image
                                                                                    src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/coming-soon.png`}
                                                                                    alt={
                                                                                        page.name
                                                                                    }
                                                                                    width={
                                                                                        4210
                                                                                    }
                                                                                    height={
                                                                                        1080
                                                                                    }
                                                                                    suppressHydrationWarning
                                                                                    className="aspect-video w-full object-cover object-top"
                                                                                />
                                                                            ) : (
                                                                                <Image
                                                                                    src={thumbnail}
                                                                                    alt={
                                                                                        page.name
                                                                                    }
                                                                                    width={
                                                                                        4210
                                                                                    }
                                                                                    height={
                                                                                        1080
                                                                                    }
                                                                                    suppressHydrationWarning
                                                                                    className="aspect-video w-full object-cover object-top"
                                                                                    onError={() =>
                                                                                        handleImageError(
                                                                                            page.name,
                                                                                        )
                                                                                    }
                                                                                />
                                                                            )}
                                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                                        </div>

                                                                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in group-hover:bottom-6 group-hover:opacity-100">
                                                                            <div className="flex items-center justify-center gap-3">
                                                                                <TooltipProvider>
                                                                                    <Tooltip>
                                                                                        <TooltipTrigger
                                                                                            asChild
                                                                                        >
                                                                                            <Button
                                                                                                onClick={() =>
                                                                                                    toggleFavourite(
                                                                                                        page.name,
                                                                                                    )
                                                                                                }
                                                                                                disabled={
                                                                                                    isPending
                                                                                                }
                                                                                                className="h-10 w-fit cursor-pointer rounded-lg bg-white p-2 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white [&_svg]:size-5.5"
                                                                                            >
                                                                                                <RiHeartFill
                                                                                                    className={` ${
                                                                                                        isFavourite(
                                                                                                            page.name,
                                                                                                        )
                                                                                                            ? "fill-red-500 text-red-500"
                                                                                                            : "text-black hover:text-red-500"
                                                                                                    }`}
                                                                                                />
                                                                                            </Button>
                                                                                        </TooltipTrigger>

                                                                                        <TooltipContent
                                                                                            side="top"
                                                                                            showArrow={
                                                                                                true
                                                                                            }
                                                                                            className="dark px-3 py-2 text-sm"
                                                                                        >
                                                                                            {isFavourite(
                                                                                                page.name,
                                                                                            )
                                                                                                ? "Remove from favourites"
                                                                                                : "Add to favourites"}
                                                                                        </TooltipContent>
                                                                                    </Tooltip>
                                                                                </TooltipProvider>

                                                                                <TooltipProvider>
                                                                                    <Tooltip>
                                                                                        <TooltipTrigger
                                                                                            asChild
                                                                                        >
                                                                                            <Button
                                                                                                size="sm"
                                                                                                className="h-10 cursor-pointer rounded-lg bg-white p-2 shadow-lg backdrop-blur-sm hover:scale-105 hover:bg-white [&_svg]:size-5"
                                                                                            >
                                                                                                <Link
                                                                                                    href={`${pageSlug}`}
                                                                                                    target="_blank"
                                                                                                >
                                                                                                    <RiEyeLine className="size-5 text-black" />
                                                                                                </Link>
                                                                                            </Button>
                                                                                        </TooltipTrigger>

                                                                                        <TooltipContent
                                                                                            side="top"
                                                                                            showArrow={
                                                                                                true
                                                                                            }
                                                                                            className="dark px-3 py-2 text-sm"
                                                                                        >
                                                                                            Preview
                                                                                        </TooltipContent>
                                                                                    </Tooltip>
                                                                                </TooltipProvider>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="px-2 py-3">
                                                                        <div className="mb-1 flex items-start justify-between">
                                                                            <h3 className="text-xl font-medium tracking-tight">
                                                                                {capitalize(
                                                                                    page.name,
                                                                                )}
                                                                            </h3>
                                                                            {pageNumber && (
                                                                                <Badge className="rounded-full border-0 bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 text-xs text-white">
                                                                                    #{pageNumber}
                                                                                </Badge>
                                                                            )}
                                                                        </div>
                                                                        <p className="text-sm font-medium text-gray-600 dark:text-neutral-400">
                                                                            Complete page
                                                                            template
                                                                        </p>
                                                                    </div>
                                                                </CardContent>
                                                            </Card>
                                                        </motion.div>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </main>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

