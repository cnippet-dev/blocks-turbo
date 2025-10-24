"use client";

import { useState } from "react";
import { Check, Zap, Layers, Database } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

const pricingPlans = [
    {
        id: "basic",
        name: "Basic plan",
        price: "₹100",
        period: "/mth",
        billing: "Billed annually.",
        icon: Zap,
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data each user",
            "Basic chat and email support",
        ],
    },
    {
        id: "business",
        name: "Business plan",
        price: "₹200",
        period: "/mth",
        billing: "Billed annually.",
        icon: Layers,
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data each user",
            "Priority chat and email support",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise plan",
        price: "₹400",
        period: "/mth",
        billing: "Billed annually.",
        icon: Database,
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
    },
];

export default function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleGetStarted = (planId: string) => {
        setSelectedPlan(planId);
        console.log(`Selected plan: ${planId}`);
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <div className="mb-16 text-left">
                <p className="mb-4 font-medium text-purple-600 dark:text-purple-400">Pricing</p>
                <h1 className="mb-5 text-4xl font-semibold text-gray-900 dark:text-gray-100 md:text-5xl">
                    Simple, transparent pricing
                </h1>
                <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    We believe Untitled should be accessible to all companies,
                    no matter the size.
                </p>
            </div>

            <div className="mx-auto grid gap-8 md:grid-cols-3">
                {pricingPlans.map((plan) => {
                    const IconComponent = plan.icon;
                    return (
                        <Card
                            key={plan.id}
                            className="relative overflow-hidden border border-gray-200 dark:border-gray-700 shadow-none transition-shadow hover:shadow-md dark:bg-gray-900"
                        >
                            <CardHeader className="pb-8 text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                                    <IconComponent className="size-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="mb-4 text-3xl font-medium text-purple-700 dark:text-purple-400">
                                    {plan.name}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
                                        {plan.price}
                                    </span>
                                    <span className="text-4xl font-semibold text-gray-900">
                                        {plan.period}
                                    </span>
                                </div>
                                <p className="text-gray-600">{plan.billing}</p>
                            </CardHeader>

                            <CardContent className="pb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-purple-100 p-0.5 text-purple-600" />
                                            <span className="text-gray-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="border-t bg-gray-50 pt-6">
                                <Button
                                    className="w-full cursor-pointer rounded-lg bg-purple-600 py-3 font-medium text-white transition-colors hover:bg-purple-700"
                                    onClick={() => handleGetStarted(plan.id)}
                                >
                                    Get started
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>

            {selectedPlan && (
                <div className="mt-8 text-center">
                    <p className="font-medium text-purple-600">
                        You selected the{" "}
                        {pricingPlans.find((p) => p.id === selectedPlan)?.name}!
                    </p>
                </div>
            )}
        </div>
    );
}
