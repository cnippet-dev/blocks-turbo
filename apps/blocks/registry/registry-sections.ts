import { RegistryFile } from "@/types/registry";

const generateSections = (
    title: string,
    totalSections: number,
    authConfig: string[],
    proConfig: string[],
    files?: (string | RegistryFile | (string | RegistryFile)[])[],
) => {
    return Array.from({ length: totalSections }, (_, index) => {
        const sectionIndex = index + 1;

        const fileEntry = files?.[index];
        const normalizedFiles = Array.isArray(fileEntry)
            ? fileEntry
            : fileEntry
              ? [fileEntry]
              : [
                    {
                        path: `registry/default/sections/${title}/${title}${sectionIndex}.tsx`,
                        type: "registry:page",
                        target: `/sections/${title}`,
                    },
                ];

        return {
            name: `${title}-${sectionIndex}`,
            type: "registry:block",
            auth: authConfig[index] === "T",
            pro: proConfig[index] === "T",
            dependencies: ["framer-motion"],
            files: normalizedFiles,
        };
    });
};

export const sections = [
    ...generateSections("banner", 1, ["T"], ["T"], []),
    ...generateSections(
        "blog",
        6,
        ["F", "F", "T", "F", "F", "T"],
        ["F", "F", "T", "F", "F", "T"],
        [],
    ),
    ...generateSections("career", 1, ["T"], ["T"], []),
    ...generateSections("contact", 2, ["F", "F"], ["F", "F"], []),
    ...generateSections("cta", 1, ["T"], ["T"], []),
    ...generateSections("faq", 1, ["T"], ["T"], []),
    ...generateSections("feature", 1, ["T"], ["T"], []),
    ...generateSections("footer", 3, ["F", "F", "F"], ["F", "F", "F"], []),
    ...generateSections(
        "hero",
        5,
        ["T", "T", "T", "T", "T"],
        ["T", "F", "F", "T", "T"],
        [
            [
                {
                    path: "registry/default/sections/hero/hero1.tsx",
                    type: "registry:page",
                    target: "/sections/hero",
                },
                {
                    path: "registry/default/sections/footer/footer1.tsx",
                    type: "registry:page",
                    target: "/sections/footer",
                },
            ],
            {
                path: "registry/default/sections/hero/hero2.tsx",
                type: "registry:page",
                target: "/sections/hero",
            },
            {
                path: "registry/default/sections/hero/hero3.tsx",
                type: "registry:page",
                target: "/sections/hero",
            },
            {
                path: "registry/default/sections/hero/hero4.tsx",
                type: "registry:page",
                target: "/sections/hero",
            },
            {
                path: "registry/default/sections/hero/hero5.tsx",
                type: "registry:page",
                target: "/sections/hero",
            },
        ],
    ),
    ...generateSections(
        "login",
        4,
        ["F", "F", "F", "F"],
        ["F", "F", "F", "F"],
        [],
    ),
    ...generateSections("metrics", 1, ["T"], ["T"], []),
    ...generateSections("navbar", 1, ["T"], ["T"], []),
    ...generateSections("newsletter", 1, ["T"], ["T"], []),

    ...generateSections(
        "pricing",
        7,
        ["F", "F", "T", "F", "T", "F", "T"],
        ["F", "F", "T", "F", "F", "F", "F"],
        [],
    ),
    ...generateSections("team", 1, ["F"], ["F"], []),
    ...generateSections("testimonial", 1, ["F"], ["F"], []),
];
