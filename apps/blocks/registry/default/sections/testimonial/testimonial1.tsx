"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Quote } from "lucide-react";

export default function Component() {
    const testimonials = [
        {
            quote: "Browsing ancient artifacts with the historical context of the stories on each relic was a timeless experience. Antik represent each artifact is more than just an object.",
            tags: ["Transformative", "Timeless"],
            author: "Olivia Martinez",
            role: "Ancient Enthusiast",
            image: "/placeholder.svg?height=60&width=60",
            isLong: true,
        },
        {
            quote: "Insightful.\nTime Machine.",
            author: "John Parker",
            role: "Ancient Enthusiast",
            image: "/placeholder.svg?height=60&width=60",
            isLong: false,
        },
        {
            quote: "Innovative.\nHelpful.",
            author: "Clark Anderson",
            role: "Ancient Enthusiast",
            image: "/placeholder.svg?height=60&width=60",
            isLong: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-16">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    {/* Testimonial Badge */}
                    <div className="mb-8 flex items-center justify-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-gray-800">
                            <Quote className="h-2 w-2 text-white" />
                        </div>
                        <span className="font-medium text-gray-600">
                            Testimonial
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-8 text-5xl leading-tight font-bold text-gray-900 md:text-6xl">
                        Here's what
                        <br />
                        people are saying.
                    </h1>

                    {/* Read All Button */}
                    <Button className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                        Read all
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                {/* Testimonials Grid */}
                <div className="relative mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Large decorative quotation marks */}
                    <div className="pointer-events-none absolute -top-8 left-1/2 z-0 -translate-x-1/2 transform font-serif text-9xl text-gray-200 opacity-20">
                        "
                    </div>
                    <div className="pointer-events-none absolute right-1/4 bottom-0 z-0 font-serif text-9xl text-gray-200 opacity-20">
                        "
                    </div>

                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className={`relative z-10 border-0 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                                testimonial.isLong ? "lg:row-span-1" : ""
                            }`}
                        >
                            <CardContent className="p-8">
                                {/* Quote */}
                                <div className="mb-8">
                                    {testimonial.isLong ? (
                                        <p className="mb-6 text-lg leading-relaxed text-gray-800">
                                            "{testimonial.quote}"
                                        </p>
                                    ) : (
                                        <div className="text-2xl leading-tight font-semibold whitespace-pre-line text-gray-800">
                                            {testimonial.quote}
                                        </div>
                                    )}
                                </div>

                                {/* Tags (only for long testimonial) */}
                                {testimonial.tags && (
                                    <div className="mb-8 flex gap-2">
                                        {testimonial.tags.map(
                                            (tag, tagIndex) => (
                                                <Badge
                                                    key={tagIndex}
                                                    variant="secondary"
                                                    className="bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-100"
                                                >
                                                    {tag}
                                                </Badge>
                                            ),
                                        )}
                                    </div>
                                )}

                                {/* Author Info */}
                                <div className="mt-auto flex items-center gap-4">
                                    <img
                                        src={
                                            testimonial.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={testimonial.author}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2">
                    <div className="h-2 w-8 rounded-full bg-blue-600"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </div>
    );
}
