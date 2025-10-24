"use client";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Component() {
    const footerLinks = useMemo(
        () => [
            {
                title: "Explore",
                links: [
                    { title: "Curated Classes", href: "#" },
                    { title: "Retreats Locations", href: "#" },
                    { title: "Training", href: "#" },
                    { title: "Wellness blog", href: "#" },
                ],
            },
            {
                title: "Guidance",
                links: [
                    { title: "Book a free call", href: "#" },
                    { title: "FAQs & Supports", href: "#" },
                    { title: "Workplace Policy", href: "#" },
                ],
            },
            {
                title: "Support",
                links: [
                    { title: "Articles", href: "#" },
                    { title: "Documentation", href: "#" },
                    { title: "Tutorials", href: "#" },
                    { title: "Help Center", href: "#" },
                ],
            },
            {
                title: "Connect",
                links: [
                    { title: "Community Forum", href: "#" },
                    { title: "Instagram", href: "#" },
                    { title: "YouTube", href: "#" },
                ],
            },
        ],
        [],
    );
    return (
        <footer className="w-full bg-stone-100 px-6 py-12">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 flex flex-col justify-between gap-8 rounded-2xl bg-white p-5 lg:flex-row lg:items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-light.png"
                                alt=""
                                className="size-13"
                                width={1080}
                                height={1080}
                                suppressHydrationWarning
                            />
                            <span className="text-xs font-medium tracking-wider text-stone-800">
                                CNIPPET
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-lg font-medium text-stone-900 lg:text-2xl">
                                We have the largest{" "}
                                <span className="text-emerald-600 italic">
                                    components library.
                                </span>
                            </h2>
                            <p className="text-sm text-stone-600">
                                Inhale the future, exhale the past.
                            </p>
                        </div>
                    </div>
                    <Button className="rounded-full bg-emerald-800 px-4 py-5 font-medium whitespace-nowrap text-white hover:bg-emerald-900">
                        Join Sana—today
                    </Button>
                </div>

                <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-4 font-medium text-stone-900">
                                {section.title}
                            </h4>
                            <ul className="space-y-5">
                                {section.links.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href || "#"}
                                            className="text-stone-600 transition-colors hover:text-stone-900"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="mb-8 bg-stone-200" />

                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="space-y-4">
                        <p className="text-sm text-stone-700">
                            We honor the land we practice on.{" "}
                            <span className="font-medium text-red-500">2%</span>{" "}
                            of profits support
                            <br />
                            Indigenous-led wellness initiatives.
                        </p>
                        <div className="text-sm text-stone-700">
                            ©2025, Cnippet.co
                        </div>
                    </div>
                    <div className="flex gap-6 [&>a]:text-sm [&>a]:text-stone-700 [&>a]:underline [&>a]:hover:text-stone-950">
                        <Link href="#">Terms</Link>
                        <Link href="#">Code of Ethics</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
