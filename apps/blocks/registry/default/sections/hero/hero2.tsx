"use client";

import { useState } from "react";
import Image from "next/image";
import { RiInfinityLine, RiSparkling2Fill, RiStarFill } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="min-h-screen bg-[#f5f3f0] dark:bg-black px-4 py-20 md:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
                    <div className="col-span-7 flex h-full flex-col space-y-8">
                        <div className="space-y-6">
                            <h1 className="font-lite text-4xl font-normal text-gray-900 dark:text-gray-100 md:text-5xl lg:text-[5rem]">
                                Your mindset shapes{" "}
                                <span className="font-normal text-emerald-700 dark:text-emerald-500 italic">
                                    everything.
                                </span>
                            </h1>

                            <p className="font-kumb max-w-xl text-xl leading-relaxed text-gray-600 dark:text-gray-400">
                                A calm and steady mind is the foundation of
                                every meaningful change — start within, and
                                watch life shift around you.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="flex max-w-lg items-center justify-center gap-3"
                        >
                            <Input
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12 border-gray-200 dark:border-neutral-700 bg-white dark:bg-black text-gray-600 dark:text-white shadow-none placeholder:text-base placeholder:text-gray-600 dark:placeholder:text-gray-400"
                                required
                            />
                            <Button
                                type="submit"
                                className="h-12 rounded-full bg-emerald-700 dark:bg-emerald-600 px-6 text-lg text-white hover:bg-emerald-800 dark:hover:bg-emerald-700"
                            >
                                Join us — today
                            </Button>
                        </form>

                        <div className="mt-auto flex flex-col items-start gap-4">
                            <div className="flex -space-x-2">
                                <Avatar className="size-13 border-2 border-white dark:border-gray-800">
                                    <AvatarImage src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1739106437/a1.jpg" />
                                    <AvatarFallback>U1</AvatarFallback>
                                </Avatar>
                                <Avatar className="size-13 border-2 border-white dark:border-gray-800">
                                    <AvatarImage src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1739106437/a2.jpg" />
                                    <AvatarFallback>U1</AvatarFallback>
                                </Avatar>
                                <Avatar className="size-13 border-2 border-white dark:border-gray-800">
                                    <AvatarImage src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1739106437/a3.jpg" />
                                    <AvatarFallback>U1</AvatarFallback>
                                </Avatar>
                                <Avatar className="size-13 border-2 border-white dark:border-gray-800">
                                    <AvatarImage src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1739106437/a4.jpg" />
                                    <AvatarFallback>U1</AvatarFallback>
                                </Avatar>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <RiInfinityLine className="size-7 text-black dark:text-white" />
                                <span className="text-lg">
                                    From first-time wobbles to advanced flows.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative col-span-5">
                        <div className="relative">
                            <Image
                                src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h18.jpg"
                                alt="Woman in meditation pose against blue sky"
                                width={1920}
                                height={1080}
                                className="h-[600px] w-full rounded-3xl object-cover"
                            />

                            <Card className="font-kumb absolute bottom-20 -left-20 w-60 border-0 bg-white/50 dark:bg-black/50 shadow-lg backdrop-blur-sm">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                                        100+
                                    </div>
                                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                        Yoga classes and on-demand replay
                                        sessions cater to all levels.
                                    </p>
                                </CardContent>
                            </Card>

                            <RiSparkling2Fill className="absolute bottom-44 left-32 size-16 text-yellow-400" />
                            <RiStarFill className="absolute top-16 right-32 z-50 size-10 text-blue-500" />

                            <Card className="font-kumb absolute top-20 -right-20 w-60 border-0 bg-white/80 dark:bg-black/80 shadow-lg backdrop-blur-sm">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        1.98*
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        Take a breath. Start with a free
                                        class—no credit card, no pressure, just
                                        peace.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
