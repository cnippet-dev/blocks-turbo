"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { RiArrowRightLine } from "@remixicon/react";

const Cta = dynamic(() => import("@/components/routes/home/cta"));

const metrics = [
    {
        title: "500+",
        description: "UI Components",
        content: "ui.cnippet.site",
        content2:
            "Core components, motion effects, text animations, charts, and interactive elements for modern web applications.",
    },
    {
        title: "100+",
        description: "Page Templates",
        content: "block.cnippet.site",
        content2:
            "Complete sections, landing pages, about pages, contact forms, and full website templates ready to deploy.",
    },
    {
        title: "200+",
        description: "Guides & Tutorials",
        content: "next.cnippet.site",
        content2:
            "Comprehensive guides for authentication, payment gateways, SEO optimization, and advanced web development techniques.",
    },
    {
        title: "24/7",
        description: "Support",
        content: "Community Driven",
        content2:
            "Active community support, documentation, and resources to help you succeed with every project.",
    },
];

const AboutPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <section className="mx-auto w-full max-w-full border-t-0 border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="grid grid-cols-6 divide-x dark:divide-neutral-800">
                        <div className="col-span-6 mx-auto max-w-3xl px-4 py-32 text-center">
                            <div className="font-buch mb-6">
                                <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl">
                                    Cnippet Blocks enables you to Build Websites{" "}
                                    <span className="text-violet-600">
                                        Faster
                                    </span>{" "}
                                </h1>
                            </div>

                            <p className="max-w-2xl text-sm leading-normal text-neutral-400 md:mt-2 md:text-lg">
                                Cnippet Blocks is what you need to build your
                                next project. It is a platform that allows you
                                to build your next project with ease.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-2 flex flex-col items-start justify-start gap-2 px-4 py-10">
                            <h3 className="text-2xl font-medium tracking-tight">
                                ui.cnippet.site - Core Components
                            </h3>
                            <p className="text-gray-500">
                                Access 500+ production-ready UI components
                                including accordions, dialogs, toasts, motion
                                effects, text animations, and interactive
                                charts. All components are TypeScript-ready and
                                optimized for performance.
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-start justify-start gap-2 px-4 py-10">
                            <h3 className="text-2xl font-medium tracking-tight">
                                block.cnippet.site - Sections & Templates
                            </h3>
                            <p className="text-gray-500">
                                Access 100+ pre-built sections, pages, and full
                                website templates. Perfect for landing pages,
                                about pages, contact forms, and more. All blocks
                                are responsive, SEO-optimized, and easy to
                                customize for any project.
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-start justify-start gap-2 px-4 py-10">
                            <h3 className="text-2xl font-medium tracking-tight">
                                next.cnippet.site - Learning Hub
                            </h3>
                            <p className="text-gray-500">
                                Access 200+ comprehensive guides, tutorials, and
                                implementation examples. Learn about
                                authentication, payment gateways, SEO,
                                performance optimization, and advanced web
                                development techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto mt-20 w-full max-w-full border-t border-b px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800 dark:bg-black">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="max-w-3xl px-4 py-20">
                        <div className="h-fit md:h-[calc(2*theme(fontSize.5xl)*theme(lineHeight.tight))]">
                            <h1 className="text-3xl leading-tight font-medium tracking-tight md:text-5xl">
                                Trusted by Developers <br />{" "}
                                <span className="text-blue-700">Worldwide</span>
                            </h1>
                        </div>

                        <p className="mt-2 text-lg text-gray-500">
                            Join thousands of developers who trust Cnippet for
                            their web development needs. Our ecosystem has
                            helped teams build everything from simple landing
                            pages to complex enterprise applications.
                        </p>
                    </div>

                    <div className="grid h-12 grid-cols-2 divide-x border-t md:grid-cols-6 dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1 h-full w-full md:col-span-2">
                            <Link
                                href="#"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[110%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-blue-600" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white">
                                    Explore More
                                    <RiArrowRightLine
                                        className="text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="grid h-full grid-cols-1 divide-x divide-y border-t md:grid-cols-4 md:divide-y-0 dark:divide-neutral-800 dark:border-neutral-800">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="group col-span-1 flex cursor-pointer flex-col items-start justify-start gap-2 px-4 transition-all duration-300 hover:bg-gray-800 md:py-10 dark:hover:bg-gray-900"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={
                                            hoveredIndex === index
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 0, y: 40 }
                                        }
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h3 className="mt-5 text-xl font-medium text-black md:mt-0 md:text-white">
                                            {metric.content}
                                        </h3>
                                        <p className="text-gray-400">
                                            {metric.content2}
                                        </p>
                                    </motion.div>
                                </div>
                                <h3 className="mt-auto pt-10 text-2xl font-medium tracking-tight group-hover:text-white md:pt-40 md:text-7xl">
                                    {metric.title}
                                </h3>
                                <p className="mb-5 text-xl font-medium text-gray-500 group-hover:text-white md:mb-0">
                                    {metric.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Cta />
        </>
    );
};

export default AboutPage;
