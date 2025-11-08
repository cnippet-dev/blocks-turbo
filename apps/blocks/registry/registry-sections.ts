// import { RegistryFile } from "@/types/registry";

// const generateSections = (
//     title: string,
//     totalSections: number,
//     authConfig: string[],
//     starterConfig: string[],
//     proConfig: string[],
//     files?: (string | RegistryFile | (string | RegistryFile)[])[],
// ) => {
//     return Array.from({ length: totalSections }, (_, index) => {
//         const sectionIndex = index + 1;

//         const fileEntry = files?.[index];
//         const normalizedFiles = Array.isArray(fileEntry)
//             ? fileEntry
//             : fileEntry
//               ? [fileEntry]
//               : [
//                     {
//                         path: `registry/default/sections/${title}/${title}${sectionIndex}.tsx`,
//                         type: "registry:page",
//                         target: `/sections/${title}`,
//                     },
//                 ];

//         return {
//             name: `${title}-${sectionIndex}`,
//             type: "registry:block",
//             auth: authConfig[index] === "T",
//             pro: proConfig[index] === "T",
//             starter: starterConfig[index] === "T",
//             dependencies: ["framer-motion"],
//             files: normalizedFiles,
//         };
//     });
// };

// export const sections = [
//     ...generateSections("banner", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections(
//         "blog",
//         6,
//         ["F", "F", "T", "F", "F", "T"],
//         ["F", "F", "T", "F", "F", "T"],
//         ["F", "F", "T", "F", "F", "T"],
//         [],
//     ),
//     ...generateSections("career", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections("contact", 2, ["F", "F"], ["F", "F"], ["F", "F"], []),
//     ...generateSections("cta", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections("faq", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections("feature", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections(
//         "footer",
//         3,
//         ["F", "F", "F"],
//         ["F", "F", "F"],
//         ["F", "F", "F"],
//         [],
//     ),
//     ...generateSections(
//         "hero",
//         5,
//         ["T", "T", "T", "T", "T"],
//         ["T", "F", "F", "T", "T"],
//         ["T", "F", "F", "T", "T"],
//         [
//             [
//                 {
//                     path: "registry/default/sections/hero/hero1.tsx",
//                     type: "registry:page",
//                     target: "/sections/hero",
//                 },
//                 {
//                     path: "registry/default/sections/footer/footer1.tsx",
//                     type: "registry:page",
//                     target: "/sections/footer",
//                 },
//             ],
//             {
//                 path: "registry/default/sections/hero/hero2.tsx",
//                 type: "registry:page",
//                 target: "/sections/hero",
//             },
//             {
//                 path: "registry/default/sections/hero/hero3.tsx",
//                 type: "registry:page",
//                 target: "/sections/hero",
//             },
//             {
//                 path: "registry/default/sections/hero/hero4.tsx",
//                 type: "registry:page",
//                 target: "/sections/hero",
//             },
//             {
//                 path: "registry/default/sections/hero/hero5.tsx",
//                 type: "registry:page",
//                 target: "/sections/hero",
//             },
//         ],
//     ),
//     ...generateSections(
//         "login",
//         4,
//         ["F", "F", "F", "T"],
//         ["F", "F", "F", "F"],
//         ["T", "T", "T", "T"],
//         [],
//     ),
//     ...generateSections("metrics", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections("navbar", 1, ["T"], ["T"], ["T"], []),
//     ...generateSections("newsletter", 1, ["T"], ["T"], ["T"], []),

//     ...generateSections(
//         "pricing",
//         7,
//         ["F", "F", "T", "F", "T", "F", "T"],
//         ["F", "F", "T", "F", "F", "F", "F"],
//         ["F", "F", "T", "F", "F", "F", "F"],
//         [],
//     ),
//     ...generateSections("team", 1, ["F"], ["F"], ["F"], []),
//     ...generateSections("testimonial", 1, ["F"], ["F"], ["F"], []),
// ];

import { RegistryFile } from "@/types/registry";

interface SectionConfig {
    auth: boolean;
    starter: boolean;
    pro: boolean;
    files?: (string | RegistryFile | (string | RegistryFile)[])[];
}

