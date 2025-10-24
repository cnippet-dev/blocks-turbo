"use client";

import { useState } from "react";
import Link from "next/link";
import { RiEyeFill, RiEyeOffFill } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dcxm3ccir/image/upload/v1753942284/h2.jpg')`,
                    height: "100vh",
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-end p-4">
                <Card className="h-[90vh] w-full max-w-lg border-0 bg-white shadow-2xl backdrop-blur-sm">
                    <CardContent className="flex h-full flex-col space-y-6 px-10 pt-10">
                        <div className="space-y-2 text-left">
                            <h1 className="mt-2 text-3xl font-normal md:text-5xl">
                                Create an account
                            </h1>
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href=""
                                    className="font-medium text-violet-500 underline-offset-2 hover:text-violet-600 hover:underline"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="rounded-none border-t-0 border-r-0 border-b border-l-0 px-0 py-5 shadow-none focus-visible:ring-0"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">
                                        First name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        placeholder="Curious"
                                        className="rounded-none border-t-0 border-r-0 border-b border-l-0 px-0 py-5 shadow-none focus-visible:ring-0"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                        id="lastName"
                                        placeholder="George"
                                        className="rounded-none border-t-0 border-r-0 border-b border-l-0 px-0 py-5 shadow-none focus-visible:ring-0"
                                    />
                                </div>
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
                                <div className="flex overflow-hidden border-b">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="* * * * * * * *"
                                        required
                                        className="border-none px-0 py-5 shadow-none focus-visible:border-none focus-visible:ring-0"
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

                            <div className="mt-10 flex">
                                <div className="flex w-full items-center space-x-2 py-2">
                                    <Checkbox
                                        id="newsletter"
                                        className="border-gray-300"
                                    />
                                    <Label
                                        htmlFor="newsletter"
                                        className="text-sm text-gray-600"
                                    >
                                        send me a newsletter
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="shadow-8 w-full rounded-full bg-violet-600 py-5 hover:bg-violet-700"
                                >
                                    Create Account
                                </Button>
                            </div>
                        </form>

                        <p className="mt-auto text-xs leading-relaxed text-gray-500">
                            By clicking Create account, I agree that I have read
                            and accepted the{" "}
                            <button className="text-orange-500 underline-offset-4 hover:text-orange-600 hover:underline">
                                Terms of Use
                            </button>{" "}
                            and{" "}
                            <button className="text-orange-500 underline-offset-4 hover:text-orange-600 hover:underline">
                                Privacy Policy
                            </button>
                            .
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
