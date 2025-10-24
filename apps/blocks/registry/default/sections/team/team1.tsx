"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Folder, Edit3, RotateCcw, X } from "lucide-react";

export default function Component() {
    const teamMembers = [
        {
            name: "Natalia Skinner",
            role: "Beam Researcher",
            image: "/placeholder.svg?height=120&width=120",
        },
        {
            name: "Fletch Skinner",
            role: "Tech Manager",
            image: "/placeholder.svg?height=120&width=120",
        },
        {
            name: "Patrick Stewart",
            role: "CEO - Founder",
            image: "/placeholder.svg?height=120&width=120",
        },
    ];

    const features = [
        {
            icon: Folder,
            title: "Centralized Storage for Teams",
        },
        {
            icon: Edit3,
            title: "Secure and Flexible Sharing Tools",
        },
        {
            icon: RotateCcw,
            title: "Secure and Flexible Sharing Tools",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-16">
            <div className="mx-auto max-w-6xl">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    {/* Blue Icon */}
                    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                        <Users className="h-8 w-8 text-white" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-5xl font-bold text-gray-900">
                        Creative Beam Members
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
                        Beam connects you with the most advanced tech solutions,
                        empowering seamless communication.
                    </p>
                </div>

                {/* Team Members Section */}
                <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="relative border-0 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                        >
                            {/* Close Button */}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-4 right-4 h-8 w-8 p-0 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                            >
                                <X className="h-4 w-4" />
                            </Button>

                            <CardContent className="p-8 text-center">
                                {/* Profile Image */}
                                <div className="mb-6">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="mx-auto h-24 w-24 rounded-full object-cover"
                                    />
                                </div>

                                {/* Member Info */}
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="font-medium text-gray-600">
                                    {member.role}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            {/* Feature Icon */}
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>

                            {/* Feature Title */}
                            <h3 className="text-lg leading-tight font-semibold text-gray-700">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
