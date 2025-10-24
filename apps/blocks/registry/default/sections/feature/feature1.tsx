import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap } from "lucide-react";

export default function Component() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-16">
            {/* Header Badge */}
            <div className="mb-8 flex justify-center">
                <Badge
                    variant="outline"
                    className="flex items-center gap-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-4 py-2 text-sm"
                >
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Empower Innovation!
                </Badge>
            </div>

            {/* Main Heading and Subtitle */}
            <div className="mb-16 text-center">
                <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                    The perfect balance
                    <br />
                    of speed and security
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    Streamline your workflows while maintaining top-notch
                    security standards.
                </p>
            </div>

            {/* Main Dashboard Layout */}
            <div className="mb-12 grid gap-8 lg:grid-cols-12">
                {/* Left Panel - User Profile & Chart */}
                <div className="lg:col-span-4">
                    <Card className="h-full border-0 bg-gray-50 dark:bg-gray-900 p-6">
                        <CardContent className="p-0">
                            {/* User Profile */}
                            <div className="mb-6 flex items-center gap-3">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                    <AvatarFallback>PB</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                        Peter Bekkers
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Beam Technology
                                    </p>
                                </div>
                            </div>

                            {/* Plan Toggle */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Free
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                        Premium
                                    </span>
                                </div>
                            </div>

                            {/* Chart */}
                            <div className="relative h-32">
                                <svg
                                    className="h-full w-full"
                                    viewBox="0 0 300 120"
                                >
                                    {/* Grid lines */}
                                    <defs>
                                        <pattern
                                            id="grid"
                                            width="60"
                                            height="24"
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path
                                                d="M 60 0 L 0 0 0 24"
                                                fill="none"
                                                stroke="#f3f4f6"
                                                className="dark:stroke-gray-800"
                                                strokeWidth="1"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="url(#grid)"
                                    />

                                    {/* Chart lines */}
                                    <path
                                        d="M 0 80 Q 60 70 120 60 Q 180 50 240 45 Q 270 42 300 40"
                                        fill="none"
                                        stroke="#e5e7eb"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M 0 90 Q 60 75 120 50 Q 180 35 240 45 Q 270 50 300 60"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {/* X-axis labels */}
                                <div className="mt-2 flex justify-between text-xs text-gray-500">
                                    <span>0</span>
                                    <span>2k</span>
                                    <span>3k</span>
                                    <span>4k</span>
                                    <span>5k</span>
                                    <span>9k</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Center Panel - Features List */}
                <div className="lg:col-span-4">
                    <Card className="h-full border-0 bg-gray-50 p-6">
                        <CardContent className="p-0">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                                        <span className="text-sm font-medium text-white">
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Streamlined Organization
                                        </h3>
                                        <span className="text-xs text-gray-500">
                                            #01
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                    <div>
                                        <h3 className="font-medium text-gray-700">
                                            Powerful Integrations
                                        </h3>
                                        <span className="text-xs text-gray-500">
                                            #02
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                    <div>
                                        <h3 className="font-medium text-gray-700">
                                            Real-Time Updates
                                        </h3>
                                        <span className="text-xs text-gray-500">
                                            #03
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                    <div>
                                        <h3 className="font-medium text-gray-700">
                                            Seamless Collaboration
                                        </h3>
                                        <span className="text-xs text-gray-500">
                                            #04
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Panel - Feature Blocks */}
                <div className="space-y-6 lg:col-span-4">
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            Faster Workflow
                        </h3>
                        <p className="text-sm text-gray-600">
                            Beam is the ultimate platform for bringing your tech
                            ideas to ui collection life.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            Complete Control
                        </h3>
                        <p className="text-sm text-gray-600">
                            Beam is the ultimate platform for bringing your tech
                            ideas to ui collection life.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            Seamless Integration
                        </h3>
                        <p className="text-sm text-gray-600">
                            Beam is the ultimate platform for bringing your tech
                            ideas to ui collection life.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            Future Ready
                        </h3>
                        <p className="text-sm text-gray-600">
                            Beam is the ultimate platform for bringing your tech
                            ideas to ui collection life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-0 bg-gray-50 p-8">
                    <CardContent className="p-0">
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                            Effortless Delivery
                        </h3>
                        <p className="mb-6 text-gray-600">
                            Beam is the ultimate platform for bringing your tech
                            ideas to life.
                        </p>
                        <Button
                            variant="outline"
                            className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        >
                            Learn More
                        </Button>
                    </CardContent>
                </Card>

                <Card className="border-0 bg-gray-50 p-8">
                    <CardContent className="p-0">
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                            Enhanced Security
                        </h3>
                        <p className="mb-6 text-gray-600">
                            Beam is the ultimate platform for bringing your tech
                            ideas to life.
                        </p>
                        <Button
                            variant="outline"
                            className="border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        >
                            Learn More
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
