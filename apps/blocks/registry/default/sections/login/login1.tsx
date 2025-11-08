"use client";
import { useState } from "react";
import Image from "next/image";
import { RiEyeFill, RiEyeOffFill } from "@remixicon/react";
import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="grid h-screen overflow-hidden font-sans lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-sm">
                        <form
                            className={cn("flex flex-col gap-6", className)}
                            {...props}
                        >
                            <div className="flex flex-col items-start gap-2 text-left">
                                <div className="w-fit rounded-full border border-purple-200 px-2 py-1 shadow-sm shadow-purple-400">
                                    <p className="text-xs">Login Cnippet</p>
                                </div>
                                <h1 className="mt-2 text-3xl font-semibold">
                                    Welcome to Cnippet!
                                </h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Register your account to get started.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <Label htmlFor="name">
                                            First Name
                                            <span className="text-purple-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John"
                                            required
                                            className="py-5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="name">
                                            Last Name
                                            <span className="text-purple-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Doe"
                                            required
                                            className="py-5"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">
                                        Email Address
                                        <span className="text-purple-500">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
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
                                                showPassword
                                                    ? "text"
                                                    : "password"
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
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="terms"
                                        className="border-gray-300"
                                    />
                                    <Label
                                        htmlFor="terms"
                                        className="text-sm text-black"
                                    >
                                        I agree to the Terms and Privacy Policy
                                    </Label>
                                </div>
                                <Button
                                    type="submit"
                                    className="shadow-8 w-full bg-violet-600 hover:bg-violet-700"
                                >
                                    Register
                                </Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-full border border-dashed border-neutral-300"></div>
                                <div className="bg-white px-2 text-gray-500">
                                    or
                                </div>
                                <div className="w-full border border-dashed border-neutral-300"></div>
                            </div>

                            <Button
                                variant="outline"
                                className="h-10 w-full rounded-xl border-gray-200 bg-transparent hover:bg-gray-50"
                            >
                                <svg
                                    className="mr-2 h-5 w-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="relative hidden h-full lg:block">
                <div className="flex h-full flex-col items-end justify-end overflow-hidden bg-gray-100">
                    <div className="mt-20 mr-auto mb-auto space-y-2 pl-6">
                        <h2 className="text-2xl font-semibold text-gray-900 lg:text-3xl">
                            Free 14-day Trial
                        </h2>
                        <p className="max-w-md text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut metus nunc, fermentum id ex non
                        </p>
                    </div>
                    <div className="flex h-80 w-full rotate-x-50 -rotate-z-45 items-center gap-6">
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/hero-2.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-16/10 h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                        />
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-2.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-16/10 h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                        />
                    </div>
                    <div className="rotate-x-50deg flex h-80 -rotate-z-45 items-center gap-6">
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-3.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-16/10 h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                        />
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-5.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-16/10 h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
