"use client";

import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Carousel, {
    Slider,
    SliderContainer,
    SliderDotButton,
    SliderNextButton,
    SliderPrevButton,
} from "@/components/motion/carousel";

interface BlogPost {
    id: string;
    title: string;
    description: string;
    readTime: string;
    publishedAt: string;
    image: string;
    tags?: string[];
}

const blogData: BlogPost[] = [
    {
        id: "1",
        title: "Every drafts and review matters",
        description:
            "Extract structured data from hundreds of documents at the same time.",
        readTime: "5 min read",
        publishedAt: "2 days ago",
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h6.jpg",
    },
    {
        id: "2",
        title: "Echo become a tech-driven legal solutions",
        description:
            "Extract structured data from hundreds of documents at the same time.",
        readTime: "10 min read",
        publishedAt: "3 days ago",
        tags: ["HR Advisory", "Law Solutions"],
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h8.jpg",
    },
    {
        id: "3",
        title: "Echo: The new legal workspace",
        description:
            "Extract structured data from hundreds of documents at the same time.",
        readTime: "8 min read",
        publishedAt: "4 days ago",
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h10.jpg",
    },
    {
        id: "4",
        title: "Digital transformation in legal services",
        description:
            "How technology is reshaping the legal industry and improving efficiency.",
        readTime: "12 min read",
        publishedAt: "1 week ago",
        tags: ["Digital", "Transformation"],
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h6.jpg",
    },
    {
        id: "5",
        title: "Compliance automation best practices",
        description:
            "Learn the essential strategies for automating compliance processes effectively.",
        readTime: "7 min read",
        publishedAt: "1 week ago",
        tags: ["Compliance", "Automation"],
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h8.jpg",
    },
    {
        id: "6",
        title: "Future of workforce management",
        description:
            "Exploring innovative approaches to managing modern workforces.",
        readTime: "9 min read",
        publishedAt: "2 weeks ago",
        tags: ["Workforce", "Management"],
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h10.jpg",
    },
];

export default function Component() {
    return (
        <>
            <div className="w-full bg-white px-4 py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-12">
                    <div className="col-span-3 mr-8 space-y-4">
                        <Badge
                            variant="outline"
                            className="rounded-full border-dashed border-gray-400 bg-gray-100 px-2 py-0 text-sm text-gray-600"
                        >
                            Articles
                        </Badge>

                        <h1 className="text-3xl font-medium text-gray-900 md:text-7xl">
                            Latest blog and articles
                        </h1>
                        <p className="text-gray-600">
                            Echo is a digital compliance, governance, and
                            workforce management.
                        </p>
                        <Button
                            type="submit"
                            className="shadow-7 cursor-pointer bg-black hover:bg-black/80"
                        >
                            View more
                        </Button>
                    </div>

                    <div className="relative col-span-9 px-16">
                        <Carousel options={{ loop: true }} isAutoPlay={false}>
                            <SliderContainer>
                                {blogData.map((post) => (
                                    <Slider
                                        key={post.id}
                                        className="w-full px-2 md:w-1/2 lg:w-1/2"
                                    >
                                        <Card className="h-full overflow-hidden rounded-2xl border-0 bg-white p-1 shadow-none">
                                            <div className="flex h-full flex-col">
                                                <div className="mb-4">
                                                    <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-t-2xl">
                                                        <Image
                                                            src={post.image}
                                                            alt={post.title}
                                                            width={1920}
                                                            height={1080}
                                                            className="aspect-video h-full w-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="mb-4 flex h-full flex-col justify-between gap-2 px-4">
                                                    <div className="space-y-2">
                                                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                                                            {post.readTime}
                                                        </Badge>
                                                        <h3 className="text-xl font-medium text-gray-900">
                                                            {post.title}
                                                        </h3>
                                                        <p className="text-sm leading-relaxed text-gray-600">
                                                            {post.description}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <Separator className="my-3" />
                                                        <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
                                                            <Button
                                                                size="sm"
                                                                type="submit"
                                                                className="shadow-7 cursor-pointer bg-black hover:bg-black/80"
                                                            >
                                                                Read more
                                                            </Button>
                                                            <span>
                                                                {
                                                                    post.publishedAt
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </Slider>
                                ))}
                            </SliderContainer>

                            <div className="absolute top-0 left-12 h-full w-20 bg-linear-to-r from-white" />
                            <div className="absolute top-0 right-12 h-full w-20 bg-linear-to-l from-white" />

                            <SliderPrevButton className="absolute top-[50%] left-4 rounded-full border-2 bg-white/90 p-2 shadow-lg backdrop-blur-sm hover:bg-white disabled:opacity-20">
                                <RiArrowLeftSLine className="h-6 w-6 text-gray-700" />
                            </SliderPrevButton>

                            <SliderNextButton className="absolute top-[50%] right-4 rounded-full border-2 bg-white/90 p-2 shadow-lg backdrop-blur-sm hover:bg-white disabled:opacity-20">
                                <RiArrowRightSLine className="h-6 w-6 text-gray-700" />
                            </SliderNextButton>

                            <div className="flex justify-center py-4">
                                <SliderDotButton />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}
