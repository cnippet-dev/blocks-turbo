import { motion } from "motion/react";
import React from "react";

import {
    Zap,
    FileText,
    Cloud,
    Lightbulb,
    TrendingUp,
    Users,
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Build Faster",
        description:
            "Cnippet Blocks helps you skip the setup and jump straight into design. All components are ready to use and well-organized.",
    },
    {
        icon: FileText,
        title: "Stay Consistent",
        description:
            "Using a design system with unified styles, grids, and variables keeps everything working together, no guessing or manual tweaks.",
    },
    {
        icon: Cloud,
        title: "Stop Rebuilding the Basics",
        description:
            "You don't need to remake buttons, forms, or cards from scratch on every project. Cnippet Blocks gives you everything upfront.",
    },
    {
        icon: Lightbulb,
        title: "Work Smarter, Not Harder",
        description:
            "A design system saves hours on every project. Spend more time on product thinking, not pushing pixels.",
    },
    {
        icon: TrendingUp,
        title: "Scale Without the Mess",
        description:
            "As your project grows, so does the design complexity. Cnippet Blocks keeps things organized so it doesn't fall apart.",
    },
    {
        icon: Users,
        title: "Get Everyone on the Same Page",
        description:
            "Designers and devs use the same components and rules. That means fewer mistakes, faster delivery, and less back-and-forth.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.8,
        },
    },
};

const Features = () => {
    return (
        <section className="relative h-full">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
                <div
                    className="absolute top-20 left-0 z-0 h-[1px] w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
                    data-border="true"
                    data-framer-name="Top divider"
                ></div>

                <div
                    className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                    data-framer-name="Vertical lines"
                >
                    <div
                        className="absolute right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                        data-border="true"
                        data-framer-name="Right line"
                    >
                        <div
                            className="cnippet-dot"
                            data-border="true"
                            data-framer-name="Ellipsis"
                        ></div>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                        data-border="true"
                        data-framer-name="Left line"
                    >
                        <div
                            className="cnippet-dot"
                            data-border="true"
                            data-framer-name="Ellipsis"
                        ></div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 pt-4">
                <div className="mx-auto mt-32 max-w-7xl">
                    <motion.div
                        className="mb-16 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={headerVariants}
                    >
                        <motion.h1
                            className="mb-2 text-4xl font-semibold tracking-tight text-gray-500 md:text-4xl dark:text-white"
                            variants={headerVariants}
                        >
                            Your current workflow is
                        </motion.h1>
                        <motion.h2
                            className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-4xl dark:text-gray-400"
                            variants={headerVariants}
                            transition={{ delay: 0.1 }}
                        >
                            Slowing you down!
                        </motion.h2>
                        <motion.p
                            className="mx-auto max-w-md text-sm text-gray-600"
                            variants={headerVariants}
                            transition={{ delay: 0.2 }}
                        >
                            Here is why you need a design system
                        </motion.p>
                    </motion.div>
                </div>

                <div className="pb-10">
                    <motion.div
                        className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className={`relative overflow-visible border-dashed p-12 transition-shadow duration-300 ${index % 2 != 0 && "border-l"} ${index < 4 && "border-b"} dark:border-neutral-600`}
                                    variants={itemVariants}
                                    whileHover={{
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                        },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.div
                                        className="flex items-start space-x-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: index * 0.1 + 0.5,
                                        }}
                                    >
                                        {index % 2 != 0 && index < 4 && (
                                            <div
                                                className="cnippet-dot3"
                                                data-framer-name="Ellipsis"
                                            ></div>
                                        )}

                                        <motion.div
                                            className="flex-shrink-0"
                                            whileHover={{ rotate: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                                <IconComponent className="h-6 w-6 text-blue-600" />
                                            </div>
                                        </motion.div>
                                        <div className="flex-1">
                                            <motion.h3
                                                className="mb-3 text-xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100"
                                                initial={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.1 + 0.6,
                                                }}
                                            >
                                                {feature.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-sm leading-relaxed text-gray-700 dark:text-gray-400"
                                                initial={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.1 + 0.7,
                                                }}
                                            >
                                                {feature.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
