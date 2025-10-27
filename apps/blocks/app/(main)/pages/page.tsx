// "use client";

import { Suspense } from "react";

import ReactLenis from "lenis/react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { BASE_URL } from "@/config/docs";

const PagesPage = dynamic(() => import("./_components/categories"), {
    ssr: true,
    loading: () => <div className="h-20 bg-white dark:bg-black" />,
});

const page = () => {
    return (
        <>
            <ReactLenis root>
                <Suspense>
                    <PagesPage />
                </Suspense>
            </ReactLenis>
        </>
    );
};

export default page;

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: "Pages",
    description:
        "Complete page templates for quickly building full-featured app pages. Free, open-source, and ready to drop into your projects.",

    openGraph: {
        type: "article",
        title: "Pages",
        description:
            "Complete page templates for quickly building full-featured app pages. Free, open-source, and ready to drop into your projects.",
        url: `${BASE_URL}/Pages`,
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Cnippet UI Component Library",
            },
        ],
        siteName: "Cnippet UI",
    },

    twitter: {
        card: "summary_large_image",
        title: "Pages",
        description:
            "Complete page templates for quickly building full-featured app pages. Free, open-source, and ready to drop into your projects.",
        images: [`${BASE_URL}/og-image.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },
};