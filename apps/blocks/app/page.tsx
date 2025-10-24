"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";

const Navbar = dynamic(() => import("@/components/shared/navbar"));
const Hero = dynamic(() => import("@/components/routes/home/hero"));
// const Features = dynamic(() => import("@/components/routes/home/features"));
// const Faq = dynamic(() => import("@/components/routes/home/faq"));
const Footer = dynamic(() => import("@/components/shared/footer"));
// const Cta = dynamic(() => import("@/components/routes/home/cta"));
const Sections = dynamic(() => import("@/components/shared/all-sections"));
const SlidingImages = dynamic(() => import("@/components/routes/home/sliding"));

const CursorPointer = dynamic(() => import("@/components/cursor-pointer"));

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const componentsRef = useRef<HTMLDivElement>(null);

    return (
        <ReactLenis root>
            <div className="">
                <CursorPointer
                    targets={[
                        { id: "hero", ref: heroRef },
                        { id: "components", ref: componentsRef },
                    ]}
                />

                <Navbar />
                <main className="dark:bg-background">
                    <Hero ref={heroRef} />
                    <Sections ref={componentsRef} count={15} />
                    {/* <Features /> */}

                    <SlidingImages />
                    {/* <Faq /> */}
                    {/* <Cta /> */}
                </main>
                <Footer />
            </div>
        </ReactLenis>
    );
}
