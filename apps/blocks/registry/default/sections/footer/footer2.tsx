"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const footerLinks = [
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
];

export default function Component() {
    return (
        <footer className="font-kumb w-full bg-stone-100 px-10 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="https://res.cloudinary.com/dcxm3ccir/image/upload/v1753948225/logo-light.png"
                                alt=""
                                className="size-13"
                                width={1080}
                                height={1080}
                                suppressHydrationWarning
                            />
                            <span className="text-sm font-medium tracking-wider text-stone-800">
                                CNIPPET
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-xl leading-tight font-medium text-stone-900 lg:text-3xl">
                                We have the
                                <br />
                                largest{" "}
                                <span className="text-emerald-600 italic">
                                    components library.
                                </span>
                            </h2>
                            <p className="text-stone-600">
                                Inhale the future, exhale the past.
                            </p>
                        </div>
                        <Button className="rounded-full bg-emerald-800 px-4 py-2 font-medium text-white hover:bg-emerald-900">
                            Join Cnippet
                        </Button>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-7 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="mb-6 font-medium text-stone-900">
                                    {section.title}
                                </h4>
                                <ul className="space-y-5">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href || "#"}
                                                className="text-stone-600 transition-colors hover:text-stone-950"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-8">
                    <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                        <div className="flex gap-4 [&>a]:text-sm [&>a]:text-stone-700 [&>a]:hover:text-stone-950 [&>a]:hover:underline">
                            <Link href="#">Terms</Link>
                            <Link href="#">Code of Ethics</Link>
                            <Link href="#">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-4 text-sm">
                        <div className="text-stone-700">©2025, Cnippet.co</div>
                        <p className="text-stone-600">
                            We honor the land we practice on.{" "}
                            <span className="font-medium text-red-500">2%</span>{" "}
                            of profits support Indigenous-led wellness
                            initiatives.
                        </p>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer rounded-full bg-white text-stone-700 hover:bg-stone-700 hover:text-white"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        >
                            <ChevronUp className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