const createSection = (title: string, configs: SectionConfig[]) => {
    return configs.map((config, index) => {
        const sectionIndex = index + 1;
        const fileEntry = config.files?.[index];

        const normalizedFiles = Array.isArray(fileEntry)
            ? fileEntry
            : fileEntry
              ? [fileEntry]
              : [
                    {
                        path: `registry/default/sections/${title}/${title}${sectionIndex}.tsx`,
                        type: "registry:page" as const,
                        target: `/sections/${title}`,
                    },
                ];

        return {
            name: `${title}-${sectionIndex}`,
            type: "registry:block" as const,
            auth: config.auth,
            starter: config.starter,
            pro: config.pro,
            dependencies: ["framer-motion"],
            files: normalizedFiles,
        };
    });
};

// Helper functions for cleaner config creation
const SectionConfig = {
    create: (
        auth: boolean,
        starter: boolean,
        pro: boolean,
        files?: SectionConfig["files"],
    ): SectionConfig => ({
        auth,
        starter,
        pro,
        files,
    }),

    // Common patterns
    free: (files?: SectionConfig["files"]) =>
        SectionConfig.create(false, false, false, files),
    starter: (files?: SectionConfig["files"]) =>
        SectionConfig.create(true, true, false, files),
    pro: (files?: SectionConfig["files"]) =>
        SectionConfig.create(true, false, true, files),
    all: (files?: SectionConfig["files"]) =>
        SectionConfig.create(true, true, true, files),
    authOnly: (files?: SectionConfig["files"]) =>
        SectionConfig.create(true, false, false, files),
};

// Hero section files defined separately for better readability
const HERO_FILES: SectionConfig["files"] = [
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
];

export const sections = [
    // Single variant sections
    ...createSection("banner", [SectionConfig.all()]),
    ...createSection("career", [SectionConfig.all()]),
    ...createSection("cta", [SectionConfig.all()]),
    ...createSection("faq", [SectionConfig.all()]),
    ...createSection("feature", [SectionConfig.all()]),
    ...createSection("metrics", [SectionConfig.all()]),
    ...createSection("navbar", [SectionConfig.all()]),
    ...createSection("newsletter", [SectionConfig.all()]),
    ...createSection("team", [SectionConfig.free()]),
    ...createSection("testimonial", [SectionConfig.free()]),

    // Multi-variant sections
    ...createSection("blog", [
        SectionConfig.free(),
        SectionConfig.free(),
        SectionConfig.all(),
        SectionConfig.free(),
        SectionConfig.free(),
        SectionConfig.all(),
    ]),

    ...createSection("contact", [SectionConfig.free(), SectionConfig.free()]),

    ...createSection("footer", [
        SectionConfig.free(),
        SectionConfig.free(),
        SectionConfig.free(),
    ]),

    ...createSection("hero", [
        SectionConfig.all(HERO_FILES?.[0] ? [HERO_FILES[0]] : undefined),
        SectionConfig.create(
            true,
            false,
            false,
            HERO_FILES?.[1] ? [HERO_FILES[1]] : undefined,
        ),
        SectionConfig.create(
            true,
            false,
            false,
            HERO_FILES?.[2] ? [HERO_FILES[2]] : undefined,
        ),
        SectionConfig.create(
            true,
            true,
            true,
            HERO_FILES?.[3] ? [HERO_FILES[3]] : undefined,
        ),
        SectionConfig.create(
            true,
            true,
            true,
            HERO_FILES?.[4] ? [HERO_FILES[4]] : undefined,
        ),
    ]),

    ...createSection("login", [
        SectionConfig.create(false, false, true),
        SectionConfig.create(false, false, true),
        SectionConfig.create(false, false, true),
        SectionConfig.create(true, false, true),
    ]),

    ...createSection("pricing", [
        SectionConfig.free(),
        SectionConfig.free(),
        SectionConfig.create(true, true, true),
        SectionConfig.free(),
        SectionConfig.create(true, false, false),
        SectionConfig.free(),
        SectionConfig.create(true, false, false),
    ]),
];
