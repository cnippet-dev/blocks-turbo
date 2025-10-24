import * as React from "react";
import { notFound } from "next/navigation";

export const revalidate = false;
export const dynamic = "force-dynamic";
export const dynamicParams = true;

import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";

const getCachedRegistryItem = React.cache(async (name: string) => {
    return await getRegistryItem(name);
});

// export async function generateStaticParams() {
//     const { Index } = await import("@/__registry__/index");
//     const index = z.record(z.string(), registryItemSchema).parse(Index);

//     return Object.values(index)
//         .filter((block) =>
//             [
//                 "registry:block",
//                 "registry:component",
//                 "registry:example",
//                 "registry:internal",
//                 "registry:section"
//             ].includes(block.type),
//         )
//         .map((block) => ({
//             name: block.name,
//         }));
// }

export default async function BlockPage({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;

    const item = await getCachedRegistryItem(slug);
    const Component = getRegistryComponent(slug);

    if (!Component || !item) {
        return notFound();
    }

    return (
        <>
            <div className={cn("bg-background", item.meta?.container)}>
                <Component />
            </div>
        </>
    );
}
