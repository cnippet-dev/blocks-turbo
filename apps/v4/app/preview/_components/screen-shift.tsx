"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Monitor, RotateCw, Smartphone, Tablet } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ImperativePanelHandle } from "react-resizable-panels";

import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SectionPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
}

export default function ScreenShift({ name }: SectionPreviewProps) {
    const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
    const [iframeKey, setIframeKey] = React.useState(0);

    const contextValue = React.useMemo(
        () => ({
            item: { name },
            iframeKey,
            setIframeKey,
            resizablePanelRef,
        }),
        [name, iframeKey],
    );

    return (
        <BlockViewerContext.Provider value={contextValue}>
            <div className={`relative`}>
                <div className="fixed bottom-10 left-1/2 z-50 max-w-full -translate-x-1/2">
                    <div className="w-fit items-center gap-1.5 rounded-full border bg-white p-1 shadow-md">
                        <ToggleGroup
                            type="single"
                            defaultValue="100"
                            onValueChange={(value) => {
                                if (resizablePanelRef?.current) {
                                    resizablePanelRef.current.resize(
                                        parseInt(value),
                                    );
                                }
                            }}
                            className="gap-1 *:data-[slot=toggle-group-item]:!size-10 *:data-[slot=toggle-group-item]:!rounded-full"
                        >
                            <ToggleGroupItem value="100" title="Desktop">
                                <Monitor />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="60" title="Tablet">
                                <Tablet />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="30" title="Mobile">
                                <Smartphone />
                            </ToggleGroupItem>
                            <Separator
                                orientation="vertical"
                                className="!h-4"
                            />
                            <Button
                                size="icon"
                                variant="ghost"
                                className="size-8 rounded-full"
                                title="Refresh Preview"
                                onClick={() => {
                                    if (setIframeKey) {
                                        setIframeKey((k) => k + 1);
                                    }
                                }}
                            >
                                <RotateCw />
                                <span className="sr-only">Refresh Preview</span>
                            </Button>
                        </ToggleGroup>
                    </div>
                </div>

                <React.Suspense
                    fallback={
                        <div className="text-muted-foreground flex items-center text-sm">
                            Loading...
                        </div>
                    }
                >
                    <div className="mx-auto">
                        <BlockViewerView />
                    </div>
                </React.Suspense>
            </div>
        </BlockViewerContext.Provider>
    );
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlockViewerContext = React.createContext<any | null>(null);

function useBlockViewer() {
    const context = React.useContext(BlockViewerContext);
    if (!context) {
        throw new Error(
            "useBlockViewer must be used within a BlockViewerProvider.",
        );
    }
    return context;
}

function BlockViewerIframe({ className }: { className?: string }) {
    const { item, iframeKey } = useBlockViewer();

    return (
        <iframe
            key={iframeKey}
            src={`/view/${item.name}`}
            height={item.meta?.iframeHeight ?? 930}
            loading="lazy"
            className={cn(
                "bg-background no-scrollbar relative z-20 mx-auto w-full",
                className,
            )}
        />
    );
}

function BlockViewerView() {
    const { resizablePanelRef } = useBlockViewer();

    return (
        <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-[var(--height)] lg:flex">
            <div className="relative mx-auto grid w-full gap-4">
                <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"></div>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="after:bg-surface/50 relative z-10 mx-auto after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl"
                >
                    <ResizablePanel
                        ref={resizablePanelRef}
                        className="bg-background relative mx-auto overflow-hidden border md:aspect-auto"
                        defaultSize={100}
                        minSize={30}
                    >
                        <BlockViewerIframe />
                    </ResizablePanel>
                    {/* <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" /> */}
                    <ResizablePanel defaultSize={0} minSize={0} />
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
