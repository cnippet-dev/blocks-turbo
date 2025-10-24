import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { getSectionsData } from "@/hooks/use-sections-data";

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
    const allSections = await getSectionsData();
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    return allSections.map((doc: any) => ({
        slug: doc.slugAsParams,
    }));
}

async function getComponentDoc({ slug }: { slug: string }) {
    const allSections = await getSectionsData();
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    return allSections.find((doc: any) => doc.slugAsParams === slug);
}

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

export default async function Blogpage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = await params;
    const doc = await getComponentDoc(slug);

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
