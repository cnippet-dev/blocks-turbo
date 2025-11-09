// section-preview.tsx

"use client";

import * as React from "react";
import { Index } from "@/__registry__";
import Link from "next/link";
import { Fullscreen } from "lucide-react";

import { useSessionCache } from "@/hooks/use-session-cache";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useProStatus } from "@/lib/get-pro";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

interface SectionPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
}

export function SectionPreview({ name }: SectionPreviewProps) {
    const [activeTab, setActiveTab] = React.useState<
        "preview" | "code" | "login" | "pro"
    >("preview");
    const Files = Index[name].files ?? [];
    const [fileIndex, setFileIndex] = React.useState<number>(0);
    const [sourceHtmlMap, setSourceHtmlMap] = React.useState<
        Record<number, string>
    >({});
    const [isLoadingCode, setIsLoadingCode] = React.useState<boolean>(false);
    const SrcPath = typeof Files[fileIndex] === "string" 
        ? Files[fileIndex] 
        : Files[fileIndex]?.path;

    const { isAuthenticated } = useSessionCache();
    const { isPro, isStarter, isLoading: isProLoading } = useProStatus();

    // Memoize expensive computations
    const componentConfig = React.useMemo(() => {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Index[name] as any;
    }, [name]);

    const Preview = React.useMemo(() => {
        if (!componentConfig) {
            return (
                <p className="text-muted-foreground text-sm">
                    Component{" "}
                    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {name}
                    </code>{" "}
                    not found in registry.
                </p>
            );
        }
        const Component = componentConfig.component;
        if (!Component) {
            return <p>Component not found.</p>;
        }
        return <Component />;
    }, [componentConfig, name]);

    const { auth: requiresAuth, pro: requiresPro, starter: requiresStarter } = componentConfig || {};

    // Memoize authentication checks
    // Logic: 
    // - If requiresPro (but not starter), user needs pro
    // - If requiresStarter, user needs starter or pro (pro includes starter)
    // - If requiresAuth, user needs to be authenticated
    const canViewCode = React.useMemo(() => {
        if (!requiresAuth && !requiresPro && !requiresStarter) {
            return true; // Free component
        }
        if (!isAuthenticated) {
            return false; // Requires auth but not authenticated
        }
        
        // Check tier requirements
        if (requiresPro && !requiresStarter) {
            // Component is pro-only (not in starter)
            return isPro;
        }
        if (requiresStarter) {
            // Component is in starter (or both starter and pro)
            return isStarter || isPro; // Pro users also get starter access
        }
        
        return true; // Only requires auth, which is satisfied
    }, [requiresAuth, requiresPro, requiresStarter, isAuthenticated, isPro, isStarter]);

    const renderTabs = () => {
        if (canViewCode) {
            return (
                <TabsTrigger value="code" onClick={() => setActiveTab("code")}>
                    Code
                </TabsTrigger>
            );
        }
        if ((requiresPro && !isPro) || (requiresStarter && !isStarter && !isPro)) {
            return (
                <TabsTrigger value="pro" onClick={() => setActiveTab("pro")}>
                    Code
                </TabsTrigger>
            );
        }

        return (
            <TabsTrigger value="login" onClick={() => setActiveTab("login")}>
                Code
            </TabsTrigger>
        );
    };

    React.useEffect(() => {
        if (activeTab !== "code" || !canViewCode) return;
        if ((!name && !SrcPath) || fileIndex == null) return;
        if (sourceHtmlMap[fileIndex]) return;
        let isMounted = true;
        setIsLoadingCode(true);
        const params = new URLSearchParams();
        if (name) params.set("name", name);
        if (SrcPath) params.set("src", SrcPath);
        params.set("index", String(fileIndex));
        fetch(`/api/registry/source?${params.toString()}`)
            .then((r) => r.json())
            .then((data) => {
                if (!isMounted) return;
                const html = data?.highlightedCode
                    ? data.highlightedCode
                    : data?.code
                      ? `<pre><code>${data.code}</code></pre>`
                      : "";
                setSourceHtmlMap((prev) => ({ ...prev, [fileIndex]: html }));
            })
            .finally(() => isMounted && setIsLoadingCode(false));
        return () => {
            isMounted = false;
        };
    }, [activeTab, canViewCode, name, SrcPath, fileIndex, sourceHtmlMap]);

    const renderContent = () => {
        if (activeTab === "preview") {
            return Preview;
        }
        if (activeTab === "code" && canViewCode) {
            return (
                <div className="overflow-y-auto rounded-xl text-sm wrap-break-words">
                    {Files.length > 1 && (
                        <div className="flex items-center gap-2 border-b px-2 py-1">
                            {Files.map((f, idx: number) => {
                                const filePath = typeof f === "string" ? f : f.path;
                                const label =
                                    filePath?.split("/").pop() ??
                                    `file-${idx + 1}`;
                                const isActive = idx === fileIndex;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setFileIndex(idx)}
                                        className={`rounded px-2 py-1 text-xs ${isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                    <div className="w-full rounded-md bg-[#17191e] px-4 [&_pre]:my-0 [&_pre]:max-h-[600px] [&_pre]:overflow-auto">
                        {isLoadingCode && !sourceHtmlMap[fileIndex] ? (
                            <div className="text-muted-foreground py-6 text-center">
                                Loading code…
                            </div>
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: sourceHtmlMap[fileIndex] || "",
                                }}
                            />
                        )}
                    </div>
                </div>
            );
        }
        if (activeTab === "pro" || (requiresPro && !isPro) || (requiresStarter && !isStarter && !isPro)) {
            const isProOnly = requiresPro && !requiresStarter;
            const isStarterOnly = requiresStarter && !requiresPro;
            const requiresBoth = requiresStarter && requiresPro;
            
            let message: string;
            let buttonText: string;
            
            if (isProOnly) {
                message = "This is a Pro-only component. Upgrade to Pro to view the code.";
                buttonText = "Get Pro";
            } else if (isStarterOnly) {
                message = "This is a Starter component. Upgrade to Starter or Pro to view the code.";
                buttonText = "Get Starter";
            } else if (requiresBoth) {
                message = "This component requires a Starter or Pro subscription. Upgrade to view the code.";
                buttonText = "Get Starter";
            } else {
                message = "This component requires a Starter or Pro subscription. Upgrade to view the code.";
                buttonText = "Get Starter";
            }
            
            return (
                <div className="flex min-h-[200px] flex-col items-center justify-center gap-4">
                    <p className="text-muted-foreground text-center text-base">
                        {message}
                    </p>
                    <Button asChild>
                        <Link href="/pricing">{buttonText}</Link>
                    </Button>
                </div>
            );
        }
        if (activeTab === "login" || (requiresAuth && !isAuthenticated)) {
            return (
                <div className="flex min-h-[200px] flex-col items-center justify-center gap-4">
                    <p className="text-muted-foreground text-center text-base">
                        You must be logged in to view this section.
                    </p>
                    <Button asChild>
                        <Link href="/sign_in">Login</Link>
                    </Button>
                </div>
            );
        }
        return null;
    };

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <div className={`relative mx-auto mt-32 first:mt-0`}>
                    <div className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
                        <div className="ml-auto flex items-center gap-10 md:-mt-13">
                            <div className="flex items-center gap-2">
                                <Tabs
                                    defaultValue="preview"
                                    value={activeTab}
                                    onValueChange={(value) =>
                                        setActiveTab(
                                            value as
                                                | "preview"
                                                | "code"
                                                | "login"
                                                | "pro",
                                        )
                                    }
                                    className="w-full"
                                >
                                    <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-0.5 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs">
                                        <TabsTrigger
                                            value="preview"
                                            onClick={() =>
                                                setActiveTab("preview")
                                            }
                                        >
                                            Preview
                                        </TabsTrigger>
                                        {isProLoading ? (
                                            <div className="px-2 text-xs">
                                                ...
                                            </div>
                                        ) : (
                                            renderTabs()
                                        )}
                                    </TabsList>
                                </Tabs>
                                <Separator
                                    orientation="vertical"
                                    className="h-6!"
                                />
                                <TooltipTrigger>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="mr-4 size-6 rounded-sm px-4"
                                        asChild
                                    >
                                        <Link
                                            href={`/preview/${name}`}
                                            target="_blank"
                                        >
                                            <Fullscreen />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="bottom"
                                    className="px-1 py-1 text-xs"
                                >
                                    Fullscreen
                                </TooltipContent>
                            </div>
                        </div>
                    </div>

                    <React.Suspense
                        fallback={
                            <div className="flex min-h-[40vh] items-center justify-center gap-2">
                                <div className="loader"></div>
                                Loading component...
                            </div>
                        }
                    >
                        <div className="overflow- col-span-2 row-start-2 mx-auto mt-8 min-w-0 border border-r-0 border-l-0 border-dashed dark:border-neutral-700">
                            {renderContent()}
                        </div>
                    </React.Suspense>
                </div>
            </Tooltip>
        </TooltipProvider>
    );
}
