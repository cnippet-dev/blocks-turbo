import { HelpCircle, Check } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface FeatureRowProps {
    title: string;
    basic: React.ReactNode;
    business: React.ReactNode;
    tooltip?: string;
}

function FeatureRow({ title, basic, business, tooltip }: FeatureRowProps) {
    return (
        <div className="grid grid-cols-3 border-b py-4 last:border-b-0">
            <div className="flex items-center gap-1">
                <span className="text-sm font-medium">{title}</span>
                {tooltip && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <HelpCircle className="text-muted-foreground h-4 w-4" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs text-sm">{tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
            <div>{basic}</div>
            <div>{business}</div>
        </div>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="border-b py-4">
            <h3 className="text-sm font-medium text-purple-600">{title}</h3>
        </div>
    );
}

function FeatureCheck() {
    return (
        <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-1">
                <Check className="h-4 w-4 text-green-600" />
            </div>
        </div>
    );
}

function FeatureUnavailable() {
    return (
        <div className="flex justify-center">
            <div className="text-muted-foreground">—</div>
        </div>
    );
}

export default function PricingTable() {
    return (
        <div className="mt-8 overflow-hidden rounded-lg border bg-white">
            <div className="grid grid-cols-3 border-b">
                <div className="p-4 font-medium">Overview</div>
                <div className="p-4 text-center font-medium">Free</div>
                <div className="p-4 text-center font-medium">Pro</div>
            </div>

            <div className="px-4">
                <FeatureRow
                    title="Basic features"
                    tooltip="Core features available in all plans"
                    basic={<FeatureCheck />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="Users"
                    tooltip="Number of user accounts"
                    basic={<div className="text-center">5</div>}
                    business={<div className="text-center">Unlimited</div>}
                />

                <FeatureRow
                    title="Storage"
                    tooltip="Storage allocation per account"
                    basic={<div className="text-center">5 GB</div>}
                    business={<div className="text-center">Unlimited</div>}
                />

                <FeatureRow
                    title="Support"
                    tooltip="Customer support options"
                    basic={<div className="text-center">Community</div>}
                    business={<div className="text-center">Priority</div>}
                />

                <FeatureRow
                    title="Automated workflows"
                    tooltip="Create custom automation rules"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="200+ integrations"
                    tooltip="Connect with other tools and services"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <SectionTitle title="Reporting and analytics" />

                <FeatureRow
                    title="Analytics"
                    tooltip="Data insights and reporting capabilities"
                    basic={<div className="text-center">Basic</div>}
                    business={<div className="text-center">Advanced</div>}
                />

                <FeatureRow
                    title="Export reports"
                    tooltip="Download reports in various formats"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="Scheduled reports"
                    tooltip="Set up automated report delivery"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="API Access"
                    tooltip="Programmatic access to your data"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />

                <FeatureRow
                    title="Advanced reports"
                    tooltip="Custom reporting with advanced filters"
                    basic={<FeatureUnavailable />}
                    business={<FeatureCheck />}
                />
            </div>
        </div>
    );
}
