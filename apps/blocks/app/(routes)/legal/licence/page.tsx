import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import {
    RiArchiveFill,
    RiGroupFill,
    RiPencilFill,
    RiSpam2Fill,
} from "@remixicon/react";

export const metadata: Metadata = {
    title: "License Agreement",
    description:
        "License Agreement outlining permitted and prohibited usage, intellectual property, warranties, and governing law.",
};

const data = [
    {
        title: "Personal & Commercial",
        description:
            "Unlimited use: Create end products for clients and personal projects with Cnippet.",
        icon: <RiPencilFill />,
    },
    {
        title: "Single User Accounts",
        description:
            "Accounts are limited to a single user. Multiple users require seperate accounts.",
        icon: <RiGroupFill />,
    },
    {
        title: "No Redistribution",
        description:
            "Do not re-distribute items, regardless of any modifications, under any circumstances.",
        icon: <RiArchiveFill />,
    },
    {
        title: "Misuse of Product",
        description:
            "Do not copy components with a plan to use them outside of your subscription window.",
        icon: <RiSpam2Fill />,
    },
];
const LicenseAgreement = () => {
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
                                    License Agreement
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
                                <div className="grid grid-cols-2 gap-5">
                                    {data.map((item, i) => (
                                        <div
                                            key={i}
                                            className="rounded-3xl border border-dashed border-gray-300 p-6 dark:border-neutral-600"
                                        >
                                            <div className="w-fit rounded-full bg-gradient-to-br from-purple-700 to-blue-500 p-2 [&_svg]:size-5 [&_svg]:text-white">
                                                {item.icon}
                                            </div>
                                            <p className="pt-5 text-lg font-medium tracking-tight">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 text-gray-700 dark:text-gray-300">
                                    This License Agreement (the
                                    &quot;Agreement&quot;) is a legal agreement
                                    between you (the &quot;User&quot; or
                                    &quot;Licensee&quot;) and Cnippet (the
                                    &quot;Licensor&quot; or &quot;Cnippet&quot;)
                                    for the use of assets, templates and
                                    components available on
                                    <Link href="https://www.cnippet.dev/">
                                        {" "}
                                        https://www.cnippet.dev/
                                    </Link>{" "}
                                    (the &quot;Website&quot;).
                                </p>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    By accessing, downloading, or using any
                                    assets, templates or components from our
                                    Website, you agree to be bound by the terms
                                    and conditions of this Agreement. If you do
                                    not agree with these terms, you are not
                                    permitted to use the templates and
                                    components offered on our Website.
                                </p>

                                <h2
                                    id="grant-of-licence"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    1. Grant of Licence
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    The Licensor grants the Licensee a
                                    non-exclusive, non-transferable license to
                                    use the assets, templates and components for
                                    personal or commercial purposes, subject to
                                    the restrictions and limitations set forth
                                    in this Agreement.
                                </p>

                                <h2
                                    id="permitted-usage"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    2. Permitted Usage
                                </h2>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        The assets, templates and components
                                        provided by Cnippet are intended solely
                                        for the Licensee&apos;s use in their web
                                        development projects.
                                    </li>
                                    <li>
                                        The Licensee is allowed to modify,
                                        adapt, and customize the assets,
                                        templates and components to suit their
                                        projects&apos; specific needs.
                                    </li>
                                    <li>
                                        The Licensee is authorized to use the
                                        templates and components in an unlimited
                                        number of personal or commercial
                                        projects.
                                    </li>
                                </ul>

                                <h2
                                    id="prohibited-usage"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    3. Prohibited Usage
                                </h2>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        The Licensee is strictly prohibited from
                                        reselling, sublicensing, or
                                        redistributing the assets, templates and
                                        components (modified or unmodified) on
                                        their own or as part of a similar
                                        marketplace or platform. This includes
                                        transferring products to other accounts
                                        or listing products in a way that makes
                                        them accessible to others.
                                    </li>
                                    <li>
                                        The Licensee may not use components to
                                        make a theme, template or derivative
                                        work of any product to sell on any
                                        marketplace.
                                    </li>
                                    <li>
                                        The Licensee is strictly prohibited from
                                        storing components externally with the
                                        intent to use them outside the active
                                        subscription period. We monitor API
                                        requests, and any patterns of misuse,
                                        including excessive copying, will be
                                        flagged. We reserve the right to issue
                                        warnings or terminate access without
                                        notice in cases of violation.
                                    </li>
                                    <li>
                                        The Licensee may not use the templates
                                        and components in any way that violates
                                        local, national, or international laws
                                        and regulations.
                                    </li>
                                </ul>

                                <h2
                                    id="intellectual-property"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    4. Intellectual Property
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    All templates and components available on
                                    Cnippet remain the intellectual property of
                                    the Licensor. The Licensee does not acquire
                                    any ownership rights or intellectual
                                    property rights.
                                </p>

                                <h2
                                    id="updates-and-support"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    5. Updates and Support
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    The Licensor may provide updates or support
                                    for the templates and components, at their
                                    discretion. However, they are not obligated
                                    to do so.
                                </p>

                                <h2
                                    id="warranty-and-liability"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    6. Warranty and Liability
                                </h2>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        The templates and components are
                                        provided &quot;as is,&quot; without any
                                        warranty, express or implied, including
                                        but not limited to the warranties of
                                        merchantability and fitness for a
                                        particular purpose.
                                    </li>
                                    <li>
                                        The Licensor shall not be liable for any
                                        damages, including but not limited to,
                                        direct, indirect, special, or
                                        consequential damages arising out of the
                                        use or inability to use the templates
                                        and components.
                                    </li>
                                </ul>

                                <h2
                                    id="termination"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    7. Termination
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    The Licensor reserves the right to terminate
                                    this License Agreement if the Licensee
                                    breaches any terms or conditions outlined
                                    herein. Upon termination, the Licensee must
                                    cease using the templates and components and
                                    destroy all copies in their possession.
                                </p>

                                <h2
                                    id="governing-law"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    8. Governing Law
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    This Agreement shall be governed by and
                                    construed in accordance with the laws of
                                    Australia, without regard to its conflicts
                                    of laws principles.
                                </p>

                                <h2
                                    id="contact-us"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Contact Us
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    By using Cnippet and downloading the
                                    templates and components, you acknowledge
                                    that you have read and understood this
                                    License Agreement, and you agree to be bound
                                    by its terms and conditions.
                                </p>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
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
                                        License Agreement
                                    </div>
                                    <ul className="space-y-2 pt-5 text-sm text-neutral-600">
                                        <li>
                                            <Link
                                                href="#grant-of-licence"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Grant of Licence
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#permitted-usage"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Permitted Usage
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#prohibited-usage"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Prohibited Usage
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#intellectual-property"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Intellectual Property
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#updates-and-support"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Updates and Support
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#warranty-and-liability"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Warranty and Liability
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#termination"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Termination
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#governing-law"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Governing Law
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#contact-us"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Contact Us
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

export default LicenseAgreement;
