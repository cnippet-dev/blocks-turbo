import * as React from "react";
import { notFound } from "next/navigation";

import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { type Style } from "@/registry/styles";
import { ResizableViewer } from "@/components/resizable-viewer";

export const revalidate = false;
export const dynamic = "force-dynamic";
export const dynamicParams = true;

const getCachedRegistryItem = React.cache(
    async (name: string, styleName: Style["name"]) => {
        return await getRegistryItem(name, styleName);
    }
);

const PreviewPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    try {
        const item = await getCachedRegistryItem(slug, "new-york-v4");
        const Component = getRegistryComponent(slug, "new-york-v4");

        if (!item || !Component) {
            return notFound();
        }

        return (
            <ResizableViewer
                containerClassName={cn("bg-background", item.meta?.container)}
            >
                <Component />
            </ResizableViewer>
        );
    } catch (error) {
        console.error("Preview loading failed:", error);
        return notFound();
    }
};

export default PreviewPage;
