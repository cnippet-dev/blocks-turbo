"use client";

import * as React from "react";
import { Monitor, RotateCw, Smartphone, Tablet } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";

import { cn } from "@/lib/utils";
import {
    ResizablePanel,
    ResizablePanelGroup,
} from "@/registry/new-york-v4/ui/resizable";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Separator } from "@/registry/new-york-v4/ui/separator";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group";

interface PreviewScreenShiftProps {
    name: string;
    containerClassName?: string;
    iframeHeight?: string;
}

export function PreviewScreenShift({
    name,
    containerClassName,
    iframeHeight = "930px",
}: PreviewScreenShiftProps) {
    const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
    const [iframeKey, setIframeKey] = React.useState(0);

    return (
        <div className="relative min-h-screen w-full">
            {/* Floating Screen Shift Controls - Bottom Center */}
            <div className="fixed bottom-10 left-1/2 z-50 max-w-full -translate-x-1/2">
                <div className="w-fit items-center gap-1.5 rounded-full border bg-white p-1 shadow-md dark:bg-background">
                    <ToggleGroup
                        type="single"
                        defaultValue="100"
                        onValueChange={(value) => {
                            if (resizablePanelRef?.current && value) {
                                resizablePanelRef.current.resize(
                                    parseInt(value),
                                );
                            }
                        }}
                        className="gap-1 *:data-[slot=toggle-group-item]:size-10! *:data-[slot=toggle-group-item]:rounded-full!"
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
                            className="h-4!"
                        />
                        <Button
                            size="icon"
                            variant="ghost"
                            className="size-8 rounded-full"
                            title="Refresh Preview"
                            onClick={() => {
                                setIframeKey((k) => k + 1);
                            }}
                        >
                            <RotateCw />
                            <span className="sr-only">Refresh Preview</span>
                        </Button>
                    </ToggleGroup>
                </div>
            </div>

            {/* Resizable Panel Container */}
            <div
                className="relative w-full"
                style={
                    {
                        "--height": iframeHeight,
                    } as React.CSSProperties
                }
            >
                <div className="relative h-(--height) w-full">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 right-4 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"></div>

                    {/* Resizable Panel Group */}
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="after:bg-surface/50 relative z-10 h-full after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl"
                    >
                        <ResizablePanel
                            ref={resizablePanelRef}
                            className="bg-background relative mx-auto aspect-[4/2.5] overflow-hidden rounded-lg border md:aspect-auto md:rounded-xl"
                            defaultSize={100}
                            minSize={30}
                        >
                            <iframe
                                key={iframeKey}
                                src={`/view/${name}`}
                                height={parseInt(iframeHeight.replace("px", "")) || 930}
                                loading="lazy"
                                className={cn(
                                    "bg-background no-scrollbar relative z-20 w-full",
                                    containerClassName,
                                )}
                            />
                        </ResizablePanel>
                        <ResizablePanel defaultSize={0} minSize={0} />
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    );
}

