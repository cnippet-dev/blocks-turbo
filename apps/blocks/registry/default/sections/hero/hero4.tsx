"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiFigmaLine,
    RiFlashlightFill,
    RiNotionFill,
    RiSlackFill,
} from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DotsPattern from "@/components/motion/dots-pattern";

export default function Component() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fdf9ed] dark:bg-black">
            <DotsPattern
                backgroundColor="#F8F5EC"
                dotColor="#4A5568"
                gridSpacing={30}
            />

            <div className="relative z-10 mx-auto h-screen max-w-7xl border-l border-neutral-400 dark:border-neutral-700 py-16 pl-16">
                <div className="grid h-full items-center gap-12 lg:grid-cols-12">
                    <div className="col-span-10 flex h-full flex-col justify-between">
                        <motion.div
                            className="space-y-8 pt-20"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <Badge
                                    variant="secondary"
                                    className="bg-white dark:bg-black px-2 py-2 text-xs font-medium text-black dark:text-white"
                                >
                                    <RiFlashlightFill className="mr-2 h-4 w-4 rounded-full bg-purple-50 dark:bg-purple-900/20 p-0.5 text-purple-600 dark:text-purple-400 shadow" />
                                    New features are now available{" "}
                                    <span className="text-purple-500 dark:text-purple-400">
                                        (Beta)
                                    </span>
                                </Badge>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <h1 className="font-funn text-5xl font-medium text-gray-900 dark:text-gray-100 lg:text-7xl">
                                    Collecting customer <br />
                                    feedback,{" "}
                                    <span className="text-orange-500 dark:text-orange-400">
                                        back-to-back.
                                    </span>
                                </h1>
                            </motion.div>

                            <motion.p
                                className="max-w-lg text-lg leading-relaxed text-gray-700 dark:text-gray-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                Use Jambo for analyzing and engaging with
                                customer feedback and unlocking valuable
                                insights.
                            </motion.p>

                            <motion.div
                                className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                <Button
                                    size="lg"
                                    className="group rounded-full bg-gray-900 dark:bg-white px-4 py-4 text-base font-medium text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
                                >
                                    See it in action
                                    <RiArrowRightLine className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>

                                <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                                    50+ people use Jambo today.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-2"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-sm text-gray-700 dark:text-gray-400"
                            >
                                Used by top-tech companies
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="mt-auto flex gap-8 [&_svg]:size-10 text-gray-700 dark:text-gray-400"
                            >
                                <RiNotionFill />
                                <RiSlackFill />
                                <RiFigmaLine />
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute right-0 bottom-0 w-full max-w-3xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <Image
                            src="/s1.svg"
                            alt="Jambo Dashboard Interface"
                            width={600}
                            height={400}
                            className="mr-10 ml-auto aspect-square size-68 translate-y-32 rounded-xl object-cover object-center"
                            priority
                        />

                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <div className="overflow-hidden rounded-t-2xl bg-white dark:bg-black p-1 shadow-2xl">
                                <Image
                                    src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h10.jpg"
                                    alt="Jambo Dashboard Interface"
                                    width={600}
                                    height={400}
                                    className="h-80 w-full rounded-t-xl object-cover object-center"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
