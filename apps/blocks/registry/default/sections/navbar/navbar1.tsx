"use client";
import Link from "next/link";
import { Search, Heart, Bookmark, User, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
const artifactCollections = [
    {
        title: "Babylonian",
        description: "Browse 20+ artifacts",
        count: "20+",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Roman",
        description: "3th-5th centuries BCE",
        count: "15+",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Greek",
        description: "6th-8th centuries BCE",
        count: "12+",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        title: "Egyptian",
        description: "Ancient dynasty artifacts",
        count: "25+",
        image: "/placeholder.svg?height=80&width=80",
    },
];

const solutions = [
    {
        title: "Digital Cataloging",
        description: "Organize and manage your artifact collections digitally",
    },
    {
        title: "Authentication Services",
        description: "Verify the authenticity of historical artifacts",
    },
    {
        title: "Conservation Tools",
        description: "Professional tools for artifact preservation",
    },
    {
        title: "Research Database",
        description: "Access comprehensive historical research data",
    },
];

export default function ArtifactsNavbar() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpand = () => {
        setIsExpanded((prevState) => !prevState);
    };
    return (
        <div className="w-full">
            <div className="mt-2 text-center text-sm">
                <div className="mx-auto max-w-7xl rounded-full border bg-gray-100 px-4 py-2">
                    <span className="text-gray-600">
                        ✦ We've curated over 100+ hand-made and ancient
                        artifacts!{" "}
                        <Link
                            href="#"
                            className="text-blue-600 hover:underline"
                        >
                            Browse collection
                        </Link>
                    </span>
                </div>
            </div>

            <div className="border-b bg-white px-4 py-3">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="flex w-full items-center">
                        <DropdownMenu
                            open={isExpanded}
                            onOpenChange={setIsExpanded}
                        >
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="flex items-center rounded-full border-none text-base shadow-none"
                                    aria-expanded={isExpanded}
                                >
                                    Artifacts
                                    <ChevronDownIcon
                                        className={`relative top-[1px] ml-1 size-3 transition duration-300 ${isExpanded ? "!rotate-180" : ""}`}
                                        aria-hidden="true"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="flex w-60 flex-wrap rounded-xl p-3"
                                align="start"
                            >
                                <DropdownMenuItem className="rounded-lg px-4">
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-lg px-4">
                                    Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-lg px-4">
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-lg px-4">
                                    Keyboard shortcuts
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Separator orientation="vertical" className="!h-6" />

                        <div className="w-full pl-2">
                            <div className="relative w-fit flex-1">
                                <Search className="absolute top-1/2 left-3 size-5 -translate-y-1/2 transform text-gray-400" />
                                <Input
                                    type="search"
                                    placeholder="Search over 100+ templates..."
                                    className="w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-gray-200 pl-10 shadow-none placeholder:text-base focus-visible:border-b-[1.5px] focus-visible:ring-0"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-black">
                                <span className="text-sm font-bold text-white">
                                    a
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Search and Logo */}

                    {/* Right Section - Icons and Explore Button */}
                    <div className="flex items-center space-x-3">
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bookmark className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button className="bg-blue-600 px-6 text-white hover:bg-blue-700">
                            Explore
                        </Button>
                    </div>
                </div>
            </div>

            {/* Secondary Navigation */}
            <div className="border-b bg-white px-4 py-3">
                <div className="mx-auto max-w-7xl">
                    <NavigationMenu>
                        <NavigationMenuList className="space-x-8">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                                    Solutions
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="rounded-3xl">
                                    <ul className="grid w-[400px] gap-3 rounded-3xl p-6">
                                        {solutions.map((solution) => (
                                            <li key={solution.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg p-3 transition-colors hover:bg-gray-50"
                                                    >
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {solution.title}
                                                        </div>
                                                        <div className="mt-1 text-sm text-gray-500">
                                                            {
                                                                solution.description
                                                            }
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        About
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        Artist
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        Contact
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
}
