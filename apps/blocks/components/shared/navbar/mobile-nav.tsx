"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

export function MobileNav() {
    const [open, setOpen] = React.useState(false);

    const onOpenChange = React.useCallback((open: boolean) => {
        setOpen(open);
    }, []);

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-full items-center gap-4 pl-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="!size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80svh] p-0">
                <DrawerTitle className="sr-only">Mobile Navigation</DrawerTitle>
                <div className="overflow-auto p-6">
                    <ul className="mt-5 space-y-2">
                        <li>
                            <MobileLink
                                href="#"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Components
                            </MobileLink>
                        </li>
                        <li>
                            <MobileLink
                                href="#"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Motion
                            </MobileLink>
                        </li>
                        <li>
                            <MobileLink
                                href="#"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Chart
                            </MobileLink>
                        </li>
                        <li>
                            <MobileLink
                                href="#"
                                onOpenChange={setOpen}
                                className="relative z-10 w-11/12 bg-white pb-4 text-sm/6 font-medium text-zinc-950 dark:bg-zinc-950 dark:text-white"
                            >
                                Colors
                            </MobileLink>
                        </li>
                    </ul>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn("text-[1.15rem]", className)}
            {...props}
        >
            {children}
        </Link>
    );
}
