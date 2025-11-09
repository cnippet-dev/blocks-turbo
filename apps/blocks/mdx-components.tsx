import { useMDXComponent } from "@content-collections/mdx/react";
import { HTMLAttributes } from "react";
import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";

// Lazy load heavy components with loading states
const CopyButton = dynamic(() => import("@/components/mdx/copy-button").then(mod => ({ default: mod.CopyButton })), {
    loading: () => <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
});
const Tabs = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.Tabs })), {
    loading: () => <div className="h-10 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
});
const TabsContent = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.TabsContent })));
const TabsList = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.TabsList })));
const TabsTrigger = dynamic(() => import("@/components/ui/tabs").then(mod => ({ default: mod.TabsTrigger })));
const CodeBlockCommand = dynamic(() => import("./components/mdx/code-block-command").then(mod => ({ default: mod.CodeBlockCommand })), {
    loading: () => <div className="h-12 bg-gray-200 dark:bg-gray-800 animate-pulse rounded" />
});
const Button = dynamic(() => import("@/components/ui/button").then(mod => ({ default: mod.Button })));
const SectionPreview = dynamic(() => import("./components/mdx/section-preview").then(mod => ({ default: mod.SectionPreview })), {
    loading: () => <div className="h-64 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />
});

interface MDXProps {
    code: string;
    className?: string;
}

const components = {
    Button,
    SectionPreview,
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "mb-4 text-3xl font-medium px-3",
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "font-heading font-ins mt-8 scroll-m-20 text-xl tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className,
            )}
            {...props}
        />
    ),
    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={cn("text-gray-400 px-3", className)} {...props} />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),

    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="font-ins my-6 w-full overflow-y-auto text-sm font-medium">
            <table className={cn("w-full", className)} {...props} />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className={cn("m-0 border-t p-0", className)} {...props} />
    ),
    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "font-ins dark:border-dawn-600 border px-4 py-2 text-left font-medium [[align=center]]:text-center [[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),
    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "dark:border-dawn-600 border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),

    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className={cn("font-ins font-medium", className)} {...props} />
    ),

    figure: ({ children, raw, ...props }: ExtendedPreProps) => (
        <figure {...props} className="relative mb-4 rounded-lg">
            {children}
        </figure>
    ),

    pre: ({
        className,
        __rawString__,
        __npmCommand__,
        __pnpmCommand__,
        __yarnCommand__,
        __bunCommand__,
        __withMeta__,
        __src__,
        // __event__,
        // __style__,
        __name__,
        ...props
    }: React.HTMLAttributes<HTMLPreElement> & {
        // __style__?: Style["name"]
        __rawString__?: string;
        __npmCommand__?: string;
        __pnpmCommand__?: string;
        __yarnCommand__?: string;
        __bunCommand__?: string;
        __withMeta__?: boolean;
        __src__?: string;
        // __event__?: Event["name"];
        __name__?: string;
    }) => {
        const isNpmCommand =
            __npmCommand__ &&
            __yarnCommand__ &&
            __pnpmCommand__ &&
            __bunCommand__;

        if (isNpmCommand) {
            return (
                <CodeBlockCommand
                    __npmCommand__={__npmCommand__}
                    __yarnCommand__={__yarnCommand__}
                    __pnpmCommand__={__pnpmCommand__}
                    __bunCommand__={__bunCommand__}
                />
            );
        }

        return (
            <>
                <pre
                    className={`overflow-x-auto rounded-lg border bg-neutral-950! text-wrap dark:border-neutral-800 dark:bg-zinc-900! ${className}`}
                    {...props}
                />
                {__rawString__ && <CopyButton value={__rawString__} />}
            </>
        );
    },

    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn("px-4 py-5 font-mono text-sm font-normal", className)}
            {...props}
        />
    ),

    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
        <h3
            className={cn(
                "font-sans text-base font-bold text-black dark:text-white [&>p]:font-medium",
                className,
            )}
            {...props}
        />
    ),

    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps border-dawn-100 dark:border-dawn-500 mb-16 ml-4 border-l pl-[2.1rem] [counter-reset:step]"
            {...props}
        />
    ),

    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
    ),
    TabsList: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                "w-full justify-start rounded-none bg-transparent p-0 pl-4",
                className,
            )}
            {...props}
        />
    ),
    TabsTrigger: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                "data-[state=active]:bg- font-ins text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-2 pt-2 pb-1 font-mono font-medium tracking-tight shadow-none transition-none data-[state=active]:shadow-none dark:font-normal",
                className,
            )}
            {...props}
        />
    ),
    TabsContent: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
                className,
            )}
            {...props}
        />
    ),
};

export function Mdx({ code, className }: MDXProps) {
    const Component = useMDXComponent(code);

    return (
        <article className={`z-50 mx-auto ${className}`}>
            <Component components={components} />
        </article>
    );
}

interface ExtendedPreProps extends HTMLAttributes<HTMLPreElement> {
    raw?: string;
}
