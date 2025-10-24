"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiEyeFill, RiEyeOffFill } from "@remixicon/react";

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
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link
                        href="#"
                        className="flex items-center gap-2 font-medium"
                    >
                        <Image
                            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-light.png"
                            alt=""
                            className="size-9"
                            width={1080}
                            height={1080}
                            suppressHydrationWarning
                        />
                        Cnippet Inc.
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-sm">
                        <form
                            className={cn("flex flex-col gap-6", className)}
                            {...props}
                        >
                            <div className="flex flex-col items-start gap-2 text-left">
                                <div className="rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                                    <Image
                                        src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948226/logo-dark.png"
                                        alt=""
                                        className="size-12"
                                        width={1080}
                                        height={1080}
                                        suppressHydrationWarning
                                    />
                                </div>
                                <h1 className="mt-2 text-3xl font-semibold">
                                    Welcome to Cnippet!
                                </h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Register your account to get started.
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        className="py-5"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
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
                                            placeholder="Min. 8 characters"
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
                                <Button
                                    type="submit"
                                    className="shadow-8 w-full bg-violet-600 hover:bg-violet-700"
                                >
                                    Continue
                                </Button>
                            </div>
                            <div className="text-center text-sm font-medium">
                                Already have an account?{" "}
                                <Link
                                    href="#"
                                    className="underline-offset-1.5 text-violet-600 hover:underline"
                                >
                                    Sign up
                                </Link>
                            </div>

                            <div className="text-muted-foreground *:[a]:hover:text-primary mt-10 w-full text-left text-xs text-balance *:[a]:underline *:[a]:underline-offset-2">
                                By continuing, you agree to Cnippet's{" "}
                                <Link href="#">Terms of Service</Link> and{" "}
                                <Link href="#">Privacy Policy</Link>.
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="relative hidden h-full py-4 pl-4 lg:block">
                <div className="absolute bottom-0 z-50 h-1/4 w-full bg-gradient-to-tr from-white/80 to-transparent" />
                <div className="flex h-full items-center rounded-tl-2xl rounded-bl-2xl bg-violet-50">
                    <div className="grid translate-x-40 grid-cols-2 items-center gap-6">
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/hero-2.png`}
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
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-3.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-[16/10] h-full w-full -translate-x-20 rounded-2xl border bg-white object-cover object-top p-1"
                        />
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/hero-1.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-[16/10] h-full w-full -translate-x-20 rounded-2xl border bg-white object-cover object-top p-1"
                        />
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-4.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-[16/10] h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                        />
                        <Image
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753447263/pricing-5.png`}
                            alt=""
                            width={4210}
                            height={1080}
                            className="aspect-[16/10] h-full w-full rounded-2xl border bg-white object-cover object-top p-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
