import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cancellation & Refund Policy",
    description:
        "Cancellation & Refund Policy for CNIPPET. Learn how to cancel your subscription and get a refund.",
};

const CancellationPolicy = () => {
    return (
        <section className="legal_page dark:bg-background] relative w-full">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-0">
                <div className="relative">
                    <div className="absolute -top-2.5 -left-2.5 z-50 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
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
                                    Cancellation & Refund Policy
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
                                    This Cancellation & Refund Policy governs
                                    subscription cancellations and refund
                                    requests for purchases made through
                                    CNIPPET&apos;s platform. Please read this
                                    policy carefully before making any
                                    purchases.
                                </p>

                                <h2
                                    id="subscription-cancellations"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Subscription Cancellations
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    You may cancel your premium subscription at
                                    any time:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Access your account settings at{" "}
                                        <Link href="/account">
                                            blocks.cnippet.site/account
                                        </Link>
                                    </li>
                                    <li>
                                        Navigate to the Subscription section
                                    </li>
                                    <li>
                                        Select &quot;Cancel Subscription&quot;
                                    </li>
                                    <li>Follow the confirmation prompts</li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    <strong>Important Notes:</strong>
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Cancellations take effect at the end of
                                        your current billing period
                                    </li>
                                    <li>
                                        You retain access to premium features
                                        until your paid period ends
                                    </li>
                                    <li>
                                        No partial-month refunds are provided
                                    </li>
                                    <li>
                                        Enterprise contracts require 30 days
                                        written notice before renewal date
                                    </li>
                                </ul>

                                <h2
                                    id="refund-eligibility"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Refund Eligibility
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We offer refunds under these specific
                                    circumstances:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        <strong>Technical Issues:</strong> When
                                        platform errors prevent access to
                                        purchased content that we cannot resolve
                                        within 72 hours of your report
                                    </li>
                                    <li>
                                        <strong>Duplicate Charges:</strong>{" "}
                                        Accidental multiple charges for the same
                                        product
                                    </li>
                                    <li>
                                        <strong>Undelivered Products:</strong>{" "}
                                        When purchased templates or components
                                        fail to download due to system errors
                                    </li>
                                    <li>
                                        <strong>Misrepresentation:</strong>{" "}
                                        Significant discrepancy between
                                        advertised and actual product
                                        capabilities
                                    </li>
                                </ul>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    <strong>Non-Refundable Items:</strong>
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Subscription fees for periods that have
                                        already been used
                                    </li>
                                    <li>
                                        Individual component packs once
                                        downloaded
                                    </li>
                                    <li>
                                        Template bundles after successful
                                        download
                                    </li>
                                    <li>Educational guides and tutorials</li>
                                    <li>Custom development services</li>
                                </ul>

                                <h2
                                    id="refund-request-process"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Refund Request Process
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    To request a refund:
                                </p>
                                <ol className="mt-2 list-decimal pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Submit a request within 3 days of
                                        purchase to{" "}
                                        <Link href="mailto:support@cnippet.site">
                                            support@cnippet.site
                                        </Link>
                                    </li>
                                    <li>
                                        Include your transaction ID (found in
                                        your account or payment confirmation
                                        email)
                                    </li>
                                    <li>
                                        Provide a detailed explanation of the
                                        issue
                                    </li>
                                    <li>
                                        For technical issues, include
                                        screenshots or error logs
                                    </li>
                                </ol>
                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    Our support team will:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Acknowledge your request within 24
                                        business hours
                                    </li>
                                    <li>
                                        Review and investigate within 7 business
                                        days
                                    </li>
                                    <li>
                                        Notify you of the decision via email
                                    </li>
                                    <li>
                                        Process approved refunds within 14
                                        business days to your original payment
                                        method
                                    </li>
                                </ul>

                                <h2
                                    id="special-circumstances"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Special Circumstances
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    In exceptional cases, we may offer refunds
                                    at our discretion:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        <strong>Extended Downtime:</strong>{" "}
                                        Platform unavailability exceeding 48
                                        consecutive hours
                                    </li>
                                    <li>
                                        <strong>Security Incidents:</strong>{" "}
                                        Verified data breaches affecting your
                                        account
                                    </li>
                                    <li>
                                        <strong>Billing Errors:</strong>{" "}
                                        Incorrect charges due to system
                                        miscalculations
                                    </li>
                                    <li>
                                        <strong>Death or Disability:</strong>{" "}
                                        With appropriate documentation
                                    </li>
                                </ul>

                                <h2
                                    id="chargeback-policy"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Chargeback Policy
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    We are committed to resolving billing
                                    concerns in a fair and transparent manner.
                                    Filing a chargeback without first contacting
                                    us to attempt resolution may result in
                                    serious consequences under this policy.
                                </p>

                                <h3 className="pt-5 text-lg font-semibold">
                                    Dispute Resolution First
                                </h3>
                                <p className="pt-2 text-gray-600 dark:text-gray-400">
                                    Before initiating a chargeback through your
                                    bank or payment provider, you are required
                                    to contact our support team at{" "}
                                    <Link href="mailto:support@cnippet.site">
                                        support@cnippet.site
                                    </Link>
                                    . Most issues are resolved within a few
                                    business days.
                                </p>

                                <p className="pt-2 text-gray-600 dark:text-gray-400">
                                    If you initiate a chargeback without first
                                    attempting to resolve the issue with us
                                    directly, the following actions may be
                                    taken:
                                </p>

                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Immediate suspension of your CNIPPET
                                        account and associated services
                                    </li>
                                    <li>
                                        Permanent revocation of access to
                                        previously purchased templates,
                                        components, or subscriptions
                                    </li>
                                    <li>
                                        Dispute resolution fee of ₹4,000 added
                                        to your account to cover administrative
                                        and legal costs
                                    </li>
                                    <li>
                                        Blacklisting from future purchases
                                        across all CNIPPET platforms
                                    </li>
                                    <li>
                                        Legal action in accordance with the
                                        applicable laws of India, including
                                        recovery of funds and damages where
                                        applicable
                                    </li>
                                </ul>

                                <p className="pt-3 text-gray-600 dark:text-gray-400">
                                    We encourage you to contact us at{" "}
                                    <Link href="mailto:support@cnippet.site">
                                        support@cnippet.site
                                    </Link>{" "}
                                    to resolve any billing issues before
                                    initiating a chargeback.
                                </p>

                                <h2
                                    id="reactivation-of-cancelled-accounts"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Reactivation of Cancelled Accounts
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    You may reactivate a cancelled account
                                    within 6 months:
                                </p>
                                <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                                    <li>
                                        Previous payment methods will be charged
                                        at current rates
                                    </li>
                                    <li>
                                        Customizations and saved components will
                                        be restored
                                    </li>
                                    <li>Download history remains accessible</li>
                                    <li>
                                        After 6 months, accounts are permanently
                                        deleted
                                    </li>
                                </ul>

                                <h2
                                    id="contact-information"
                                    className="scroll-m-20 pt-10 text-2xl font-semibold"
                                >
                                    Contact Information
                                </h2>
                                <p className="pt-5 text-gray-600 dark:text-gray-400">
                                    For cancellation or refund assistance:
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
                                        Cancellation Policy
                                    </div>
                                    <ul className="space-y-2 pt-5 text-sm text-neutral-600">
                                        <li>
                                            <Link
                                                href="#subscription-cancellations"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Subscription Cancellations
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#refund-eligibility"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Refund Eligibility
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#refund-request-process"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Refund Request Process
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#special-circumstances"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Special Circumstances
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#chargeback-policy"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Chargeback Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#reactivation-of-cancelled-accounts"
                                                className="!text-neutral-600 hover:!text-neutral-800 dark:!text-neutral-400 dark:hover:!text-neutral-200"
                                            >
                                                Reactivation of Cancelled
                                                Accounts
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

export default CancellationPolicy;
