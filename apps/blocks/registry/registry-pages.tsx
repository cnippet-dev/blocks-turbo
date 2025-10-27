import { RegistryFile } from "@/types/registry";

const generatePages = (
    title: string,
    totalSections: number,
    authConfig: string[],
    proConfig: string[],
    files?: (string | RegistryFile | (string | RegistryFile)[])[]
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
                        path: `registry/default/pages/${title}/${title}${sectionIndex}.tsx`,
                        type: "registry:page",
                        target: `/pages/${title}`,
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

export const pages = [
    ...generatePages("landing-page", 1, ["T"], ["T"], []),
    ...generatePages("pricing-page", 1, ["T"], ["T"], []),
];
