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
import { Check } from "lucide-react";

export default function Component() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <div className="min-h-screen bg-white px-4 py-16 font-sans">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm font-medium tracking-wide text-gray-800 uppercase">
                        PRICING PLAN
                    </p>
                    <h1 className="text-4xl leading-tight font-medium text-gray-900 md:text-5xl">
                        Simply choose the pricing plan
                        <br />
                        that{" "}
                        <span className="text-orange-500">fits you best.</span>
                    </h1>
                </div>

                <div className="mx-auto mb-12 grid max-w-6xl gap-8 lg:grid-cols-3">
                    <Card className="relative h-fit border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                                Jambo
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                Best for personal and basic needs.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-bold text-gray-900">
                                        $8
                                    </span>
                                    <span className="text-gray-800">
                                        one-time payment
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Feedback
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Insights
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Free 2-years of updates
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="mb-2 font-medium text-gray-900">
                                    More description here
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum aliquam erat volutpat - cras
                                    dapibus.
                                </p>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full border-gray-300 bg-transparent py-3 text-gray-700 hover:bg-gray-50"
                            >
                                Try now
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="relative border-2 border-orange-500 bg-white shadow-lg transition-shadow hover:shadow-xl">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full bg-orange-600 px-2 text-sm text-white">
                            MOST POPULAR
                        </div>

                        <CardHeader className="pt-8 pb-6">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                                Jambo<span className="text-orange-500">+</span>
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                Best for personal and basic needs.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div className="-mx-6 rounded-lg bg-orange-50 p-4">
                                <div className="flex gap-2 px-6">
                                    <span className="text-4xl font-bold text-orange-500">
                                        $12
                                    </span>
                                    <div className="text-sm text-gray-800">
                                        <div>per user/mo,</div>
                                        <div>billed annually</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Feedback{" "}
                                            <span className="text-orange-500">
                                                + Voting System
                                            </span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Advanced Insights
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Public Leaderboard
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Public Roadmap
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Hyper-regular Updates
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="mb-2 font-medium text-gray-900">
                                    More description here
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum aliquam erat volutpat – cras
                                    dapibus.
                                </p>
                            </div>

                            <Button className="w-full bg-gray-900 py-3 text-white hover:bg-gray-800">
                                Try now
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="relative h-fit border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                                Custom
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                                Best for personal and basic needs.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-6">
                            <div className="py-3 text-center">
                                <Button
                                    variant="outline"
                                    className="h-auto w-full p-0 py-1 text-lg font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Contact us
                                </Button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Everything in Jambo+
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Single Sign-On (SSO)
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Collect, organize, and prioritize
                                            user feedback.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="mb-2 font-medium text-gray-900">
                                    More description here
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum aliquam erat volutpat - cras
                                    dapibus.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
