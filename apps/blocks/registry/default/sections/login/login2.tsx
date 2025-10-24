"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    RiEyeFill,
    RiEyeOffFill,
    RiFacebookCircleFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
} from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="font-kumb min-h-screen overflow-hidden">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        <div className="h-14 rounded-2xl border bg-white shadow-sm">
                            <Image
                                src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-light.png"
                                alt=""
                                className="size-13"
                                width={1080}
                                height={1080}
                                suppressHydrationWarning
                            />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-medium text-gray-900 lg:text-4xl">
                                World Class Components
                            </h1>
                            <p className="mx-auto max-w-md text-lg font-normal text-gray-500 lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                        </div>

                        <Button className="shadow-8 rounded-full bg-violet-600 px-8 py-3 text-white hover:bg-violet-700">
                            Cnippet App Store
                        </Button>

                        <div className="relative mt-12 flex justify-center lg:justify-start">
                            <div className="relative">
                                <div className="h-[520px] w-72 rounded-[3rem] bg-black p-2 shadow-2xl">
                                    <div className="absolute top-24 z-50">
                                        <Image
                                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/hero-2.png`}
                                            alt=""
                                            width={4210}
                                            height={1080}
                                            className="aspect-[16/10] h-full w-full scale-150 rounded-2xl border bg-white object-cover object-top p-1 shadow-2xl"
                                        />
                                    </div>
                                    <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                                        {/* Status Bar */}
                                        <div className="flex items-center justify-between px-6 pt-4 pb-2">
                                            <span className="text-sm font-semibold">
                                                9:41
                                            </span>
                                            <div className="flex items-center space-x-1">
                                                <div className="flex space-x-1">
                                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                                    <div className="h-1 w-1 rounded-full bg-black"></div>
                                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                                </div>
                                                <svg
                                                    className="h-4 w-6"
                                                    fill="black"
                                                    viewBox="0 0 24 16"
                                                >
                                                    <rect
                                                        x="1"
                                                        y="3"
                                                        width="22"
                                                        height="10"
                                                        rx="2"
                                                        fill="none"
                                                        stroke="black"
                                                        strokeWidth="1"
                                                    />
                                                    <rect
                                                        x="2"
                                                        y="4"
                                                        width="18"
                                                        height="8"
                                                        rx="1"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="relative mt-10 px-6">
                                            <div className="relative mt-10 hidden h-full py-4 lg:block">
                                                <div className="flex translate-y-40 flex-col items-end gap-6">
                                                    <Image
                                                        src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-2.png`}
                                                        alt=""
                                                        width={4210}
                                                        height={1080}
                                                        className="aspect-[16/10] h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                                                    />
                                                    <Image
                                                        src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-2.png`}
                                                        alt=""
                                                        width={4210}
                                                        height={1080}
                                                        className="aspect-[16/10] h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-md space-y-8 lg:mx-0">
                        <div className="space-y-2 text-center lg:text-left">
                            <h2 className="mt-2 text-3xl font-medium">
                                Login to Cnippet!
                            </h2>
                            <p className="font-normal text-gray-600">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center space-x-3 lg:justify-start [&>button]:cursor-pointer">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full border p-2 [&>svg]:size-6"
                            >
                                <RiFacebookCircleFill />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full border p-2 [&>svg]:size-6"
                            >
                                <RiInstagramFill />
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full border p-2 [&>svg]:size-6"
                            >
                                <RiLinkedinBoxFill />
                            </Button>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-full border border-dashed border-neutral-300"></div>
                            <div className="bg-white px-2 text-gray-500">
                                or
                            </div>
                            <div className="w-full border border-dashed border-neutral-300"></div>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="firstName"
                                        className="text-sm font-medium"
                                    >
                                        First Name{" "}
                                        <span className="text-violet-500">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="John"
                                        className="py-5"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="lastName"
                                        className="text-sm font-medium"
                                    >
                                        Last Name{" "}
                                        <span className="text-violet-500">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Smith"
                                        className="py-5"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email Address{" "}
                                    <span className="text-violet-500">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="py-5"
                                />
                            </div>

                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">
                                        Password
                                        <span className="text-purple-500">
                                            *
                                        </span>
                                    </Label>
                                </div>
                                <div className="flex overflow-hidden rounded-lg border">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="* * * * * * * *"
                                        required
                                        className="border-none py-5 shadow-none focus-visible:border-none focus-visible:ring-0"
                                    />
                                    <button
                                        className="pr-3"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <RiEyeOffFill className="size-5 text-neutral-500" />
                                        ) : (
                                            <RiEyeFill className="size-5 text-neutral-500" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 font-normal">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms" className="text-sm">
                                    I agree to the{" "}
                                    <Link
                                        href="#"
                                        className="text-violet-600 hover:text-violet-700"
                                    >
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="#"
                                        className="text-violet-600 hover:text-violet-700"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </Label>
                            </div>
                            <Button
                                type="submit"
                                className="shadow-8 w-full rounded-full bg-violet-600 hover:bg-violet-700"
                            >
                                Register
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
