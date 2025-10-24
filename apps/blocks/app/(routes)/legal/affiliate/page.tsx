import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Affiliate Disclosure",
    description:
        "Affiliate disclosure explaining how affiliate links work, our standards, and how to contact us.",
};

const AffiliateDisclosure = () => {
    return (
        <section className="legal_page dark:bg-background relative w-full">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-0">
                <div className="relative">
                    <div className="relative">
                        <div className="grid size-[5rem] w-full grid-cols-12 grid-rows-1 divide-x divide-y divide-dashed border-dashed first:border-l last:border-r dark:divide-neutral-700 dark:border-neutral-700">
                            <div className="col-span-1"></div>
                            <div className="col-span-10"></div>
                            <div className="col-span-1 border-r border-b border-dashed dark:border-neutral-700"></div>
                        </div>

                        <div className="grid size-[5rem] h-full w-full grid-cols-12 border-dashed first:border-l">
                            <div className="col-span-1 border-b border-l border-dashed dark:border-neutral-700"></div>
                            <div className="col-span-10 border border-t-0 border-dashed py-8 dark:border-neutral-700">
                                <h1 className="font-buch text-center text-6xl leading-tight font-medium tracking-tight">
                                    Affiliate Disclosure
                                </h1>
                            </div>
                            <div className="col-span-1 border-r border-b border-dashed dark:border-neutral-700"></div>
                        </div>

                        <div className="grid size-[5rem] w-full grid-cols-12 border-dashed first:border-l">
                            <div className="col-span-1 border-b border-l border-dashed dark:border-neutral-700"></div>
                            <div className="col-span-10 flex items-center justify-center border border-t-0 border-dashed dark:border-neutral-700">
                                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                    Effective March 1, 2025
                                </p>
                            </div>
                            <div className="col-span-1 border-r border-b border-dashed dark:border-neutral-700"></div>
                        </div>

                        <div className="grid w-full grid-cols-12 divide-x divide-dashed border border-t-0 border-dashed dark:divide-neutral-700 dark:border-neutral-700">
                            <div className="col-span-1" />
                            <div className="col-span-7 px-10 pt-10 pb-20">
                                <p className="text-gray-700 dark:text-gray-300">
                                    Dear valued visitors,
                                </p>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    We want to be transparent with you about
                                    some of the links used on our website (
                                    <Link href="https://www.cnippet.dev">
                                        https://www.cnippet.dev
                                    </Link>
                                    ). Please note that some of these links are
                                    affiliate links. This means that, at no
                                    additional cost to you, we can earn a
                                    commission if you click through and make a
                                    purchase.
                                </p>

                                <h2
                                    id="why-affiliates-matter"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Why Affiliate Partnerships Matter
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Affiliate partnerships play a crucial role
                                    in supporting our website and business
                                    endeavors. They help us cover operational
                                    expenses and enable us to keep providing
                                    high-quality content and services to you,
                                    our users, without impacting your experience
                                    in any way.
                                </p>

                                <h2
                                    id="our-standards"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Our Standards and Recommendations
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We want to assure you that we only
                                    collaborate with reputable and trustworthy
                                    affiliate partners. Our recommendations are
                                    based on careful research and evaluation,
                                    and we always strive to suggest products or
                                    services that can genuinely benefit you.
                                </p>

                                <h2
                                    id="questions-and-support"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Questions and Support
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    If you have any questions at all about our
                                    affiliate partnerships, products, or
                                    anything else related to our website, please
                                    feel free to contact us. We&apos;re here to
                                    help and assist you in any way we can.
                                </p>

                                <h2
                                    id="contact-information"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Contact Information
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Email:{" "}
                                    <Link href="mailto:support@cnippet.dev">
                                        support@cnippet.dev
                                    </Link>
                                    <br />
                                    Address: Thano Road, Tally Jolly
                                    Bhaniyawala, Dehradun Uttarakhand 248140
                                </p>

                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Thank you for your continued support, and we
                                    hope our website remains a valuable resource
                                    for you.
                                    <br />
                                    Sincerely,
                                    <br />
                                    The Cnippet Team
                                </p>
                            </div>
                            <div className="col-span-3 px-10 pt-10 pb-20">
                                <div className="sticky top-20">
                                    <div className="font-buch flex font-medium">
                                        Affiliate Disclosure
                                    </div>
                                    <ul className="space-y-2 pt-5 text-sm text-neutral-600">
                                        <li>
                                            <Link
                                                href="#why-affiliates-matter"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Why Affiliate Partnerships
                                                Matter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#our-standards"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Our Standards and
                                                Recommendations
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#questions-and-support"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Questions and Support
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#contact-information"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Contact Information
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliateDisclosure;
