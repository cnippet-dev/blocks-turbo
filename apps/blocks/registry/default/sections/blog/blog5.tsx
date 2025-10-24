import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Component() {
    return (
        <section className="bg-white px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <p className="mb-4 text-sm font-medium tracking-wider text-gray-900 uppercase">
                        CAPTION
                    </p>
                    <h2 className="text-4xl font-medium text-gray-900 md:text-6xl">
                        Insights
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="border-0 bg-white shadow-none transition-shadow hover:shadow-none">
                        <div className="p-0">
                            <div className="relative mb-6">
                                <img
                                    src={
                                        "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h5.jpg"
                                    }
                                    alt=""
                                    className="aspect-square h-80 w-full rounded-xl object-cover"
                                />
                                <Badge
                                    variant="secondary"
                                    className="absolute top-4 left-4 rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-800 uppercase"
                                >
                                    #Branding
                                </Badge>
                            </div>

                            <div className="">
                                <h3 className="mb-4 text-xl leading-tight font-medium text-gray-900 md:text-3xl">
                                    A Beginner's Guide to Webflow to Development
                                </h3>

                                <p className="mb-6 leading-relaxed text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam et lacinia mi.
                                </p>

                                <div className="flex items-center justify-between">
                                    <Link
                                        href={"#"}
                                        className="group relative flex items-center overflow-hidden text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                                    >
                                        <span className="mr-2 overflow-hidden rounded-full border p-3 transition-colors duration-300 ease-in group-hover:bg-black group-hover:text-white">
                                            <ArrowRight className="h-4 w-4 translate-x-0 opacity-100 transition-all duration-500 ease-in group-hover:translate-x-8 group-hover:opacity-0" />
                                            <ArrowRight className="absolute top-1/2 -left-5 h-5 w-5 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-3" />
                                        </span>
                                        Read more
                                    </Link>
                                    <span className="flex items-center gap-3 text-sm text-gray-500">
                                        Dec 22, 2025
                                        <span className="w-10 border-t border-gray-400" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-0 bg-white shadow-none transition-shadow hover:shadow-none">
                        <div className="flex h-full flex-col p-0">
                            <div className="relative mb-6">
                                <img
                                    src={
                                        "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h9.jpg"
                                    }
                                    alt=""
                                    className="aspect-square h-44 w-full rounded-xl object-cover"
                                />
                                <Badge
                                    variant="secondary"
                                    className="absolute top-4 left-4 rounded-md bg-white px-3 py-1 text-xs font-medium text-gray-800 uppercase"
                                >
                                    #Branding
                                </Badge>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl leading-tight font-medium text-gray-900 md:text-2xl">
                                    A Beginner's Guide to Webflow to Development
                                </h3>

                                <p className="mb-6 leading-relaxed text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam et lacinia mi.
                                </p>

                                <div className="flex items-center justify-between">
                                    <Link
                                        href={"#"}
                                        className="group relative flex items-center overflow-hidden text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                                    >
                                        <span className="mr-2 overflow-hidden rounded-full border p-3 transition-colors duration-300 ease-in group-hover:bg-black group-hover:text-white">
                                            <ArrowRight className="h-4 w-4 translate-x-0 opacity-100 transition-all duration-500 ease-in group-hover:translate-x-8 group-hover:opacity-0" />
                                            <ArrowRight className="absolute top-1/2 -left-5 h-5 w-5 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-3" />
                                        </span>
                                        Read more
                                    </Link>
                                    <span className="flex items-center gap-3 text-sm text-gray-500">
                                        Dec 22, 2025
                                        <span className="w-10 border-t border-gray-400" />
                                    </span>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="mt-auto ml-auto w-fit cursor-pointer rounded-full px-12 py-8 text-lg font-medium shadow-none hover:bg-black hover:text-white"
                            >
                                Read more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
