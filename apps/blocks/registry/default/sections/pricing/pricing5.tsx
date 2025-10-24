"use client";
import { useState } from "react";
import { Zap, Clock, Download, Folder, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

const pricingPlans = [
    {
        id: "basic",
        name: "Basic Plan",
        price: "$99",
        period: "/ Month",
        description: "For simple desktop apps and solo developers.",
        buttonText: "Get Started With Basic",
        featured: false,
    },
    {
        id: "pro",
        name: "Pro Plan",
        price: "$249",
        period: "/ Month",
        description: "For simple desktop apps and solo developers.",
        buttonText: "Get Started With Premium",
        featured: true,
    },
    {
        id: "platinum",
        name: "Platinum Plan",
        price: "$750",
        period: "/ Month",
        description: "For simple desktop apps and solo developers.",
        buttonText: "Get Started With Platinum",
        featured: false,
    },
];

const features = [
    {
        icon: Clock,
        text: "30 day",
        subtext: "build retention",
    },
    {
        icon: Download,
        text: "5,000",
        subtext: "downloads/month",
    },
    {
        icon: Folder,
        text: "Native module rebuilding",
        subtext: "",
    },
    {
        icon: Shield,
        text: "Build validation checks",
        subtext: "",
    },
];

export default function BeamPricingSection() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleGetStarted = (planId: string, planName: string) => {
        setSelectedPlan(planId);
        console.log(`Selected ${planName}`);
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <div className="mb-16 text-center">
                <div className="mb-6 flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5 text-gray-600" />
                    <span className="font-medium text-gray-600">
                        Beam Our Pricing
                    </span>
                </div>
                <h1 className="mb-4 text-4xl font-medium text-gray-900 md:text-5xl">
                    Beam Pricing Plans
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipiscing.
                </p>
            </div>

            <div className="mx-auto mb-16 grid max-w-6xl gap-8 px-4 md:grid-cols-3">
                {pricingPlans.map((plan) => (
                    <Card
                        key={plan.id}
                        className={`relative rounded-3xl border border-none p-1 shadow-none transition-shadow hover:shadow-md ${
                            plan.featured
                                ? "border-gray-800 bg-black text-white"
                                : "border-gray-200 bg-gray-100"
                        }`}
                    >
                        <CardHeader
                            className={`rounded-3xl p-6 text-left ${plan.featured ? "bg-neutral-800" : "bg-white"}`}
                        >
                            <h3
                                className={`mb-4 text-2xl font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}
                            >
                                {plan.name}
                            </h3>
                            <p
                                className={`w-2/3 text-sm ${plan.featured ? "text-gray-300" : "text-gray-600"}`}
                            >
                                {plan.description}
                            </p>
                        </CardHeader>

                        <CardContent className="mt-5">
                            <span
                                className={`text-5xl font-medium ${plan.featured ? "text-white" : "text-gray-900"}`}
                            >
                                {plan.price}
                            </span>
                            <span
                                className={`ml-1 text-lg ${plan.featured ? "text-gray-300" : "text-gray-600"}`}
                            >
                                {plan.period}
                            </span>
                            <Button
                                className={`mt-5 w-full rounded-lg px-6 py-3 font-medium transition-colors ${
                                    plan.featured
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-gray-900 text-white hover:bg-gray-800"
                                }`}
                                onClick={() =>
                                    handleGetStarted(plan.id, plan.name)
                                }
                            >
                                {plan.buttonText}
                            </Button>
                            <div
                                key={`features-${plan.id}`}
                                className="space-y-6"
                            >
                                <div
                                    className={`mt-4 border-t pt-4 ${plan.featured ? "border-neutral-700" : "border-neutral-300"}`}
                                >
                                    <h4 className="mb-6 text-sm font-medium tracking-wide text-neutral-500 uppercase">
                                        WEEKLY SENDS
                                    </h4>
                                </div>
                                <div className="space-y-2">
                                    {features.map((feature, index) => {
                                        const IconComponent = feature.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3"
                                            >
                                                <div
                                                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${plan.featured ? "bg-neutral-700" : "bg-white shadow-sm"}`}
                                                >
                                                    <IconComponent
                                                        className={`h-4 w-4 ${plan.featured ? "text-white" : "text-gray-600"}`}
                                                    />
                                                </div>
                                                <div>
                                                    <span
                                                        className={`font-medium ${plan.featured ? "text-white" : "text-gray-900"}`}
                                                    >
                                                        {feature.text}
                                                    </span>
                                                    {feature.subtext && (
                                                        <span className="ml-1 text-gray-600">
                                                            {feature.subtext}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
