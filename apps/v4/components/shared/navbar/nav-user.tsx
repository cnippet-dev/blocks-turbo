"use client";

import React from "react";
import { signOut } from "next-auth/react";
import {
    RiHeart2Fill,
    RiLogoutBoxRFill,
    RiMoonFill,
    RiSettings2Fill,
    RiSunFill,
    RiUserFill,
} from "@remixicon/react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useSessionCache } from "@/hooks/use-session-cache";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
// Dynamically import AuthDialog. It will be in a separate JS chunk.
const AuthDialog = dynamic(() => import("../auth/dialog"), {
    loading: () => <div className="size-9 rounded-full bg-gray-200" />, // Optional: a simple loader
});

const NavUser = () => {
    const {
        data: session,
        isAuthenticated,
        isLoading,
    } = useSessionCache();
    const { theme, setTheme } = useTheme();

    return (
        <>
            {isLoading ? (
                <div className="-mt-[22px] mr-3 ml-2 w-fit">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="">
                                    <div className="mt-0 flex w-full cursor-pointer items-center justify-center gap-2">
                                        {session?.user?.image ? (
                                            <Avatar className="size-9 rounded-full">
                                                <AvatarImage
                                                    src={session.user.image}
                                                    alt="user profile"
                                                    width={1080}
                                                    height={680}
                                                />
                                            </Avatar>
                                        ) : (
                                            <UserIcon className="mx-auto size-8" />
                                        )}

                                        {/* <div
                                            className={`grid flex-1 text-left text-sm leading-tight`}
                                        >
                                            <span className="truncate font-semibold dark:text-white">
                                                {session.user?.name}
                                            </span>
                                        </div> */}
                                        {/* <ChevronsUpDown
                                            className={`ml-auto size-4 text-white`}
                                        /> */}
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-60 dark:border-neutral-800"
                                align="end"
                                forceMount
                            >
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1 py-2">
                                        <p className="text-sm leading-none font-medium text-black dark:text-white">
                                            {session?.user?.username}
                                        </p>
                                        <p className="text-muted-foreground pt-1 text-sm leading-none">
                                            {session?.user?.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer py-2"
                                    >
                                        <Link href="/account/settings">
                                            <RiUserFill className="mr-1 h-4 w-4" />
                                            <span>Account</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer py-2"
                                    >
                                        <Link href="/account/authentication">
                                            <RiSettings2Fill className="mr-1 h-4 w-4" />
                                            <span>Authentication</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer py-2"
                                    >
                                        <Link href="/account/favourites">
                                            <RiHeart2Fill className="mr-1 h-4 w-4" />
                                            <span>Favourites</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer py-2"
                                    >
                                        <Link href="/account/subscriptions">
                                            <RiHeart2Fill className="mr-1 h-4 w-4" />
                                            <span>Subsriptions</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        asChild
                                        className="cursor-pointer py-2"
                                    >
                                        <Link href="/account/billing">
                                            <RiHeart2Fill className="mr-1 h-4 w-4" />
                                            <span>Billing</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="focus:bg-muted/10">
                                    <div className="flex w-full justify-between">
                                        <span>Change theme</span>

                                        <div className="ml-auto flex w-fit gap-1 rounded-full border p-0.5 dark:border-neutral-800 [&_button]:cursor-pointer">
                                            <button
                                                onClick={() =>
                                                    setTheme("light")
                                                }
                                                className={`rounded-full p-1 ${theme === "light" ? "bg-slate-200 dark:bg-[#1a1a1a]" : ""}`}
                                                aria-label="Light mode"
                                            >
                                                <RiSunFill className="size-3" />
                                            </button>
                                            <button
                                                onClick={() => setTheme("dark")}
                                                className={`rounded-full p-1 ${theme === "dark" ? "bg-neutral-600" : ""}`}
                                                aria-label="Dark mode"
                                            >
                                                <RiMoonFill className="size-3" />
                                            </button>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="cursor-pointer py-2 text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
                                    onClick={() => signOut()}
                                >
                                    <RiLogoutBoxRFill className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <RiUserFill className="mr-2 h-4 w-4" />
                                    Sign In
                                </Button>
                            </DialogTrigger>
                            <AuthDialog />
                        </Dialog>
                    )}
                </>
            )}
        </>
    );
};

export default NavUser;

function UserIcon(props: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                    fill="#000000"
                ></path>{" "}
                <path
                    d="M12.0001 6C10.3433 6 9.00012 7.34315 9.00012 9C9.00012 10.6569 10.3433 12 12.0001 12C13.657 12 15.0001 10.6569 15.0001 9C15.0001 7.34315 13.657 6 12.0001 6Z"
                    fill="#ffffff"
                ></path>{" "}
                <path
                    d="M17.8948 16.5528C18.0356 16.8343 18.0356 17.1657 17.8948 17.4473C17.9033 17.4297 17.8941 17.4487 17.8941 17.4487L17.8933 17.4502L17.8918 17.4532L17.8883 17.46L17.8801 17.4756C17.874 17.4871 17.8667 17.5004 17.8582 17.5155C17.841 17.5458 17.8187 17.5832 17.7907 17.6267C17.7348 17.7138 17.6559 17.8254 17.5498 17.9527C17.337 18.208 17.0164 18.5245 16.555 18.8321C15.623 19.4534 14.1752 20 12.0002 20C8.31507 20 6.76562 18.4304 6.26665 17.7115C5.96476 17.2765 5.99819 16.7683 6.18079 16.4031C6.91718 14.9303 8.42247 14 10.0691 14H13.7643C15.5135 14 17.1125 14.9883 17.8948 16.5528Z"
                    fill="#ffffff"
                ></path>{" "}
            </g>
        </svg>
    );
}
