import * as React from "react";
import { notFound } from "next/navigation";

import { getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { type Style } from "@/registry/styles";
import { PreviewScreenShift } from "../_components/preview-screen-shift";

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

        if (!item) {
            return notFound();
        }

        return (
            <PreviewScreenShift
                name={item.name}
                containerClassName={cn("bg-background", item.meta?.container)}
                iframeHeight={item.meta?.iframeHeight ?? "930px"}
            />
        );
    } catch (error) {
        console.error("Preview loading failed:", error);
        return notFound();
    }
};

export default PreviewPage;
