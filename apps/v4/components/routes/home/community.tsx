import Link from "next/link";
import React, { forwardRef } from "react";
import {
    RiArrowRightLine,
    RiDiscordFill,
    RiGithubFill,
} from "@remixicon/react";

const Community = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
    return (
        <section
            ref={ref}
            className="relative w-full border-t-0 border-b dark:border-neutral-800 dark:bg-black"
        >
            <div className="sticky top-0 z-10 border-b border-neutral-200 dark:border-neutral-800 dark:bg-black">
                <div className="mx-auto flex max-w-full items-center justify-start gap-6 px-4 md:px-10 xl:px-20 2xl:px-30">
                    <div className="size-4 rounded-full bg-blue-700"></div>
                    <p className="py-2 text-lg font-semibold tracking-wider uppercase">
                        Our Ecosystem
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-full border-neutral-200 px-4 md:px-10 xl:px-20 2xl:px-30 dark:border-neutral-800">
                <div className="border border-t-0 border-b-0 dark:border-neutral-800">
                    <div className="grid grid-cols-4 md:grid-cols-6 md:divide-x dark:divide-neutral-800">
                        <div className="col-span-4 px-4 py-20">
                            <h2 className="text-2xl leading-tight font-medium tracking-tight md:text-5xl">
                                Discover Sections, Pages, and Templates
                                <br />
                                <span className="text-blue-700">
                                    for Every Website
                                </span>
                            </h2>
                            <p className="mt-2 max-w-xl text-lg text-gray-500">
                                block.cnippet.site is your go-to resource for
                                ready-made website sections, full pages, and
                                complete templates. Build landing pages, about
                                pages, contact pages, and more with ease. All
                                blocks are SEO-friendly and easy to customize.
                            </p>
                        </div>
                        <div className="col-span-2 hidden md:block">
                            <div>
                                <Link
                                    href="#"
                                    className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-700 py-2 dark:bg-black"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-800 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-white duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                        <RiGithubFill />
                                        UI Components
                                        <RiArrowRightLine
                                            className="ml-auto text-white"
                                            size={20}
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid h-12 grid-cols-3 md:grid-cols-6 divide-x border-t dark:divide-neutral-800 dark:border-neutral-800">
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>
                        <div className="col-span-1 hidden md:block"></div>

                        <div className="col-span-1"></div>
                        <div className="col-span-2 h-full w-full border-0">
                            <Link
                                href="#"
                                className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-blue-200 dark:bg-black"
                            >
                                <div className="absolute inset-0 w-full -translate-x-[100%] bg-blue-700 transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                <span className="relative z-10 flex w-full items-center justify-between gap-2 px-4 text-lg text-blue-800 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                                    <RiDiscordFill />
                                    Website Templates
                                    <RiArrowRightLine
                                        className="ml-auto text-blue-800 group-hover:text-white"
                                        size={20}
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Community.displayName = "Community";

export default Community;
