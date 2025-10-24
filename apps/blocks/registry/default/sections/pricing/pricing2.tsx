"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingData = {
    monthly: {
        basic: { price: 10, period: "per month" },
        business: { price: 20, period: "per month" },
    },
    annual: {
        basic: { price: 8, period: "per month" },
        business: { price: 16, period: "per month" },
    },
};

const plans = [
    {
        id: "basic",
        name: "Basic plan",
        description: "Our most popular plan for small teams.",
        features: [
            { left: "Access to basic features", right: "Attend events" },
            { left: "Basic reporting + analytics", right: "Automatic updates" },
            { left: "Up to 10 individual users", right: "Backup your account" },
            { left: "20 GB individual data", right: "Audit log and notes" },
            { left: "Basic chat support", right: "Feature requests" },
        ],
    },
    {
        id: "business",
        name: "Business plan",
        description: "Advanced features and reporting.",
        popular: true,
        features: [
            { left: "200+ integrations", right: "Advanced custom fields" },
            { left: "Advanced reporting", right: "Audit log and data history" },
            { left: "Up to 20 individual users", right: "Backup your account" },
            { left: "40 GB individual data", right: "Personalized service" },
            { left: "Priority chat support", right: "+ many more..." },
        ],
    },
];

export default function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
        "monthly",
    );
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleGetStarted = (planId: string) => {
        setSelectedPlan(planId);
        console.log(`Selected ${planId} plan with ${billingPeriod} billing`);
    };

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="mb-12 text-center">
                <p className="mb-4 font-medium text-purple-600">Pricing</p>
                <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                    Plans that fit your scale
                </h1>
                <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
                    Simple, transparent pricing that grows with you. Try any
                    plan free for 30 days.
                </p>

                <div className="mb-12 inline-flex items-center rounded-2xl bg-gray-100 p-1">
                    <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`rounded-xl px-6 py-1 font-medium transition-colors ${
                            billingPeriod === "monthly"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Monthly billing
                    </button>
                    <button
                        onClick={() => setBillingPeriod("annual")}
                        className={`flex items-center gap-2 rounded-xl px-6 py-1 font-medium transition-colors ${
                            billingPeriod === "annual"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Annual billing
                        <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-700 hover:bg-green-100"
                        >
                            Save 20%
                        </Badge>
                    </button>
                </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                {plans.map((plan) => {
                    const pricing =
                        pricingData[billingPeriod][
                            plan.id as keyof typeof pricingData.monthly
                        ];

                    return (
                        <Card
                            key={plan.id}
                            className="relative border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <CardHeader className="flex flex-row items-end justify-between pb-6">
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold text-gray-900">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-2 flex items-baseline gap-1">
                                    <div className="flex">
                                        <span className="text-3xl">₹</span>
                                        <span className="text-4xl font-semibold text-gray-900 md:text-5xl">
                                            {pricing.price}
                                        </span>
                                    </div>

                                    <span className="mt-auto text-gray-600">
                                        {pricing.period}
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="pb-6">
                                <div className="mb-6">
                                    <h4 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase">
                                        FEATURES
                                    </h4>
                                    <p className="mb-4 text-sm text-gray-600">
                                        Everything in our{" "}
                                        <span className="font-medium">
                                            {plan.id === "basic"
                                                ? "free plan"
                                                : "basic plan"}
                                        </span>{" "}
                                        plus....
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    {plan.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-1 gap-3 md:grid-cols-2"
                                        >
                                            <div className="flex items-start gap-3">
                                                <Check className="mt-0.5 size-5 flex-shrink-0 rounded-full bg-green-100 p-0.5 text-green-600" />
                                                <span className="text-sm text-gray-700">
                                                    {feature.left}
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="mt-0.5 size-5 flex-shrink-0 rounded-full bg-green-100 p-0.5 text-green-600" />
                                                <span className="text-sm text-gray-700">
                                                    {feature.right}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
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
                        {plans.find((p) => p.id === selectedPlan)?.name} with{" "}
                        {billingPeriod} billing!
                        {billingPeriod === "annual" && " (20% savings applied)"}
                    </p>
                </div>
            )}
        </div>
    );
}
