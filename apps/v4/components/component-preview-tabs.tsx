"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export function ComponentPreviewTabs({
  className,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
}) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview")

  return (
    <div className={cn("relative mt-4 mb-12", className)} {...props}>
      <Tabs value={tab} onValueChange={(v) => setTab(v as "preview" | "code")}>
      <div className="mb-2 flex items-center justify-between">
        <TabsList
          className={cn(
            "grid h-8 grid-cols-2 items-center rounded-md p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-xs",
            hideCode && "grid-cols-1"
          )}
        >
          <TabsTrigger value="preview">Preview</TabsTrigger>
          {!hideCode && <TabsTrigger value="code">Code</TabsTrigger>}
        </TabsList>
      </div>

      <TabsContent value="preview">
        <div data-slot="preview">
          <div
            data-align={align}
            className={cn(
              "preview flex w-full justify-center rounded-none border-y data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start",
              chromeLessOnMobile ? "sm:p-10" : "h-full p-10"
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
            className="overflow-hidden rounded-lg border **:data-rehype-pretty-code-figure:m-0! **:data-rehype-pretty-code-figure:rounded-t-none **:data-rehype-pretty-code-figure:border-t [&_pre]:max-h-[400px]"
          >
            {source}
          </div>
        </TabsContent>
      )}
      </Tabs>
    </div>
  )
}
