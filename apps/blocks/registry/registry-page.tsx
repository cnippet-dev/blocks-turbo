import { RegistryItem } from "@/types/registry";

interface PageConfig {
    name: string;
    no?: string;
}

const generatePages = (sectionsConfig: PageConfig[]): RegistryItem[] => {
    return sectionsConfig.map((section) => ({
        name: section.name,
        slug: `/pages/${section.name}`,
        type: "registry:page",
        files: [
            {
                path: "registry/default/sections/hero/hero1.tsx",
                type: "",
                target: "",
            },
        ],
        number: section.no,
        thumbnail: `https://res.cloudinary.com/dcxm3ccir/image/upload/v1761545260/${section.name}.png`,
    }));
};

export const page = generatePages([
    {
        name: "landing-page",
        no: "1",
    },
    {
        name: "pricing-page",
        no: "1",
    },
]);
