"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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
];

export default function Component() {
    return (
        <div className="w-full bg-white dark:bg-black px-4 py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-12">
                <div className="col-span-4 mr-8 space-y-4">
                    <Badge
                        variant="outline"
                        className="rounded-full border-dashed border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 px-2 py-0 text-sm text-gray-600 dark:text-gray-400"
                    >
                        Articles
                    </Badge>

                    <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 md:text-7xl">
                        Latest blog and articles
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Echo is a digital compliance, governance, and workforce
                        management.
                    </p>
                    <Button
                        type="submit"
                        className="shadow-7 cursor-pointer bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-gray-100 dark:text-black"
                    >
                        View more
                    </Button>
                </div>

                <div className="col-span-8 mb-12 grid gap-8 md:grid-cols-2">
                    {blogData.map((post) => (
                        <Card
                            key={post.id}
                            className="overflow-hidden rounded-2xl border-0 bg-gray-100 dark:bg-gray-900 p-1 shadow-none"
                        >
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
                                        <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20">
                                            {post.readTime}
                                        </Badge>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div>
                                        <Separator className="my-3" />
                                        <div className="flex items-center justify-between pt-2 text-xs text-gray-500 dark:text-gray-400">
                                            <Button
                                                size="sm"
                                                type="submit"
                                                className="shadow-7 cursor-pointer bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-gray-100 dark:text-black"
                                            >
                                                Read more
                                            </Button>
                                            <span>{post.publishedAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
