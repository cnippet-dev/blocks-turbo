
const BASE_PATH = "registry/default";

const generateSections = (
    sectionsConfig: { name: string; no?: string }[],
) => {
    return sectionsConfig.map((section, index) => ({
        name: section.name,
        slug: `/blocks/${section.name}`,
        type: "registry:section",
        // files: [`${BASE_PATH}/sections/${section.name}/${section.name}-1.tsx`],
        files: [
            {
                path: "registry/default/sections/hero/hero1.tsx",
                type: "",
                target: ""
            }
        ],
        number: section.no,
        thumbnail: `https://res.cloudinary.com/dcxm3ccir/image/upload/v1753941711/${section.name}.png`,
    }));
};

export const section = generateSections([
    {
        name: "banner",
        no: "1",
    },
    {
        name: "blog",
        no: "6",
    },
    {
        name: "career",
        no: "1",
    },
    {
        name: "contact",
        no: "2",
    },
    {
        name: "cta",
        no: "1",
    },
    {
        name: "faq",
        no: "1",
    },
    {
        name: "feature",
        no: "1",
    },
    {
        name: "footer",
        no: "3",
    },
    {
        name: "hero",
        no: "5",
    },
    {
        name: "login",
        no: "4",
    },
    {
        name: "metrics",
        no: "1",
    },
    {
        name: "navbar",
        no: "1",
    },
    {
        name: "newsletter",
        no: "1",
    },
    {
        name: "pricing",
        no: "7",
    },
    {
        name: "team",
        no: "1",
    },
    {
        name: "testimonial",
        no: "1",
    },
]);
