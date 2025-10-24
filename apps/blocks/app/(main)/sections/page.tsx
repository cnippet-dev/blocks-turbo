"use client";

import { Suspense } from "react";

import ReactLenis from "lenis/react";
import dynamic from "next/dynamic";

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
