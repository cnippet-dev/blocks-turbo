"use client";

import { RiFlashlightFill } from "@remixicon/react";

import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Component() {
    return (
        <div className="relative min-h-screen w-full px-4 py-16">
            <div className="mx-auto w-full max-w-xl">
                <div className="mb-8 flex justify-center">
                    <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-none bg-white py-1 text-xs shadow-sm dark:bg-black dark:text-white"
                    >
                        <RiFlashlightFill className="h-4 w-4 text-yellow-500" />
                        Real Feedback
                    </Badge>
                </div>

                <div className="mb-4 text-center">
                    <h1 className="font-funn text-4xl leading-tight font-medium text-gray-900 dark:text-gray-100 md:text-5xl">
                        Feel free to send our
                        <br />
                        friendly team a message
                    </h1>
                </div>

                <div className="mb-12 text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Real stories from teams transforming workflows with
                        Beam.
                    </p>
                </div>

                <form className="flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="grid gap-3">
                            <Label htmlFor="firstName" className="text-gray-900 dark:text-gray-100">
                                Your Name{" "}
                                <span className="text-violet-500">*</span>
                            </Label>
                            <Input
                                id="firstName"
                                placeholder="John"
                                className="py-5 border-gray-200 dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="lastName" className="text-gray-900 dark:text-gray-100">
                                Last Name{" "}
                                <span className="text-violet-500">*</span>
                            </Label>
                            <Input
                                id="lastName"
                                placeholder="Doe"
                                className="py-5 border-gray-200 dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="grid gap-3">
                            <Label htmlFor="email" className="text-gray-900 dark:text-gray-100">
                                Email <span className="text-violet-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="beam@connect.com"
                                className="py-5 border-gray-200 dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="phone" className="text-gray-900 dark:text-gray-100">
                                Phone Number{" "}
                                <span className="text-violet-500">*</span>
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="(555) 000-0000"
                                className="py-5 border-gray-200 dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="message" className="text-gray-900 dark:text-gray-100">
                            How can we help?{" "}
                            <span className="text-violet-500">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Write your message here..."
                            className="min-h-[120px] resize-none py-5 border-gray-200 dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox id="privacy" className="border-gray-200 dark:border-neutral-700" />
                        <Label
                            htmlFor="privacy"
                            className="cursor-pointer text-sm text-gray-900 dark:text-gray-100"
                        >
                            I Agree to the privacy policy
                        </Label>
                    </div>

                    <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                        <p className="w-1/2 text-sm text-gray-600 dark:text-gray-400">
                            By submitting, I acknowledge that I have read and
                            agree to the{" "}
                            <a
                                href="#"
                                className="text-gray-900 dark:text-gray-100 underline hover:no-underline"
                            >
                                Privacy Policy.
                            </a>
                        </p>

                        <Button
                            type="submit"
                            className="shadow-8 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700"
                        >
                            Submit Form
                        </Button>
                    </div>
                </form>
            </div>

            <div className="z-[2] mx-auto w-full">
                <div className="absolute bottom-0 left-0">
                    <div className="">
                        <svg
                            width="565"
                            height="173"
                            viewBox="0 0 565 173"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_469_30922)">
                                <path
                                    d="M624.397 459.26C639.052 348.921 614.275 239.669 552.008 189.103C479.521 130.236 356.226 150.899 185.185 341.956C258.688 -373.405 -97.0201 381.43 -11.1897 43.599"
                                    stroke="#EEEEF0"
                                    className="dark:stroke-neutral-800"
                                    strokeWidth="40"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_469_30922">
                                    <rect
                                        width="565"
                                        height="173"
                                        fill="white"
                                        className="dark:fill-black"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="absolute top-0 right-0">
                    <div className="">
                        <svg
                            width="231"
                            height="173"
                            viewBox="0 0 231 173"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_469_30920)">
                                <path
                                    d="M54.6842 -3.62396e-05C11.9702 46.7737 7.62612 97.7134 54.6842 127.274C109.466 161.686 233.908 167.125 448.569 103.29C192.422 409.071 731.375 119.177 561.032 257.562"
                                    stroke="#EEEEF0"
                                    className="dark:stroke-neutral-800"
                                    strokeWidth="40"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_469_30920">
                                    <rect
                                        width="231"
                                        height="173"
                                        fill="white"
                                        className="dark:fill-black"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
