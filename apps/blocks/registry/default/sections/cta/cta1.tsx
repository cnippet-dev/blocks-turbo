import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Wrench, ExternalLink, Calendar } from "lucide-react";

export default function Component() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
            <div className="mb-8 flex justify-center">
                <Badge
                    variant="outline"
                    className="flex items-center gap-2 border-gray-200 bg-white px-4 py-2 text-sm"
                >
                    <Zap className="h-4 w-4 text-yellow-500" />
                    Call to Action
                </Badge>
            </div>

            <div className="mb-4 text-center">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                    Ready to chat with Beam
                </h1>
            </div>

            <div className="mb-16 text-center">
                <p className="text-lg text-gray-600">
                    Real stories from teams transforming workflows with Beam.
                </p>
            </div>

            <div className="mb-16 grid gap-8 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                            <Wrench className="h-6 w-6 text-gray-700" />
                        </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-900">
                        <span className="font-bold">Streamlined Organization</span>{" "}
                        Keep your content perfectly organized and easy to manage.
                    </h3>
                </div>

                <div className="rounded-2xl bg-gray-50 p-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                            <ExternalLink className="h-6 w-6 text-gray-700" />
                        </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-900">
                        <span className="font-bold">Powerful Integrations</span>{" "}
                        Seamlessly connect your tools and streamline your workflows.
                    </h3>
                </div>

                <div className="rounded-2xl bg-gray-50 p-8 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                            <Calendar className="h-6 w-6 text-gray-700" />
                        </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-900">
                        <span className="font-bold">Real-Time Updates</span>{" "}
                        Access instant changes, collaborate faster, and stay up-to-date with ease.
                    </h3>
                </div>
            </div>

            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 flex-1 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button className="h-12 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
                    Get a Demo
                </Button>
            </div>
        </div>
    );
}
