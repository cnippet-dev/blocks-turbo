import { useRef } from "react"
import { RiBardFill } from "@remixicon/react"
import { motion, useScroll, useTransform } from "motion/react"
import { CldImage } from "next-cloudinary"

import { DashedBorder } from "@/components/dashed-layout"

type SliderItem = {
  color: string
  src: string
}

const slider1: SliderItem[] = [
  {
    color: "#e3e5e7",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/hero-4.png",
  },
  {
    color: "#d6d7dc",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/pricing-3.png",
  },
  {
    color: "#e3e3e3",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/pricing-5.png",
  },
  {
    color: "#21242b",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/hero-3.png",
  },
  {
    color: "#21242b",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/blog-5.png",
  },
]

const slider2: SliderItem[] = [
  {
    color: "#d4e3ec",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/contact-1.png",
  },
  {
    color: "#e5e0e1",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/login-3.png",
  },
  {
    color: "#d7d4cf",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/login-2.png",
  },
  {
    color: "#e1dad6",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/hero-5.png",
  },
  {
    color: "#e1dad6",
    src: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1753946156/contact-1.png",
  },
]

export default function SlidingImages() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 450])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -450])

  return (
    <section ref={container} className="relative h-full">
      <DashedBorder />

      <div className="relative z-1 mx-auto flex max-w-7xl flex-col gap-[3vw] px-5">
        <div className="mt-32 max-w-7xl px-10">
          <div className="mb-16 space-y-4">
            <div className="flex w-fit items-center justify-start gap-1 rounded-full border px-3 py-1 text-xs">
              <RiBardFill className="size-3 text-blue-500" />
              <p>Made with Cnippet UI</p>
            </div>

            <motion.h1 className="font-rale text-4xl tracking-tight text-black md:text-4xl dark:text-white">
              Build your next project with Cnippet Blocks
            </motion.h1>

            <motion.p
              className="max-w-md text-sm text-gray-600 dark:text-gray-400"
              transition={{ delay: 0.2 }}
            >
              x The perfect starting point for your next web application or
              website.
            </motion.p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="dark:from-background absolute top-0 left-0 z-10 h-full w-40 bg-linear-to-r from-white" />
          <div className="dark:from-background absolute top-0 right-0 z-10 h-full w-40 bg-linear-to-l from-white" />

          <motion.div
            style={{ x: x1 }}
            className="relative left-[-60vw] flex w-[130vw] gap-[3vw]"
          >
            {slider1.map((project, index) => (
              <div
                key={index}
                className="flex h-[16vw] w-[50%] items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-800"
              >
                <div className="relative h-[90%] w-[90%]">
                  <CldImage
                    fill
                    alt="slider image"
                    src={`${project.src}`}
                    className="aspect-video rounded-xl object-cover shadow-md"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="relative left-[-10vw] mt-16 flex w-[130vw] gap-[3vw]"
          >
            {slider2.map((project, index) => (
              <div
                key={index}
                className="flex h-[16vw] w-[50%] items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-800"
              >
                <div className="relative h-[90%] w-[90%]">
                  <CldImage
                    fill
                    alt="slider image"
                    src={`${project.src}`}
                    className="aspect-video rounded-xl object-cover shadow-md"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
