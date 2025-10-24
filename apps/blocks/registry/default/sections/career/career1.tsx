import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Zap } from "lucide-react";

export default function Component() {
    const jobs = [
        {
            title: "UI Designer",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tristique risus. Suspendisse semper.",
            location: "Australia",
            locationFlag: "🇦🇺",
            type: "Full time",
            salary: "80k - 160k",
            postedDate: "7 days ago",
        },
        {
            title: "Project Manager",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tristique risus. Suspendisse semper.",
            location: "United States",
            locationFlag: "🇺🇸",
            type: "Part time",
            salary: "160k - 250k",
            postedDate: "10 days ago",
        },
        {
            title: "Engineering Manager",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tristique risus. Suspendisse semper.",
            location: "Australia",
            locationFlag: "🇦🇺",
            type: "Full time",
            salary: "125k - 220k",
            postedDate: "15 days ago",
        },
    ];

    return (
        <div className="mx-auto max-w-4xl px-4 py-16">
            <div className="mb-8 flex justify-center">
                <Badge
                    variant="outline"
                    className="flex items-center gap-2 bg-white px-4 py-2 text-sm"
                >
                    <Zap className="size-4 text-yellow-500" />
                    Beam Careers
                </Badge>
            </div>

            <div className="mb-16 text-center">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                    Explore Exciting Career
                    <br />
                    Opportunities at Beam
                </h1>
            </div>

            <div className="space-y-8">
                {jobs.map((job, index) => (
                    <Card
                        key={index}
                        className="border-0 bg-transparent shadow-none"
                    >
                        <CardContent className="p-0">
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                {/* Job Content */}
                                <div className="flex-1">
                                    <div className="mb-4 flex items-start justify-between">
                                        <h2 className="text-2xl font-semibold">
                                            {job.title}
                                        </h2>
                                        <span className="ml-4 whitespace-nowrap text-sm text-muted-foreground">
                                            {job.postedDate}
                                        </span>
                                    </div>

                                    <p className="mb-6 leading-relaxed text-muted-foreground">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                                        {/* Location */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-base">
                                                {job.locationFlag}
                                            </span>
                                            <span>{job.location}</span>
                                        </div>

                                        {/* Employment Type */}
                                        <div className="flex items-center gap-2">
                                            <Clock className="size-4" />
                                            <span>{job.type}</span>
                                        </div>

                                        {/* Salary */}
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="size-4" />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <Button className="bg-gray-900 px-6 py-2 text-white hover:bg-gray-800">
                                        Apply
                                    </Button>
                                </div>
                            </div>

                            {index < jobs.length - 1 && (
                                <div className="mt-8 border-b"></div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
