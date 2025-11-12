"use client"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function DashedBorderWithTopDots() {
  const pathname = usePathname()

  return (
    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
      <div
        className="absolute top-3.5 left-0 z-0 h-px w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
        data-border="true"
        data-framer-name="Top divider"
      ></div>

      <div
         className={cn(
          "absolute top-2 left-1/2 z-0 h-full w-full flex-auto -translate-x-1/2 overflow-visible px-10",
          pathname.includes("/blocks") || pathname.includes("/pages")
            ? "max-w-full xl:max-w-[97%]"
            : "max-w-7xl"
        )}
        data-framer-name="Vertical lines"
      >
        <div
          className="absolute right-2 bottom-0 z-0 h-full w-px border-r border-dashed border-gray-200 md:right-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Right line"
        >
          <div
            className="dot-tr"
            data-border="true"
            data-framer-name="Ellipsis"
          ></div>
        </div>
        <div
          className="absolute bottom-0 left-2 z-0 h-full w-px border-r border-dashed border-gray-200 md:left-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Left line"
        >
          <div
            className="dot-tl"
            data-border="true"
            data-framer-name="Ellipsis"
          ></div>
        </div>
      </div>
    </div>
  )
}

export function DashedBorderWithTopDots2() {
  return (
    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
      <div
        className="absolute top-20 left-0 z-0 h-px w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
        data-border="true"
        data-framer-name="Top divider"
      ></div>

      <div
        className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
        data-framer-name="Vertical lines"
      >
        <div
          className="absolute right-2 bottom-0 z-0 h-full w-px border-r border-dashed border-gray-200 md:right-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Right line"
        >
          <div
            className="dot-tr top-[4.65rem] shadow-gray-100"
            data-border="true"
            data-framer-name="Ellipsis"
          ></div>
        </div>
        <div
          className="absolute bottom-0 left-2 z-0 h-full w-px border-r border-dashed border-gray-200 md:left-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Left line"
        >
          <div
            className="dot-tl top-[4.65rem]"
            data-border="true"
            data-framer-name="Ellipsis"
          ></div>
        </div>
      </div>
    </div>
  )
}
export function DashedBorder() {
  const pathname = usePathname()

  return (
    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
      <div
        className={cn(
          "absolute top-0 left-1/2 z-0 h-full w-full flex-auto -translate-x-1/2 overflow-visible px-10",
          pathname.includes("/blocks") || pathname.includes("/pages")
            ? "max-w-full xl:max-w-[97%]"
            : "max-w-7xl"
        )}
        data-framer-name="Vertical lines"
      >
        <div
          className="absolute right-2 bottom-0 z-0 h-full w-px border-r border-dashed border-gray-200 md:right-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Right line"
        ></div>
        <div
          className="absolute bottom-0 left-2 z-0 h-full w-px border-r border-dashed border-gray-200 md:left-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Left line"
        ></div>
      </div>
    </div>
  )
}

export function DashedBorderAll() {
  return (
    <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
      <div
        className="absolute top-10 left-0 z-0 h-px w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
        data-border="true"
        data-framer-name="Top divider"
      ></div>

      <div
        className="absolute top-0 left-1/2 z-10 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
        data-framer-name="Vertical lines"
      >
        <div
          className="absolute top-0 right-2 bottom-0 z-0 h-full w-px border-r border-dashed border-gray-200 md:right-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Right line"
        ></div>
        <div
          className="absolute bottom-0 left-2 z-0 h-full w-px border-r border-dashed border-gray-200 md:left-4 dark:border-neutral-700"
          data-border="true"
          data-framer-name="Left line"
        ></div>
      </div>

      <div
        className="absolute bottom-10 left-0 z-0 h-px w-full flex-auto overflow-hidden border-t border-dashed border-gray-200 dark:border-neutral-700"
        data-border="true"
        data-framer-name="Top divider"
      ></div>
    </div>
  )
}
