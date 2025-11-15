"use client";

import * as React from "react";
import Link from "next/link";
import { Fullscreen, RotateCw } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";
import { ToggleGroup } from "@/registry/new-york-v4/ui/toggle-group";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function ComponentPreviewTabs({
    className,
    align = "center",
    hideCode = false,
    chromeLessOnMobile = false,
    component,
    source,
    name,
    setIframeKey,
    ...props
}: React.ComponentProps<"div"> & {
    align?: "center" | "start" | "end";
    hideCode?: boolean;
    chromeLessOnMobile?: boolean;
    component: React.ReactNode;
    source: React.ReactNode;
    name?: string;
    setIframeKey?: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [tab, setTab] = React.useState<"preview" | "code">("preview");

    return (
        <div className={cn("relative mt-4 mb-12", className)} {...props}>
            <Tabs
                value={tab}
                onValueChange={(v) => setTab(v as "preview" | "code")}
            >
                <div className="mb-2 flex items-center justify-between">
                    <TabsList
                        className={cn(
                            "grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs",
                            hideCode && "grid-cols-1"
                        )}
                    >
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        {!hideCode && (
                            <TabsTrigger value="code">Code</TabsTrigger>
                        )}
                    </TabsList>

                    <div className="ml-auto flex items-center gap-2">
                        <div className="h-8 items-center gap-1.5 rounded-md border p-1 shadow-none">
                            <ToggleGroup
                                type="single"
                                defaultValue="100"
                                // onValueChange={(value) => {
                                //   setView("preview")
                                //   if (resizablePanelRef?.current) {
                                //     resizablePanelRef.current.resize(parseInt(value))
                                //   }
                                // }}
                                className="gap-1 *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
                            >
                                {name && (
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="size-6 rounded-sm p-0"
                                        asChild
                                        title="Open in New Tab"
                                    >
                                        <Link
                                            href={`/preview/${name}`}
                                            target="_blank"
                                        >
                                            <span className="sr-only">
                                                Open in New Tab
                                            </span>
                                            <Fullscreen />
                                        </Link>
                                    </Button>
                                )}
                                {name && (
                                    <>
                                        <Separator
                                            orientation="vertical"
                                            className="h-4!"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="size-6 rounded-sm p-0"
                                            title="Refresh Preview"
                                            onClick={() => {
                                                if (setIframeKey) {
                                                    setIframeKey((k) => k + 1);
                                                }
                                            }}
                                        >
                                            <RotateCw />
                                            <span className="sr-only">
                                                Refresh Preview
                                            </span>
                                        </Button>
                                    </>
                                )}
                            </ToggleGroup>
                        </div>
                        <Separator
                            orientation="vertical"
                            className="mx-1 h-4!"
                        />
                    </div>
                </div>

                <TabsContent value="preview">
                    <div data-slot="preview">
                        <div
                            data-align={align}
                            className={cn(
                                "preview flex w-full justify-center rounded-none border-y data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
                                chromeLessOnMobile ? "sm:p-0" : "h-full p-0"
                            )}
                        >
                            {component}
                        </div>
                    </div>
                </TabsContent>

                {!hideCode && (
                    <TabsContent value="code">
                        <div
                            data-slot="code"
                            className="overflow-hidden rounded-none border-y **:data-rehype-pretty-code-figure:m-0! **:data-rehype-pretty-code-figure:rounded-t-none [&_pre]:max-h-[500px]"
                        >
                            {source}
                        </div>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    );
}
