import { RiArrowRightLine } from "@remixicon/react";
import Link from "next/link";

export default function Component() {
    const licenceItems = [
        {
            title: "Licence",
            description: "Read before using our products. Happy creating!",
            href: "/legal/licence",
        },
        {
            title: "Terms of Service",
            description: "Understand usage guidelines and product details",
            href: "/legal/terms",
        },
        {
            title: "Privacy Policy",
            description:
                "Your data security is our priority learn about how we use it.",
            href: "/legal/privacy",
        },
        {
            title: "Affiliate Notice",
            description: "Learn about partnerships that support our offerings",
            href: "/legal/affiliate",
        },
        {
            title: "Accessibility Notice",
            description: "Embracing inclusivity for all users. Learn more now.",
            href: "/legal/accessibility",
        },
    ];

    return (
        <div className="relative">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-0 flex w-full overflow-visible">
                <div
                    className="absolute top-0 left-1/2 z-0 h-full w-full max-w-7xl flex-auto -translate-x-1/2 overflow-visible"
                    data-framer-name="Vertical lines"
                >
                    <div
                        className="absolute top-0 right-0 bottom-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                        data-border="true"
                        data-framer-name="Right line"
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 z-0 h-full w-[1px] border-r border-dashed border-gray-200 dark:border-neutral-700"
                        data-border="true"
                        data-framer-name="Left line"
                    ></div>
                </div>
            </div>

            <div className="mx-auto max-w-2xl py-20">
                <div className="text-center">
                    <h1 className="mb-4 text-5xl font-medium tracking-tight">
                        Cnippet Licences
                    </h1>
                    <p className="text-gray-700 dark:text-gray-400">
                        Have a specific question? Contact us at
                        support@cnippet.dev
                    </p>
                </div>

                {/* Licence Cards */}
                <div className="space-y-4 px-10 pt-16">
                    {licenceItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group cursor-pointer"
                        >
                            <div className="mt-4 rounded-xl border p-4 dark:border-neutral-800">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-lg font-medium tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                    <RiArrowRightLine className="ml-4 h-5 w-5 flex-shrink-0 text-gray-200 transition-colors group-hover:text-gray-600" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
