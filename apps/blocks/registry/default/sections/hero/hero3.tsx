

"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { RiArrowDownLine, RiMenu2Line } from "@remixicon/react";

import { Button } from "@/components/ui/button";

export default function Component() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h8.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <motion.nav
                className="relative z-10 grid grid-cols-3 items-center justify-center p-6 lg:px-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div className="absolute bottom-9 left-0 w-[calc(50vw-3rem)] border-t border-white/40" />
                <motion.div className="absolute right-0 bottom-9 w-[calc(50vw-3rem)] border-t border-white/40" />

                <motion.div className="hidden items-center rounded-full border border-white/30 bg-black/30 px-4 py-2 text-base text-white/90 backdrop-blur-sm md:flex">
                    <span>Join our circle for gentle reminders.</span>
                    <Link
                        href="#"
                        className="ml-2 text-yellow-300 transition-colors hover:text-yellow-200"
                    >
                        Join →
                    </Link>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center text-white"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="mb-1 size-16">
                        <Image
                            src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-dark.png"
                            alt=""
                            className="size-16"
                            width={1080}
                            height={1080}
                            suppressHydrationWarning
                        />
                    </div>
                    <div>
                        <span className="text-base font-light tracking-[0.2em]">
                            CNIPPET
                        </span>
                    </div>
                </motion.div>

                <div className="flex items-center justify-end gap-4">
                    <Button
                        variant="secondary"
                        className="cursor-pointer rounded-full border border-white/30 bg-white/20 text-base text-white backdrop-blur-sm hover:bg-white/30"
                    >
                        Book a session
                    </Button>
                    <motion.button className="rounded-full border border-white/30 bg-white/20 p-1.5 text-white backdrop-blur-sm hover:bg-white/40">
                        <RiMenu2Line className="size-5" />
                    </motion.button>
                </div>
            </motion.nav>

            <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6 text-center text-white">
                <motion.div
                    className="max-w-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <motion.h1
                        className="font-lite mb-6 text-4xl font-normal text-white md:text-5xl lg:text-[5rem]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Your mindset <br className="hidden sm:block" />
                        shapes{" "}
                        <motion.span
                            className="font-normal text-emerald-500 dark:text-emerald-400 italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            everything
                        </motion.span>
                        .
                    </motion.h1>

                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="rounded-full bg-white px-8 py-3 text-lg text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                            >
                                Join us—today
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                    >
                        A calm and steady mind is the foundation of every
                        meaningful
                        <br className="hidden md:block" />
                        change — start within, and watch life shift around you.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                        className="rounded-full bg-white/20 p-2"
                    >
                        <RiArrowDownLine className="h-6 w-6 text-white/70" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
