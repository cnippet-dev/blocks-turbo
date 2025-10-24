import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accessibility Statement",
    description:
        "Our commitment to WCAG 2.1 AA accessibility, inclusive design practices, and how to contact us for support.",
};

const AccessibilityStatement = () => {
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
                                    Accessibility
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
                                    At Cnippet, we are dedicated to ensuring
                                    accessibility for all individuals, including
                                    those with disabilities. We are committed to
                                    providing an inclusive user experience on
                                    our website and application. As part of this
                                    commitment, we strive to adhere to the Web
                                    Content Accessibility Guidelines (WCAG) 2.1
                                    Level AA standards to make our platform
                                    accessible to a diverse audience.
                                </p>

                                <h2
                                    id="user-friendly-design"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    User-Friendly Design
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We have designed our website and application
                                    with user-friendly navigation and layout to
                                    enhance accessibility. Clear headings,
                                    consistent menus, and logical page
                                    structures are incorporated to make it
                                    easier for users to find and access
                                    information.
                                </p>

                                <h2
                                    id="keyboard-navigation"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Keyboard Navigation
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Our platform is operable using a keyboard
                                    alone, allowing individuals who cannot use a
                                    mouse or other pointing devices to navigate
                                    through all interactive elements with ease.
                                </p>

                                <h2
                                    id="screen-reader-compatibility"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Screen Reader Compatibility
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Cnippet aims to be compatible with leading
                                    screen readers. We have optimized our
                                    content and interfaces to work seamlessly
                                    with screen readers, enabling users with
                                    visual impairments to access and interact
                                    with the platform.
                                </p>

                                <h2
                                    id="alt-text-for-images"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Alt Text for Images
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    All meaningful images on Cnippet are
                                    accompanied by appropriate alternative text
                                    (alt text) descriptions. This enables users
                                    who rely on screen readers or have images
                                    disabled to comprehend the content conveyed
                                    by images.
                                </p>

                                <h2
                                    id="color-contrast"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Color Contrast and Visual Design
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We have carefully chosen color combinations
                                    to ensure sufficient contrast between
                                    foreground and background elements. This
                                    makes the content more accessible to users
                                    with visual impairments or color vision
                                    deficiencies.
                                </p>

                                <h2
                                    id="text-resizing"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Text Resizing and Responsive Layouts
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Our website and application support text
                                    resizing, and they are designed to adapt to
                                    various screen sizes and devices. Users can
                                    easily adjust the text size to their
                                    preference for better readability.
                                </p>

                                <h2
                                    id="accessible-forms"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Accessible Forms
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Our forms are designed to be accessible and
                                    usable. We provide clear instructions and
                                    labels for form fields to assist users in
                                    completing them accurately.
                                </p>

                                <h2
                                    id="continuous-improvements"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Continuous Improvements
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We continuously work to improve
                                    accessibility on our platform. Feedback from
                                    users is valuable to us in identifying areas
                                    for enhancement and ensuring that our
                                    accessibility efforts are effective.
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
                                        Accessibility
                                    </div>
                                    <ul className="space-y-2 pt-5 text-sm text-neutral-600">
                                        <li>
                                            <Link
                                                href="#user-friendly-design"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                User-Friendly Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#keyboard-navigation"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Keyboard Navigation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#screen-reader-compatibility"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Screen Reader Compatibility
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#alt-text-for-images"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Alt Text for Images
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#color-contrast"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Color Contrast and Visual Design
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#text-resizing"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Text Resizing and Responsive
                                                Layouts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#accessible-forms"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Accessible Forms
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#continuous-improvements"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Continuous Improvements
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

export default AccessibilityStatement;
