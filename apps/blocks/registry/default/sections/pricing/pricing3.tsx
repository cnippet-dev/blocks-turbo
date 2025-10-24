"use client";

import { useState } from "react";
import { Check, Info, Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    const plans = [
        {
            name: "Basic",
            popular: true,
            monthlyPrice: 1000,
            annualPrice: 10000,
            description:
                "Basic features for up to 10 employees with everything you need.",
            features: {
                basicFeatures: true,
                users: "10",
                individualData: "20 GB",
                support: true,
                automatedWorkflows: false,
                integrations: false,
                analytics: false,
                exportData: false,
                customReports: false,
                apiAccess: false,
            },
        },
        {
            name: "Business",
            popular: false,
            monthlyPrice: 2000,
            annualPrice: 16000,
            description:
                "Advanced features and reporting, better workflows and automation.",
            features: {
                basicFeatures: true,
                users: "20",
                individualData: "40 GB",
                support: true,
                automatedWorkflows: true,
                integrations: true,
                analytics: true,
                exportData: true,
                customReports: true,
                apiAccess: true,
            },
        },
        {
            name: "Enterprise",
            popular: false,
            monthlyPrice: 40,
            annualPrice: 32,
            description:
                "Personalized service and enterprise security for large teams.",
            features: {
                basicFeatures: true,
                users: "Unlimited",
                individualData: "Unlimited",
                support: true,
                automatedWorkflows: true,
                integrations: true,
                analytics: true,
                exportData: true,
                customReports: true,
                apiAccess: true,
            },
        },
    ];

    const featureRows = [
        {
            title: "Overview",
            features: [
                {
                    name: "Basic features",
                    key: "basicFeatures",
                    tooltip: "Core functionality and basic tools",
                },
                {
                    name: "Users",
                    key: "users",
                    tooltip: "Number of team members that can use the platform",
                },
                {
                    name: "Individual data",
                    key: "individualData",
                    tooltip: "Storage space allocated per user",
                },
                {
                    name: "Support",
                    key: "support",
                    tooltip: "Customer support availability",
                },
                {
                    name: "Automated workflows",
                    key: "automatedWorkflows",
                    tooltip: "Automation tools and workflow builders",
                },
                {
                    name: "200+ integrations",
                    key: "integrations",
                    tooltip: "Connect with popular third-party tools",
                },
            ],
        },
        {
            title: "Reporting and analytics",
            features: [
                {
                    name: "Analytics",
                    key: "analytics",
                    tooltip: "Analytics and insights for your data",
                },
                {
                    name: "Export data",
                    key: "exportData",
                    tooltip: "Analytics and insights for your data",
                },
                {
                    name: "Custom reports",
                    key: "customReports",
                    tooltip: "Analytics and insights for your data",
                },
                {
                    name: "API Access",
                    key: "apiAccess",
                    tooltip: "Analytics and insights for your data",
                },
            ],
        },
    ];

    const getPrice = (plan: (typeof plans)[0]) => {
        return billingCycle === "monthly"
            ? plan.monthlyPrice
            : plan.annualPrice;
    };

    return (
        <>
            <TooltipProvider>
                <div className="mx-auto w-full max-w-7xl px-4 py-16">
                    <div className="mb-16 text-center">
                        <div className="mb-4 font-medium text-purple-600">
                            Pricing
                        </div>
                        <h1 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
                            Compare our plans and find yours
                        </h1>
                        <p className="mb-8 text-lg text-gray-600">
                            Simple, transparent pricing that grows with you. Try
                            any plan free for 30 days.
                        </p>

                        <Tabs
                            value={billingCycle}
                            onValueChange={setBillingCycle}
                            className="mx-auto w-fit"
                        >
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="monthly">
                                    Monthly billing
                                </TabsTrigger>
                                <TabsTrigger value="annual">
                                    Annual billing
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div className="grid w-full grid-cols-4 gap-8 border-b pb-3">
                        <div />
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className="flex items-center justify-start gap-2 px-6"
                            >
                                <CardTitle className="text-xl font-semibold">
                                    {plan.name}
                                </CardTitle>
                                {plan.popular && (
                                    <Badge className="bg-purple-600 hover:bg-purple-700">
                                        Popular
                                    </Badge>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mb-16 grid gap-8 md:grid-cols-4">
                        <div />

                        {plans.map((plan) => (
                            <Card
                                key={plan.name}
                                className="relative border-none shadow-none"
                            >
                                <CardHeader className="pb-8 text-left">
                                    <CardTitle className="sr-only text-xl font-semibold">
                                        {plan.name}
                                    </CardTitle>
                                    <div className="mt-2">
                                        <span className="text-4xl font-bold">
                                            ₹{getPrice(plan)}
                                        </span>

                                        <span className="ml-1 text-gray-600">
                                            per{" "}
                                            {billingCycle == "monthly"
                                                ? "month"
                                                : "year"}
                                        </span>
                                    </div>

                                    <CardDescription className="mt-auto text-gray-600">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700">
                                        Get started
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full cursor-pointer bg-transparent"
                                    >
                                        Chat to sales
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div>
                        {featureRows.map((row) => (
                            <div key={row.title} className="mb-16">
                                <div className="mb-6 px-4 font-medium text-purple-600">
                                    {row.title}
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="sr-only grid grid-cols-4 rounded-md bg-gray-50">
                                                <th></th>
                                                {plans.map((plan) => (
                                                    <th
                                                        key={plan.name}
                                                        className="px-4 py-4 text-left font-medium"
                                                    >
                                                        {plan.name}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {row.features.map((feature, i) => (
                                                <tr
                                                    key={feature.key}
                                                    className={`grid grid-cols-4 ${i % 2 === 0 ? "rounded-md bg-gray-100/80" : ""}`}
                                                >
                                                    <td className="py-4 pr-8">
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-4 font-medium">
                                                                {feature.name}
                                                            </span>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <Info className="h-4 w-4 text-gray-400" />
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p>
                                                                        {
                                                                            feature.tooltip
                                                                        }
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </div>
                                                    </td>
                                                    {plans.map((plan) => (
                                                        <td
                                                            key={`${plan.name}-${feature.key}`}
                                                            className="px-4 py-4 text-center"
                                                        >
                                                            {(() => {
                                                                const value =
                                                                    plan
                                                                        .features[
                                                                        feature.key as keyof typeof plan.features
                                                                    ];
                                                                if (
                                                                    typeof value ===
                                                                    "boolean"
                                                                ) {
                                                                    return value ? (
                                                                        <Check className="mx-auto h-5 w-5 text-green-600" />
                                                                    ) : (
                                                                        <Plus className="mx-auto h-5 w-5 rotate-45 text-red-500" />
                                                                    );
                                                                } else if (
                                                                    Array.isArray(
                                                                        value,
                                                                    ) &&
                                                                    value.length ===
                                                                        2 &&
                                                                    typeof value[0] ===
                                                                        "boolean" &&
                                                                    typeof value[1] ===
                                                                        "string"
                                                                ) {
                                                                    return value[0] ? (
                                                                        <span className="flex items-center justify-center gap-1 text-sm font-medium">
                                                                            <Check className="h-5 w-5 text-green-600" />
                                                                            {
                                                                                value[1]
                                                                            }
                                                                        </span>
                                                                    ) : (
                                                                        <span className="flex items-center justify-center gap-1 text-sm font-medium">
                                                                            <Plus className="h-5 w-5 rotate-45 text-red-400" />
                                                                            {
                                                                                value[1]
                                                                            }
                                                                        </span>
                                                                    );
                                                                } else {
                                                                    return (
                                                                        <span className="text-sm font-medium">
                                                                            {
                                                                                value
                                                                            }
                                                                        </span>
                                                                    );
                                                                }
                                                            })()}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </TooltipProvider>
        </>
    );
}
