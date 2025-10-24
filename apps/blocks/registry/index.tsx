import { Registry } from "./schema";
import { section } from "./registry-section";
import { sections } from "./registry-sections";
import { blocks } from "@/registry/registry-blocks";

export const registry = [...blocks, ...section];
