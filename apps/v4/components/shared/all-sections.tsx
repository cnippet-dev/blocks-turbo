"use client"

import React, { forwardRef } from "react"
import { fadeUp } from "cnippet-aos"
import { motion } from "motion/react"
import { CldImage } from "next-cloudinary"

import { sections as sectionsConfig } from "@/config/global"

import { DashedBorder } from "../dashed-layout"

interface Section {
  name: string
  slug: string
  thumbnail: string
  number: string
}

interface SectionsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections?: any[]
}

const Sections = forwardRef<HTMLDivElement, SectionsProps>(
  ({ count, sections }, ref) => {
    const components =
      sections ??
      Object.values(sectionsConfig).filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any): item is Section => item.type === "registry:section"
      )

    return (
      <>
        <section className="relative h-full">
          <DashedBorder />

          <div className="mx-auto max-w-7xl px-5">
            <div className="max-w-7xl px-10">
              <div className="mb-16 space-y-4">
                <motion.h1
                  {...fadeUp({
                    delay: 0.2,
                    duration: 0.6,
                    scroll: true,
                  })}
                  className="font-rale text-4xl font-normal tracking-tight text-black md:text-4xl dark:text-white"
                >
                  Explore wide range of Sections
                </motion.h1>

                <motion.p
                  className="max-w-xl text-gray-600 dark:text-gray-400"
                  {...fadeUp({
                    delay: 0.6,
                    duration: 0.6,
                    y: 20,
                    scroll: true,
                  })}
                >
                  A library of 500+ professionally designed, expertly crafted
                  component examples you can drop into your Tailwind projects
                  and customize to your heart&apos;s content.
                </motion.p>
              </div>
            </div>

            <div className="w-full px-1 pb-10">
              <motion.div
                ref={ref}
                className="mx-auto grid grid-cols-1 md:grid-cols-4"
                initial="hidden"
                animate="visible"
              >
                {components?.slice(0, count).map((component, index) => {
                  const section = component as Section

                  return (
                    <motion.div
                      key={index}
                      className={`dark:bg-background relative overflow-visible border-dashed border-gray-400/50 bg-white p-4 transition-shadow duration-300 ${index !== 3 && index !== 7 && index !== 11 ? "border-r" : ""} ${index <= 11 ? "border-b" : ""}`}
                      {...fadeUp({
                        delay: 0.3 + index * 0.1,
                        y: 20,
                        duration: 0.6,
                        scroll: true,
                      })}
                      whileTap={{ scale: 0.98 }}
                    >
                      {index !== 0 &&
                        index !== 4 &&
                        index !== 8 &&
                        index !== 12 &&
                        index !== 13 &&
                        index !== 14 && (
                          <div
                            className="dot-center hidden md:block"
                            data-framer-name="Ellipsis"
                          ></div>
                        )}
                      <motion.div
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: index * 0.1 + 0.5,
                        }}
                      >
                        {index !== 0 &&
                          index !== 4 &&
                          index !== 8 &&
                          index < 12 && (
                            <div
                              className="cnippet-dot3"
                              data-framer-name="Ellipsis"
                            ></div>
                          )}

                        <div className="flex-1">
                          <CldImage
                            width={960}
                            height={600}
                            src={`https://res.cloudinary.com/dcxm3ccir/image/upload/v1753941711/${section.name}.png`}
                            sizes="100vw"
                            alt="Description of my image"
                            className="from-background w-full rounded-2xl bg-white bg-linear-to-t dark:bg-neutral-800"
                          />

                          <div className="flex flex-col items-start p-4">
                            <motion.a
                              href={`/blocks/${section.name}`}
                              className="font-medium text-black/80 capitalize dark:text-white"
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.1 + 0.6,
                              }}
                            >
                              {component.name}
                              <span className="absolute inset-0"></span>
                            </motion.a>
                            <motion.p
                              className="text-sm text-gray-400"
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.1 + 0.7,
                              }}
                            >
                              {section.number} components
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </>
    )
  }
)

Sections.displayName = "Sections"

export default Sections
