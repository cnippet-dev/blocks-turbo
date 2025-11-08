"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";

import { Index } from "@/__registry__";
import { useFavourites } from "@/hooks/use-favourites";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    RiArrowDownSLine,
    RiCloseLine,
    RiEyeLine,
    RiHeartFill,
    RiLayoutColumnLine,
    RiLayoutRowLine,
    RiMenu2Line,
    RiMenuUnfold2Line,
    RiSearchLine,
} from "@remixicon/react";
import { DashedBorderWithTopDots } from "@/components/dashed-layout";

const getCategories = () => {
    return Array.from(
        new Set(
            Object.values(Index)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .filter((item: any) => item.type === "registry:block")
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((item: any) => {
                    const match = item.name.match(/^(.*?)-/);
                    return match ? match[1] : item.name;
                }),
        ),
    );
};

export default function SectionsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const urlCategories = searchParams.get("categories") || "";
    const selectedCategories = urlCategories
        .split("|")
        .map((c) => c.trim())
        .filter(Boolean);
    const urlLicense = searchParams.get("license") || "";
    const categories = getCategories();
    const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [failedImages, setFailedImages] = React.useState<Set<string>>(
        new Set(),
    );
    const { toggleFavourite, isFavourite, isPending } = useFavourites();

    const handleImageError = (sectionName: string) => {
        setFailedImages((prev) => new Set(prev).add(sectionName));
    };

    const filteredSections = Object.values(Index).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => {
            if (item.type !== "registry:block") return false;

            // Search filter
            if (
                searchQuery &&
                !item.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }

            if (selectedCategories.length > 0) {
                const match = item.name.match(/^(.*?)-/);
                const category = match ? match[1] : item.name;
                if (!selectedCategories.includes(category)) return false;
            }
            // License filtering
            if (urlLicense === "pro" && !item.pro) return false;
            if (urlLicense === "starter" && !item.starter) return false;
            if (urlLicense === "free" && (item.pro || item.starter)) return false;
            return true;
        },
    );

    const updateCategoryInUrl = (categoriesArr: string[], license?: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (categoriesArr.length > 0) {
            params.set("categories", categoriesArr.join("|"));
        } else {
            params.delete("categories");
        }
        if (license) {
            params.set("license", license);
        } else {
            params.delete("license");
        }
        router.push(`/sections?${params.toString()}`);
    };

    const capitalize = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1);

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
                                    className={`${sidebarOpen ? "col-span-3" : "hidden"} p-6`}
                                >
                                    <div
                                        className={`${sidebarOpen ? "sticky" : "block"} top-20 space-y-8`}
                                    >
                                        <div className="relative">
                                            <RiSearchLine className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                placeholder="Search components..."
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
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-semibold">
                                                    Active Filters
                                                </h3>
                                                {(selectedCategories.length >
                                                    0 ||
                                                    urlLicense) && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() =>
                                                            updateCategoryInUrl(
                                                                [],
                                                                "",
                                                            )
                                                        }
                                                        className="text-xs text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                                                    >
                                                        Clear all
                                                    </Button>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedCategories.length ===
                                                    0 &&
                                                    !urlLicense && (
                                                        <span className="text-xs text-gray-400">
                                                            No filters applied
                                                        </span>
                                                    )}
                                                {selectedCategories.map(
                                                    (category) => (
                                                        <Button
                                                            key={category}
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => {
                                                                const updated =
                                                                    selectedCategories.filter(
                                                                        (c) =>
                                                                            c !==
                                                                            category,
                                                                    );
                                                                updateCategoryInUrl(
                                                                    updated,
                                                                    urlLicense,
                                                                );
                                                            }}
                                                            className="cursor-pointer justify-start gap-1 rounded-full border-gray-200 bg-neutral-200 text-sm font-normal text-black shadow-none transition-all duration-200 hover:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800 [&_svg]:size-3"
                                                        >
                                                            {capitalize(
                                                                category,
                                                            )}
                                                            <RiCloseLine />
                                                        </Button>
                                                    ),
                                                )}
                                                {urlLicense && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="cursor-pointer justify-start gap-1 rounded-full border-none bg-purple-700 px-2 text-sm font-normal text-white shadow-none transition-all duration-200 hover:bg-purple-600 dark:text-neutral-300 dark:hover:bg-neutral-800 [&_svg]:size-3"
                                                        onClick={() =>
                                                            updateCategoryInUrl(
                                                                selectedCategories,
                                                                "",
                                                            )
                                                        }
                                                    >
                                                        {urlLicense === "pro"
                                                            ? "Pro"
                                                            : "Free"}
                                                        <RiCloseLine />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        <Collapsible
                                            defaultOpen
                                            className="space-y-4"
                                        >
                                            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg text-sm font-semibold">
                                                Categories
                                                <RiArrowDownSLine className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="space-y-3">
                                                <div className="flex flex-wrap gap-2">
                                                    {categories
                                                        .filter(
                                                            (category) =>
                                                                !selectedCategories.includes(
                                                                    category,
                                                                ),
                                                        )
                                                        .map((category) => (
                                                            <Button
                                                                key={category}
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => {
                                                                    const updated =
                                                                        [
                                                                            ...selectedCategories,
                                                                            category,
                                                                        ];
                                                                    updateCategoryInUrl(
                                                                        updated,
                                                                        urlLicense,
                                                                    );
                                                                }}
                                                                className="cursor-pointer justify-start rounded-full border-gray-200 text-sm font-normal shadow-none transition-all duration-200 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
                                                            >
                                                                {capitalize(
                                                                    category,
                                                                )}
                                                            </Button>
                                                        ))}
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                        {/* License */}
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-semibold">
                                                License
                                            </h3>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant={
                                                        urlLicense === "pro"
                                                            ? "default"
                                                            : "outline"
                                                    }
                                                    size="sm"
                                                    onClick={() =>
                                                        updateCategoryInUrl(
                                                            selectedCategories,
                                                            urlLicense === "pro"
                                                                ? ""
                                                                : "pro",
                                                        )
                                                    }
                                                    className={
                                                        urlLicense === "pro"
                                                            ? "cursor-pointer rounded-full border-neutral-800 bg-linear-to-r from-purple-700 to-rose-600 text-sm text-white"
                                                            : "cursor-pointer rounded-full text-sm font-normal shadow-none transition-all duration-200 dark:border-neutral-800"
                                                    }
                                                >
                                                    Pro
                                                </Button>
                                                <Button
                                                    variant={
                                                        urlLicense === "free"
                                                            ? "default"
                                                            : "outline"
                                                    }
                                                    size="sm"
                                                    onClick={() =>
                                                        updateCategoryInUrl(
                                                            selectedCategories,
                                                            urlLicense ===
                                                                "free"
                                                                ? ""
                                                                : "free",
                                                        )
                                                    }
                                                    className={
                                                        urlLicense === "free"
                                                            ? "cursor-pointer rounded-full border-neutral-800 bg-linear-to-r from-violet-600 to-blue-700 text-sm text-white"
                                                            : "cursor-pointer rounded-full text-sm font-normal shadow-none transition-all duration-200 dark:border-neutral-800"
                                                    }
                                                >
                                                    Free
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                    className={`${sidebarOpen ? "col-span-9" : "col-span-12"}`}
                                >
                                    <header className="border-b dark:border-neutral-800">
                                        <div className="flex h-16 items-center justify-between pr-2">
                                            <div className="flex items-center gap-6">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        setSidebarOpen(
                                                            !sidebarOpen,
                                                        )
                                                    }
                                                    className="cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 [&_svg]:size-5"
                                                >
                                                    {sidebarOpen ? (
                                                        <RiMenuUnfold2Line />
                                                    ) : (
                                                        <RiMenu2Line />
                                                    )}
                                                </Button>
                                                <div className="flex items-center gap-1 text-gray-600 dark:text-neutral-400">
                                                    <span className="text-sm font-medium">
                                                        {
                                                            filteredSections.length
                                                        }
                                                    </span>
                                                    <span className="text-sm">
                                                        components found
                                                    </span>
                                                </div>
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
                                        {filteredSections.length === 0 ? (
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.6 }}
                                                className="flex flex-col items-center justify-center py-20 text-center"
                                            >
                                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-100 to-purple-100">
                                                    <RiSearchLine className="h-10 w-10 text-blue-600" />
                                                </div>
                                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                                    No components found
                                                </h3>
                                                <p className="mb-6 max-w-md text-gray-600">
                                                    Try adjusting your filters
                                                    or search terms to find what
                                                    you&apos;re looking for
                                                </p>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => {
                                                        updateCategoryInUrl(
                                                            [],
                                                            "",
                                                        );
                                                        setSearchQuery("");
                                                    }}
                                                    className="rounded-full"
                                                >
                                                    Clear all filters
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
                                                {filteredSections.map((section: any, index: number,
                                                    ) => {
                                                        const match =
                                                            section.name.match(
                                                                /^(.*?)-/,
                                                            );
                                                        const category = match
                                                            ? match[1]
                                                            : section.name;
                                                        return (
                                                            <motion.div
                                                                key={
                                                                    section.name
                                                                }
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
                                                                    delay:
                                                                        1.6 +
                                                                        index *
                                                                            0.1,
                                                                }}
                                                            >
                                                                <Card className="group overflow-hidden border-none shadow-none transition-all duration-300">
                                                                    <CardContent className="p-0">
                                                                        <div className="relative overflow-hidden">
                                                                            <div className="relative overflow-hidden rounded-xl border border-gray-200/40">
                                                                                {failedImages.has(
                                                                                    section.name,
                                                                                ) ? (
                                                                                    <Image
                                                                                        src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/coming-soon.png`}
                                                                                        alt={
                                                                                            section.name
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
                                                                                        src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/${section.name}.png`}
                                                                                        alt={
                                                                                            section.name
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
                                                                                                section.name,
                                                                                            )
                                                                                        }
                                                                                    />
                                                                                )}
                                                                                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                                                                                                            section.name,
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
                                                                                                                section.name,
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
                                                                                                    section.name,
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
                                                                                                        href={`/sections/${section.name.split("-")[0]}`}
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
                                                                                        section.name.replace(
                                                                                            /-/g,
                                                                                            " 0",
                                                                                        ),
                                                                                    )}
                                                                                </h3>
                                                                                {section.pro && (
                                                                                    <Badge className="rounded-full border-0 bg-linear-to-r from-purple-700 to-pink-500 px-1.5 py-0.5 text-xs text-white">
                                                                                        Pro
                                                                                    </Badge>
                                                                                )}
                                                                            </div>
                                                                            <p className="text-sm font-medium text-gray-600 capitalize dark:text-neutral-400">
                                                                                {
                                                                                    category
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </CardContent>
                                                                </Card>
                                                            </motion.div>
                                                        );
                                                    },
                                                )}
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
