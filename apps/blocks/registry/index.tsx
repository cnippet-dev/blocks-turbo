// index.tsx
import { section } from "./registry-section";
import { sections } from "./registry-sections";
import { page } from "./registry-page";
import { pages } from "./registry-pages";

export const registry = [
    ...section,
    ...sections,
    ...page,
    ...pages,
];
