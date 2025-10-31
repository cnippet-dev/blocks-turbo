import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { HomeIcon } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DashedBorderWithTopDots } from "@/components/dashed-layout";
import Link from "next/link";

import { BASE_URL } from "@/config/docs";
import { allPages } from "@/.content-collections/generated";
import { getSectionsData } from "@/hooks/use-sections-data";
import type { Metadata, ResolvingMetadata } from "next";

const MdxRenderer = dynamic(
    () =>
        import("./_c/mdx-renderer").then((mod) => ({
            default: mod.MdxRenderer,
        })),
    {
        ssr: true,
        loading: () => (
            <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />
        ),
    },
);

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
    const allPages = await getSectionsData();
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    return allPages.map((doc: any) => ({
        slug: doc.slugAsParams,
    }));
}

function getComponentDoc({ slug }: { slug: string }) {
    return allPages?.find((doc) => doc.slugAsParams === slug) || null;
}

export default async function Blogpage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = await params;
    const doc = getComponentDoc(slug);

    if (!doc) {
        return <div>Component not found.</div>;
    }

    return (
        <>
            <main className="relative h-full">
                <DashedBorderWithTopDots />

                <div className="mx-auto max-w-7xl px-5 pt-10 pb-20">
                    {/* Breadcrumbs are now server-rendered */}
                    <Breadcrumb className="mt-2 px-3">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    {" "}
                                    {/* Changed href to root */}
                                    <HomeIcon size={16} aria-hidden="true" />
                                    <span className="sr-only">Home</span>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>/</BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/sections">
                                    Sections
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>/</BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{doc.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    {/* Info box is now server-rendered */}
                    <div className="mx-3 my-8 max-w-full space-y-1.5 rounded-lg border border-neutral-800 bg-neutral-950 p-5">
                        <p className="text-sm text-gray-300">
                            Some components may require components from Cnippet
                            Ui to function properly.
                        </p>
                        <p className="text-sm text-gray-300">
                            You can easily install them by following the
                            instructions in the{" "}
                            <Link
                                href="https://ui.cnippet.dev/components"
                                target="_blank"
                                className="text-blue-400 hover:text-blue-300"
                            >
                                documentation
                            </Link>
                            .
                        </p>
                    </div>

                    {/* Only the MDX renderer is a client component, wrapped in Suspense */}
                    {doc?.body && (
                        <Suspense
                            fallback={
                                <div className="h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                            }
                        >
                            <MdxRenderer code={doc.body.code} />
                        </Suspense>
                    )}
                </div>
            </main>
        </>
    );
}

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const slug = await params;
    const doc = getComponentDoc(slug);

    if (!doc) {
        return {
            title: "Component Not Found",
            description: "The requested component does not exist.",
            robots: "noindex, nofollow",
        };
    }

    const pageUrl = `${BASE_URL}/sections/${doc.slugAsParams}`;

    const metadata: Metadata = {
        // Essential metadata
        metadataBase: new URL(BASE_URL),
        title: doc.title,
        description: doc.description,

        // SEO and indexing
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        // Canonical and alternate URLs
        alternates: {
            canonical: pageUrl,
            languages: {
                "en-US": pageUrl,
            },
        },

        // Authors and generator
        authors: [{ name: "Cnippet Team", url: "https://blocks.cnippet.dev" }],
        generator: "Next.js",

        // Keywords for SEO
        // add doc.keywords
        keywords: [
            "UI components",
            "React",
            "Next.js",
            "Tailwind CSS",
            doc.title,
        ],

        // Referrer policy
        referrer: "origin-when-cross-origin",

        // Creator and publisher
        creator: "Cnippet Team",
        publisher: "Cnippet",

        icons: {
            icon: [
                { url: "/favicon.ico" },
                { url: "/icon.png", type: "image/png" },
            ],
            apple: [{ url: "/apple-icon.png" }],
            other: [
                {
                    rel: "apple-touch-icon-precomposed",
                    url: "/apple-touch-icon.png",
                },
            ],
        },

        openGraph: {
            type: "article",
            title: doc.title,
            description: doc.description,
            url: pageUrl,
            siteName: "Cnippet UI",
            locale: "en_US",
            // publishedTime: doc.publishedAt,
            // modifiedTime: doc.updatedAt,
            authors: ["Cnippet Team"],
            images: [
                {
                    url: `${BASE_URL}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: "Cnippet UI Component Library",
                    type: "image/png",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: doc.title,
            description: doc.description,
            creator: "@cnippet_ui",
            site: "@cnippet_ui",
            images: [`${BASE_URL}/og-image.png`],
        },
    };

    return metadata;
}
