import { CheckCircle2, Loader2 } from "lucide-react";
import { PricingPlan } from "@/config/pricing-plan";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
    plan: PricingPlan;
    onSubscribe: (plan: PricingPlan) => void;
    loadingPaymentId: string | null;
}

export default function PricingCard({
    plan,
    onSubscribe,
    loadingPaymentId,
}: PricingCardProps) {
    const isPopular = plan.popular;
    const isLoading = loadingPaymentId === plan.id;

    return (
        <Card
            className={`flex h-full flex-col border-2 ${isPopular ? "border-blue-500 shadow-lg" : "border-gray-200 dark:border-gray-700"}`}
        >
            <CardHeader className="pb-0 text-center">
                {" "}
                {isPopular && (
                    <Badge className="mx-auto mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100">
                        Popular
                    </Badge>
                )}
                <CardTitle className="text-3xl font-bold">
                    {plan.name}
                </CardTitle>
                <CardDescription className="mt-4 text-5xl font-extrabold">
                    ₹{plan.price / 100} {/* Display in Rupees */}
                    <span className="text-base font-normal text-gray-500">
                        /{plan.duration.toLowerCase().replace("ly", "")}
                    </span>{" "}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex grow flex-col justify-between">
                <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-700 dark:text-gray-300"
                        >
                            <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-green-500" />{" "}
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => onSubscribe(plan)} // Pass the plan object
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        "Get started"
                    )}
                </Button>
                <Button variant="outline" className="w-full">
                    Chat to sales
                </Button>
            </CardFooter>
        </Card>
    );
}
