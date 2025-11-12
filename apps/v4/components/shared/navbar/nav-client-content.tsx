"use client";

import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

import NavUser from "./nav-user";

export default function NavClientContent() {
    return (
        <>
            <div className="hidden items-center space-x-8 text-sm font-medium md:flex">
                {["Blocks", "Pages", "Templates", "Docs", "Pricing"].map(
                    (item, index) => (
                        <motion.div
                            key={item}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                            }}
                        >
                            <Link
                                href={`/${item.toLowerCase()}`}
                                className="text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
                            >
                                {item}
                            </Link>
                        </motion.div>
                    )
                )}
            </div>

            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-center space-x-4"
            >
                <Button
                    variant="ghost"
                    size="sm"
                    className="hidden items-center space-x-2 sm:flex"
                >
                    <RiArrowRightUpLine className="h-4 w-4" />
                    <span>Preview</span>
                </Button>
                <NavUser />
            </motion.div>
        </>
    );
}
