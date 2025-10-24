"use client";

import {
    Zap,
    ThumbsUp,
    Clock,
    Download,
    Folder,
    Shield,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const pricingTiers = [
    { sends: "2,500", price: "Included", isIncluded: true },
    { sends: "5,000", price: "$32/mo", isIncluded: false },
    { sends: "7,500", price: "$49/mo", isIncluded: false },
    { sends: "10,000", price: "$99/mo", isIncluded: false },
    { sends: "12,500", price: "$125/mo", isIncluded: false },
];

const yearlyPricingTiers = [
    { sends: "2,500", price: "Included", isIncluded: true },
    { sends: "5,000", price: "$26/mo", isIncluded: false },
    { sends: "7,500", price: "$39/mo", isIncluded: false },
    { sends: "10,000", price: "$79/mo", isIncluded: false },
    { sends: "12,500", price: "$99/mo", isIncluded: false },
];

const features = [
    {
        icon: Clock,
        text: "30 day build retention",
    },
    {
        icon: Folder,
        text: "Native module rebuilding",
    },
    {
        icon: Download,
        text: "5,000 downloads/month",
    },
    {
        icon: Shield,
        text: "Build validation checks",
    },
];

export default function BeamPricingSection() {
    const [isYearly, setIsYearly] = useState(true);
    const [selectedAction, setSelectedAction] = useState<string | null>(null);

    const currentPricing = isYearly ? yearlyPricingTiers : pricingTiers;

    const handleAction = (action: string) => {
        setSelectedAction(action);
        console.log(`Action selected: ${action}`);
    };

    return (
        <div className="mx-auto w-full max-w-5xl px-4 py-16">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 text-center md:mb-16 md:flex-row md:gap-0 md:text-left">
                <div>
                    <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                        <Zap className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-gray-600">
                            Beam Our Pricing
                        </span>
                    </div>
                    <h1 className="mb-3 text-4xl font-medium text-gray-900 md:text-5xl">
                        Beam Pricing Plans
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipiscing.
                    </p>
                </div>

                <div className="mx-auto mt-auto flex items-center justify-center gap-3 md:mx-0 md:justify-end">
                    <span
                        className={`font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}
                    >
                        Monthly
                    </span>
                    <Switch
                        checked={isYearly}
                        onCheckedChange={setIsYearly}
                        className="data-[state=checked]:bg-blue-600"
                    />
                    <span
                        className={`font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}
                    >
                        Yearly
                    </span>
                </div>
            </div>

            <div className="mb-16">
                <div>
                    <Card className="grid h-full grid-cols-1 border-gray-200 bg-gray-100 p-[3px] shadow-none md:grid-cols-7">
                        <CardContent className="col-span-5 flex flex-col justify-between space-y-6 p-6">
                            <div className="mb-0 flex items-start gap-3 md:mb-4">
                                <div className="rounded-lg bg-blue-100 p-4">
                                    <ThumbsUp className="size-6 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-medium text-gray-900">
                                        Add-Ons
                                    </h2>
                                    <p className="mb-8 text-gray-600">
                                        Beam is the ultimate platform for
                                        bringing your tech ideas to life.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {features.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200">
                                                <IconComponent className="h-4 w-4 text-gray-600" />
                                            </div>
                                            <span className="text-gray-700">
                                                {feature.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex gap-4 pt-3 md:pt-6">
                                <Button
                                    className="bg-gray-900 px-6 py-2 text-white hover:bg-gray-800"
                                    onClick={() =>
                                        handleAction("start-deploying")
                                    }
                                >
                                    Start Deploying
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="border-gray-300 bg-transparent px-6 py-2 text-gray-700 shadow-none hover:bg-gray-50"
                                    onClick={() => handleAction("get-demo")}
                                >
                                    Get a Demo
                                </Button>
                            </div>
                        </CardContent>

                        <div className="col-span-1 border-none border-gray-200 p-1 shadow-none md:col-span-2">
                            <CardHeader className="rounded-t-lg bg-gray-900 px-4 py-2 text-white">
                                <div className="flex items-center justify-between text-sm">
                                    <h3 className="font-medium">
                                        WEEKLY SENDS
                                    </h3>
                                    <h3 className="text-right font-medium">
                                        PRICE
                                    </h3>
                                </div>
                            </CardHeader>

                            <CardContent className="rounded-xl bg-white p-0">
                                {currentPricing.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`grid grid-cols-2 gap-4 border-b border-gray-200 p-4 last:border-b-0 ${
                                            tier.isIncluded
                                                ? "bg-blue-50"
                                                : "hover:bg-gray-50"
                                        }`}
                                    >
                                        <div className="font-medium text-gray-900">
                                            {tier.sends.toLocaleString()}
                                        </div>
                                        <div
                                            className={`text-right font-medium ${tier.isIncluded ? "text-blue-600" : "text-gray-900"}`}
                                        >
                                            {tier.price}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </div>
                    </Card>

                    <Card className="mt-10 border-gray-200 bg-gray-50 shadow-none">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                        <ThumbsUp className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                                            Enterprise
                                        </h2>
                                        <p className="text-gray-600">
                                            Beam is the ultimate platform for
                                            bringing your tech ideas to life.
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    className="flex items-center gap-2 bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                                    onClick={() =>
                                        handleAction("contact-enterprise")
                                    }
                                >
                                    Contact Us
                                    <ArrowRight className="h-4 w-4" />
                                    <span className="ml-2">$250</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
