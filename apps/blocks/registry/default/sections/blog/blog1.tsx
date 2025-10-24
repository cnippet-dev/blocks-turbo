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
    {
        id: "3",
        title: "Echo: The new legal workspace",
        description:
            "Extract structured data from hundreds of documents at the same time.",
        readTime: "8 min read",
        publishedAt: "4 days ago",
        image: "https://res.cloudinary.com/dcxm3ccir/image/upload/v1741613286/h10.jpg",
    },
];

export default function Component() {
    return (
        <div className="relative w-full bg-white dark:bg-black px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex justify-center">
                    <Badge
                        variant="outline"
                        className="rounded-md border-dashed border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400"
                    >
                        Articles
                    </Badge>
                </div>

                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-medium text-gray-900 dark:text-gray-100 md:text-6xl">
                        Read latest blog
                        <br />
                        and articles
                    </h1>
                </div>

                <div className="mb-12 grid gap-8 md:grid-cols-3">
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
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                            {post.description}
                                        </p>
                                    </div>
                                    <div>
                                        <Separator className="my-2" />
                                        <div className="flex items-center justify-between pt-2 text-xs text-gray-500 dark:text-gray-400">
                                            <span>{post.readTime}</span>
                                            <span>{post.publishedAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button
                        type="submit"
                        className="shadow-7 cursor-pointer bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-gray-100 dark:text-black"
                    >
                        View more
                    </Button>
                </div>
            </div>
        </div>
    );
}
