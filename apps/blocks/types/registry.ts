// types/registry.ts
export interface RegistryFile {
    path: string;
    type: string;
    target?: string;
    content?: string;
}

export interface RegistryItem {
    name: string;
    type: string;
    slug?: string;
    auth?: boolean;
    pro?: boolean;
    number?: string;
    thumbnail?: string;
    title?: string;
    author?: string;
    description?: string;
    dependencies?: string[];
    devDependencies?: string[];
    registryDependencies?: string[];
    files?: (string | RegistryFile)[];
    tailwind?: {
        config?: {
            content?: string[];
            theme?: Record<string, unknown>;
            plugins?: string[];
        };
    };
    cssVars?: {
        theme?: Record<string, string>;
        light?: Record<string, string>;
        dark?: Record<string, string>;
    };
    css?: Record<string, unknown>;
    envVars?: Record<string, string>;
    meta?: Record<string, unknown>;
    docs?: string;
    categories?: string[];
}

export interface Style {
    name: string;
    label: string;
}

export interface IndexEntry {
    name: string;
    type: string;
    auth?: boolean;
    pro?: boolean;
    number?: string;
    files: (string | RegistryFile)[];
    component: React.LazyExoticComponent<React.ComponentType<Record<string, never>>>;
}

export type RegistryIndex = Record<string, IndexEntry>;
