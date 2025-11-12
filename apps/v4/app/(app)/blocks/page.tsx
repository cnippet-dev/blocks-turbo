import { Suspense } from "react";

import ReactLenis from "lenis/react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { BASE_URL } from "@/config/docs";

const SectionsPage = dynamic(() => import("./_components/categories"), {
    ssr: true,
    loading: () => <div className="h-20 bg-white dark:bg-black" />,
});

const page = () => {
    return (
        <>
            <ReactLenis root>
                <Suspense>
                    <SectionsPage />
                </Suspense>
            </ReactLenis>
        </>
    );
};

export default page;

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: "Sections",
    description:
        "An extensive collection of copy-and-paste Sections for quickly building app UIs. Free, open-source, and ready to drop into your projects.",

    openGraph: {
        type: "article",
        title: "Sections",
        description:
            "An extensive collection of copy-and-paste Sections for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        url: `${BASE_URL}/Sections`,
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
        title: "Sections",
        description:
            "An extensive collection of copy-and-paste Sections for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        images: [`${BASE_URL}/og-image.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },
};
