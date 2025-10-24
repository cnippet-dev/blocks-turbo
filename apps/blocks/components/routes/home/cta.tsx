import { RiArrowRightLine } from "@remixicon/react";

const Cta = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-[1536px] border-t-0 border-b bg-black pl-0 text-white md:pl-30 dark:border-neutral-800 dark:bg-blue-700">
                <div className="grid grid-cols-1 divide-x md:grid-cols-6 dark:divide-neutral-800">
                    <div className="px-4 py-28 md:col-span-5 md:px-0">
                        <h2 className="text-2xl leading-tight font-normal tracking-tight md:text-5xl">
                            Start Building with Ready-Made Sections, Pages, and
                            Templates
                        </h2>
                        <p className="mt-4 max-w-2xl text-gray-100">
                            block.cnippet.site gives you instant access to a
                            growing library of website sections, full pages, and
                            complete templates. Build your next project faster,
                            with SEO-friendly and customizable blocks for every
                            need.
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center bg-white dark:bg-black">
                        <RiArrowRightLine className="text-blue-800" size={60} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;
