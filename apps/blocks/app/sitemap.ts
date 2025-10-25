import { MetadataRoute } from "next";

import { allSections } from "@/.content-collections/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BASE_URL = process.env.NEXT_PUBLIC_URL
        ? `${process.env.NEXT_PUBLIC_URL}`
        : "http://localhost:3000";

    const allRoutes = [`/sections`, `/pages`, `/templates`];

    const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
    }));

    const sections: MetadataRoute.Sitemap = allSections.map(
        ({ slugAsParams }) => ({
            url: `${BASE_URL}/sections/${slugAsParams}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        }),
    );

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...routes,
        ...sections,
    ];
}
