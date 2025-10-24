import Link from "next/link";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of Service for CNIPPET. Learn how to use our services and what you can expect from us.",
};

const TermsOfService = () => {
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
                                    Terms of Service
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
                                    These Terms of Service (&quot;Terms&quot;)
                                    govern your access to and use of
                                    CNIPPET&apos;s websites, services,
                                    components, templates, and educational
                                    resources. By accessing or using our
                                    services, you agree to be bound by these
                                    Terms. If you are using our services on
                                    behalf of an organization, you are agreeing
                                    to these Terms for that organization.
                                </p>

                                <h2
                                    id="account-registration-and-security"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Account Registration and Security
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    To access premium features, you must create
                                    an account. You agree to:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Provide accurate and complete
                                        registration information
                                    </li>
                                    <li>
                                        Maintain the security of your account
                                        credentials
                                    </li>
                                    <li>
                                        Accept responsibility for all activities
                                        under your account
                                    </li>
                                    <li>
                                        Notify us immediately of any
                                        unauthorized use of your account
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    Individual accounts are for personal use
                                    only. Enterprise accounts may have multiple
                                    users under a single license as specified in
                                    your subscription plan.
                                </p>

                                <h2
                                    id="license-grant"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    License Grant
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Subject to your compliance with these Terms,
                                    we grant you:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        A non-exclusive, worldwide, royalty-free
                                        license to use downloaded components and
                                        templates in your projects
                                    </li>
                                    <li>
                                        The right to modify and adapt materials
                                        to suit your specific needs
                                    </li>
                                    <li>
                                        Perpetual rights to use materials in
                                        projects created during your
                                        subscription period
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    <strong>Restrictions:</strong> You may not:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Redistribute standalone components or
                                        templates (modified or unmodified) as
                                        part of a competing product
                                    </li>
                                    <li>
                                        Create derivative component libraries
                                        based on our work
                                    </li>
                                    <li>
                                        Use our trademarks or branding without
                                        explicit permission
                                    </li>
                                    <li>
                                        Reverse engineer, decompile, or
                                        disassemble any components
                                    </li>
                                </ul>

                                <h2
                                    id="acceptable-use"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Acceptable Use
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    You agree not to use our services to:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>Violate any laws or regulations</li>
                                    <li>
                                        Infringe on intellectual property rights
                                    </li>
                                    <li>
                                        Distribute malware, viruses, or harmful
                                        code
                                    </li>
                                    <li>
                                        Engage in phishing, spamming, or
                                        fraudulent activities
                                    </li>
                                    <li>
                                        Circumvent security measures or access
                                        unauthorized areas
                                    </li>
                                    <li>
                                        Overload our infrastructure with
                                        excessive requests
                                    </li>
                                    <li>Harass, abuse, or harm others</li>
                                </ul>

                                <h2
                                    id="payments-and-subscriptions"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Payments and Subscriptions
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    <strong>Fees:</strong> Access to premium
                                    content requires payment of applicable fees.
                                    All fees are exclusive of taxes, which
                                    you&apos;re responsible for paying.
                                </p>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    <strong>Subscription Terms:</strong>
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Subscriptions automatically renew at the
                                        end of each billing cycle
                                    </li>
                                    <li>
                                        You authorize recurring charges to your
                                        payment method
                                    </li>
                                    <li>
                                        We may change prices with 30 days&apos;
                                        notice
                                    </li>
                                    <li>
                                        Enterprise plans require annual payment
                                        with custom terms
                                    </li>
                                </ul>

                                <h2
                                    id="intellectual-property"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Intellectual Property
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    <strong>Our Ownership:</strong> We retain
                                    all rights to CNIPPET platforms, branding,
                                    documentation, and original content.
                                    Components and templates are licensed, not
                                    sold.
                                </p>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    <strong>Your Ownership:</strong> You retain
                                    all rights to projects you build using our
                                    resources. Components become part of your
                                    derivative work.
                                </p>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    <strong>Feedback:</strong> Any suggestions
                                    or feedback you provide becomes our property
                                    without compensation.
                                </p>

                                <h2
                                    id="user-content"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    User Content
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    If you submit code samples, templates, or
                                    tutorials:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        You grant us a perpetual, worldwide
                                        license to use and modify your content
                                    </li>
                                    <li>
                                        You warrant you have rights to share the
                                        content
                                    </li>
                                    <li>
                                        We may remove content that violates our
                                        policies
                                    </li>
                                </ul>

                                <h2
                                    id="termination"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Termination
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We may suspend or terminate your account
                                    for:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>Violations of these Terms</li>
                                    <li>Non-payment of fees</li>
                                    <li>Illegal or abusive activities</li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    Upon termination, your license to use
                                    materials is revoked. You must cease all use
                                    of our services and delete downloaded
                                    components from your systems.
                                </p>

                                <h2
                                    id="disclaimers"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Disclaimers
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Our services are provided &quot;as is&quot;
                                    without warranties of any kind. We do not
                                    guarantee:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        That components are error-free or
                                        production-ready
                                    </li>
                                    <li>
                                        Continuous or uninterrupted access to
                                        our services
                                    </li>
                                    <li>
                                        Compatibility with all frameworks or
                                        environments
                                    </li>
                                    <li>
                                        Results from using our templates or
                                        tutorials
                                    </li>
                                </ul>

                                <h2
                                    id="limitation-of-liability"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Limitation of Liability
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    To the maximum extent permitted by law,
                                    CNIPPET shall not be liable for:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Indirect, incidental, or consequential
                                        damages
                                    </li>
                                    <li>
                                        Loss of profits, data, or business
                                        opportunities
                                    </li>
                                    <li>Security breaches or data leaks</li>
                                    <li>
                                        Third-party integrations or services
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    Our total liability for any claim is limited
                                    to the amount you paid us in the 12 months
                                    preceding the claim.
                                </p>

                                <h2
                                    id="modifications"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Modifications
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We may update these Terms periodically.
                                    We&apos;ll notify you of material changes
                                    via email or platform notification.
                                    Continued use after changes constitutes
                                    acceptance.
                                </p>

                                <h2 className="pt-10 text-2xl font-semibold">
                                    Contact Information
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    For terms of service related inquiries:
                                    <br />
                                    Email:{" "}
                                    <Link href="mailto:contact@cnippet.site">
                                        contact@cnippet.site
                                    </Link>
                                    <br />
                                    Mailing Address: Thano Road, Tally Jolly{" "}
                                    <br />
                                    Bhaniyawala, Dehradun <br />
                                    Uttarakhand 248140
                                </p>
                            </div>
                            <div className="col-span-3 px-10 pt-10 pb-20">
                                <div className="sticky top-20">
                                    <div className="font-buch flex font-medium">
                                        Terms of Service
                                    </div>
                                    <ul className="space-y-2 pt-5 text-sm text-neutral-600">
                                        <li>
                                            <Link
                                                href="#account-registration-and-security"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Account Registration and
                                                Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#license-grant"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                License Grant
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#acceptable-use"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Acceptable Use
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#payments-and-subscriptions"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Payments and Subscriptions
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
                                                href="#user-content"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                User Content
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
                                                href="#disclaimers"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Disclaimers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#limitation-of-liability"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Limitation of Liability
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#governing-law-and-disputes"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Governing Law and Disputes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#modifications"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Modifications
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

export default TermsOfService;
