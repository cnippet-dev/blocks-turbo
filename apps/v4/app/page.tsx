"use client"

import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("@/components/shared/navbar"))
const Footer = dynamic(() => import("@/components/shared/footer"))

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}
