const BASE_PATH = "registry/default/";

const generateSections = (
    sectionName: string,
    totalSections: number,
    authConfig: string[],
    proConfig: string[],
) => {
    return Array.from({ length: totalSections }, (_, index) => {
        const sectionIndex = index + 1;
        return {
            name: `${sectionName}-${sectionIndex}`,
            type: "registry:sections",
            auth: authConfig[index] === "T",
            pro: proConfig[index] === "T",
            dependencies: ["framer-motion"],
            files: [
                `${BASE_PATH}sections/${sectionName}/${sectionName}${sectionIndex}.tsx`,
            ],
        };
    });
};

export const sections = [
    ...generateSections("banner", 1, ["T"], ["T"]),
    ...generateSections(
        "blog",
        6,
        ["F", "F", "T", "F", "F", "T"],
        ["F", "F", "T", "F", "F", "T"],
    ),
    ...generateSections("career", 1, ["T"], ["T"]),
    ...generateSections("contact", 2, ["F", "F"], ["F", "F"]),
    ...generateSections("cta", 1, ["T"], ["T"]),
    ...generateSections("faq", 1, ["T"], ["T"]),
    ...generateSections("feature", 1, ["T"], ["T"]),
    ...generateSections("footer", 3, ["F", "F", "F"], ["F", "F", "F"]),
    ...generateSections(
        "hero",
        5,
        ["F", "F", "T", "T", "T"],
        ["F", "F", "T", "T", "T"],
    ),
    ...generateSections("login", 4, ["F", "F", "F", "F"], ["F", "F", "F", "F"]),
    ...generateSections(
        "pricing",
        7,
        ["F", "F", "T", "F", "T", "F", "T"],
        ["F", "F", "T", "F", "F", "F", "F"],
    ),
    ...generateSections("team", 1, ["F"], ["F"]),
    ...generateSections("testimonial", 1, ["F"], ["F"]),
];
