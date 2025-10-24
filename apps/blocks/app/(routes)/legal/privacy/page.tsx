import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy policy for CNIPPET. Learn how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
    return (
        <section className="legal_page dark:bg-background relative w-full">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-0">
                <div className="relative">
                    <div className="absolute -top-2.5 -left-2.5 z-40 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>

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
                                    Privacy Policy
                                </h1>
                            </div>
                            <div className="col-span-1 border-r border-b border-dashed dark:border-neutral-700"></div>
                        </div>

                        <div className="grid size-[5rem] w-full grid-cols-12 border-dashed first:border-l">
                            <div className="col-span-1 border-b border-l border-dashed dark:border-neutral-700"></div>
                            <div className="col-span-10 flex items-center justify-center border border-t-0 border-dashed dark:border-neutral-700">
                                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                    Last Updated June 5, 2025
                                </p>
                            </div>
                            <div className="col-span-1 border-r border-b border-dashed dark:border-neutral-700"></div>
                        </div>

                        <div className="grid w-full grid-cols-12 divide-x divide-dashed border border-t-0 border-dashed dark:divide-neutral-700 dark:border-neutral-700">
                            <div className="col-span-1" />

                            <div className="col-span-7 px-10 pt-10 pb-20">
                                <p className="text-gray-700 dark:text-gray-300">
                                    CNIPPET (&quot;we&quot;, &quot;us&quot;, or
                                    &quot;our&quot;) respects your privacy and
                                    is committed to protecting your personal
                                    information. This{" "}
                                    <Link href="/privacy">Privacy Policy</Link>{" "}
                                    explains how we collect, use, disclose, and
                                    safeguard your information when you visit
                                    our websites (cnippet.site, ui.cnippet.site,
                                    block.cnippet.site, next.cnippet.site) or
                                    use our services.
                                </p>

                                <h2
                                    id="information-collection"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Information Collection
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We collect several types of information to
                                    provide and improve our services:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        <strong>
                                            Personal Identification Information:
                                        </strong>{" "}
                                        When you register, we collect your name,
                                        username, email address, company name
                                        (optional), and payment details
                                        (optional). For enterprise accounts, we
                                        may collect business registration
                                        details.
                                    </li>
                                    <li>
                                        <strong>Usage Data:</strong> We
                                        automatically collect information about
                                        how you interact with our platform,
                                        including pages visited, components
                                        downloaded, templates used, and
                                        interaction patterns. This includes IP
                                        address, browser type, device
                                        information, and access times.
                                    </li>
                                    <li>
                                        <strong>Technical Data:</strong> For
                                        developers using our components, we
                                        collect anonymous usage metrics to
                                        understand component performance and
                                        adoption rates.
                                    </li>
                                    <li>
                                        <strong>Content Data:</strong> If you
                                        save code snippets or customizations to
                                        your account, we store these to provide
                                        continuity across devices.
                                    </li>
                                </ul>

                                <h2
                                    id="use-of-information"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Use of Information
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We use the collected information for the
                                    following purposes:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        To provide, operate, and maintain our
                                        services including component libraries
                                        and template repositories
                                    </li>
                                    <li>
                                        To process transactions and send
                                        subscription renewal notices
                                    </li>
                                    <li>
                                        To personalize your experience by
                                        suggesting relevant components and
                                        templates based on your usage patterns
                                    </li>
                                    <li>
                                        To improve our platform by analyzing
                                        usage trends and feature adoption
                                    </li>
                                    <li>
                                        To communicate with you about product
                                        updates, security alerts, and support
                                        requests
                                    </li>
                                    <li>
                                        To develop new features and services
                                        based on aggregated usage patterns
                                    </li>
                                    <li>
                                        To prevent fraud, enforce our terms, and
                                        protect our intellectual property
                                    </li>
                                </ul>

                                <h2
                                    id="data-sharing-and-disclosure"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Data Sharing and Disclosure
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We do not sell your personal information. We
                                    may share information with:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        <strong>Service Providers:</strong>{" "}
                                        Payment processors (Razorpay), analytics
                                        providers (Google Analytics), and
                                        hosting services necessary for platform
                                        operation
                                    </li>
                                    <li>
                                        <strong>Business Partners:</strong> When
                                        you use integrated services like GitHub
                                        for authentication
                                    </li>
                                    <li>
                                        <strong>Legal Requirements:</strong>{" "}
                                        When required by law or to protect our
                                        rights and safety
                                    </li>
                                    <li>
                                        <strong>Business Transfers:</strong> In
                                        connection with any merger, acquisition,
                                        or sale of assets
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    We implement strict data processing
                                    agreements with all third-party services to
                                    ensure GDPR compliance.
                                </p>

                                <h2
                                    id="data-security"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Data Security
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We implement industry-standard security
                                    measures including:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Encryption of data in transit (TLS 1.2+)
                                        and at rest (AES-256)
                                    </li>
                                    <li>
                                        Regular security audits and
                                        vulnerability testing
                                    </li>
                                    <li>
                                        Role-based access controls to sensitive
                                        data
                                    </li>
                                    <li>
                                        Secure development practices and code
                                        reviews
                                    </li>
                                    <li>
                                        DDoS protection and web application
                                        firewalls
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    Despite these measures, no internet
                                    transmission is 100% secure. We cannot
                                    guarantee absolute security but commit to
                                    prompt notification of any data breaches as
                                    required by law.
                                </p>

                                <h2
                                    id="data-retention"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Data Retention
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We retain personal information only as long
                                    as necessary:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Account information: Retained while your
                                        account is active or as needed to
                                        provide services
                                    </li>
                                    <li>
                                        Transaction records: Kept for 2 years
                                        for tax and audit purposes
                                    </li>
                                    <li>
                                        Usage data: Aggregated and anonymized
                                        after 24 months
                                    </li>
                                    <li>
                                        Inactive accounts: Deleted after 6
                                        months of inactivity
                                    </li>
                                </ul>

                                <h2
                                    id="your-rights"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Your Rights
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Depending on your jurisdiction, you may have
                                    rights to:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Access and receive a copy of your
                                        personal data
                                    </li>
                                    <li>
                                        Rectify inaccurate or incomplete
                                        information
                                    </li>
                                    <li>
                                        Request deletion of your personal data
                                    </li>
                                    <li>
                                        Restrict or object to processing of your
                                        data
                                    </li>
                                    <li>
                                        Data portability in a machine-readable
                                        format
                                    </li>
                                    <li>
                                        Withdraw consent for marketing
                                        communications
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    To exercise these rights, contact{" "}
                                    <Link href="mailto:privacy@cnippet.site">
                                        privacy@cnippet.site
                                    </Link>
                                    . We will respond within 15 days after
                                    verifying your identity. For GDPR/CCPA
                                    requests, we provide free access and
                                    processing.
                                </p>

                                <h2
                                    id="international-data-transfers"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    International Data Transfers
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    As a global platform, your information may
                                    be transferred to and processed in countries
                                    outside your residence. We ensure adequate
                                    safeguards through:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        EU Standard Contractual Clauses for EEA
                                        data transfers
                                    </li>
                                    <li>
                                        Privacy Shield framework for US-based
                                        services (where applicable)
                                    </li>
                                    <li>
                                        Data localization options for enterprise
                                        customers
                                    </li>
                                </ul>

                                <h2
                                    id="childrens-privacy"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Children&apos;s Privacy
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    Our services are not directed to individuals
                                    under 16. We do not knowingly collect
                                    personal information from children. If we
                                    become aware that a child has provided us
                                    with personal information, we will take
                                    steps to delete such information.
                                </p>

                                <h2
                                    id="policy-updates"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Policy Updates
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We may update this policy periodically. We
                                    will notify you of significant changes via
                                    email or platform notification at least 30
                                    days before changes take effect. Continued
                                    use after changes constitutes acceptance.
                                </p>

                                <h2
                                    id="contact-us"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Contact Us
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    For privacy-related inquiries, questions or
                                    to exercise your rights:
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
                                        Privacy Policy
                                    </div>
                                    <ul className="space-y-2 pt-5 text-sm text-neutral-600">
                                        <li>
                                            <Link
                                                href="#information-collection"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Information Collection
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#use-of-information"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Use of Information
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#data-sharing-and-disclosure"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Data Sharing and Disclosure
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#data-security"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Data Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#data-retention"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Data Retention
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#your-rights"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Your Rights
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#international-data-transfers"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                International Data Transfers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#childrens-privacy"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Children&apos;s Privacy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#policy-updates"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Policy Updates
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

export default PrivacyPolicy;
