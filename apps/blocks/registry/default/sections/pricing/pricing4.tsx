"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
    Check,
    Monitor,
    Clock,
    Target,
    Download,
    HardDrive,
    Zap,
} from "lucide-react";

export default function Component() {
    const [isYearly, setIsYearly] = useState(false);

    const standardPrice = isYearly ? 499.99 : 49.99;
    const plusPrice = isYearly ? 1640.0 : 164.0;

    const handleGetStarted = (plan: string, price: number) => {
        console.log(`Getting started with ${plan} plan at $${price}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-8 flex w-fit items-center justify-center gap-2 rounded-full border px-2 text-sm text-gray-600">
                    <Zap className="h-4 w-4" />
                    <span>Beam Our Pricing</span>
                </div>

                <div className="mb-12 text-center">
                    <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
                        Beam Pricing Plans
                    </h1>

                    <div className="flex items-center justify-center gap-4">
                        <span
                            className={`text-lg ${!isYearly ? "font-medium text-gray-900" : "text-gray-500"}`}
                        >
                            Monthly
                        </span>
                        <Switch
                            checked={isYearly}
                            onCheckedChange={setIsYearly}
                            className="data-[state=checked]:bg-blue-600"
                        />
                        <span
                            className={`text-lg ${isYearly ? "font-medium text-gray-900" : "text-gray-500"}`}
                        >
                            Yearly
                        </span>
                    </div>
                </div>

                <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
                    <Card className="relative border-none bg-gray-50 bg-none shadow-none">
                        <CardHeader className="rounded-2xl border pb-4">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
                                    <Monitor className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-semibold">
                                        Standard
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Lorem ipsum dolor sit amet.
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="mt-8 space-y-6 rounded-2xl border bg-white pt-6">
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ${standardPrice}
                                    </span>
                                    <span className="text-gray-600">
                                        / {isYearly ? "Year" : "Month"}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit etiam venenatis orci.
                                </p>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full border-gray-300 bg-transparent py-3 text-gray-900 shadow-none hover:bg-gray-50"
                                onClick={() =>
                                    handleGetStarted("Standard", standardPrice)
                                }
                            >
                                Get Started With Basic
                            </Button>

                            <div className="space-y-4">
                                <div className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    Weekly Sends
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Target className="h-5 w-5 text-gray-400" />
                                        <span className="text-gray-700">
                                            <span className="font-medium">
                                                30 day
                                            </span>{" "}
                                            build retention
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Download className="h-5 w-5 text-gray-400" />
                                        <span className="text-gray-700">
                                            <span className="font-medium">
                                                5,000
                                            </span>{" "}
                                            downloads/month
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <HardDrive className="h-5 w-5 text-gray-400" />
                                        <span className="text-gray-700">
                                            Native module rebuilding
                                        </span>
                                    </div>
                                </div>

                                <hr />

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-gray-700">
                                            Increased Efficiency
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-gray-700">
                                            Great Communication
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="relative border-none bg-gray-50 bg-none shadow-none">
                        <CardHeader className="rounded-2xl border pb-4">
                            <div className="mb-2 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900">
                                    <Clock className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-semibold">
                                        Plus
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        Lorem ipsum dolor sit amet.
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="mt-8 space-y-6 rounded-2xl border bg-white pt-6">
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ${plusPrice}
                                    </span>
                                    <span className="text-gray-600">
                                        / {isYearly ? "Year" : "Month"}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit etiam venenatis orci.
                                </p>
                            </div>

                            <Button
                                className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700"
                                onClick={() =>
                                    handleGetStarted("Plus", plusPrice)
                                }
                            >
                                Get Started → ${Math.round(plusPrice)}
                            </Button>

                            <div className="space-y-4">
                                <div className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    Weekly Sends
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Target className="h-5 w-5 text-gray-400" />
                                        <span className="text-gray-700">
                                            <span className="font-medium">
                                                60 day
                                            </span>{" "}
                                            build retention
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Download className="h-5 w-5 text-gray-400" />
                                        <span className="text-gray-700">
                                            <span className="font-medium">
                                                15,000
                                            </span>{" "}
                                            downloads/month
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <HardDrive className="h-5 w-5 text-gray-400" />
                                        <span className="text-gray-700">
                                            Native module rebuilding
                                        </span>
                                    </div>
                                </div>

                                <hr />

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-gray-700">
                                            Increased Efficiency
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                                            <Check className="h-3 w-3 text-white" />
                                        </div>
                                        <span className="text-gray-700">
                                            Great Communication
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
