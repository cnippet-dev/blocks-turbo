"use client";

import * as React from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";

import { cn } from "@/lib/utils";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/registry/new-york-v4/ui/resizable";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group";

interface ResizableViewerProps {
    children: React.ReactNode;
    containerClassName?: string;
}

export function ResizableViewer({
    children,
    containerClassName,
}: ResizableViewerProps) {
    const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);

    return (
        <div className="relative min-h-screen w-full">
            {/* Floating Toggle Group - Middle Bottom */}
            <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
                <div className="flex h-10 items-center gap-1.5 rounded-lg border bg-background/95 p-1 shadow-lg backdrop-blur supports-backdrop-filter:bg-background/60">
                    <ToggleGroup
                        type="single"
                        defaultValue="100"
                        onValueChange={(value) => {
                            if (resizablePanelRef?.current && value) {
                                resizablePanelRef.current.resize(
                                    parseInt(value)
                                );
                            }
                        }}
                        className="gap-1 *:data-[slot=toggle-group-item]:size-7! *:data-[slot=toggle-group-item]:rounded-md!"
                    >
                        <ToggleGroupItem value="100" title="Desktop">
                            <Monitor className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="60" title="Tablet">
                            <Tablet className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="30" title="Mobile">
                            <Smartphone className="h-4 w-4" />
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>

            {/* Resizable Panel Container */}
            <div className="relative h-screen w-full">
                <div className="relative h-full w-full">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[radial-gradient(#404040_1px,transparent_1px)]"></div>

                    {/* Resizable Panel Group */}
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="relative z-10 h-full w-full"
                    >
                        <ResizablePanel
                            ref={resizablePanelRef}
                            className="bg-background relative overflow-hidden"
                            defaultSize={100}
                            minSize={30}
                        >
                            <div
                                className={cn(
                                    "h-full w-full overflow-auto",
                                    containerClassName
                                )}
                            >
                                {children}
                            </div>
                        </ResizablePanel>
                        <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" />
                        <ResizablePanel defaultSize={0} minSize={0} />
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    );
}

