"use client";

import dynamic from "next/dynamic";

// The Mdx component itself is dynamically imported.
// IMPORTANT: We've removed `ssr: false` to allow server-rendering.
// This is the most critical change for performance.
const Mdx = dynamic(
    () => import("@/mdx-components").then((mod) => ({ default: mod.Mdx })),
    {
        loading: () => (
            <div className="h-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
        ),
        // ssr: false, // REMOVED FOR SSR
    },
);

// A simple wrapper to render the MDX code.
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MdxRenderer({ code }: { code: any }) {
    return <Mdx code={code} />;
}