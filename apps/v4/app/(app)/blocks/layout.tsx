import { DashedBorderWithTopDots } from "@/components/dashed-layout"
import Navbar from "@/components/shared/navbar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <Navbar />
      <div className="relative h-full w-full">
       

        <DashedBorderWithTopDots />
        {children}
      </div>
    </div>
  )
}
