"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2, Calendar, CheckCircle2, CreditCard, X } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    getActiveSubscription,
    cancelSubscription,
} from "@/lib/actions/subscription.actions";

import { plans, additionalPlans } from "@/config/pricing-plan";

interface SubscriptionData {
    id: string;
    plan: string;
    status: string;
    startDate: string;
    endDate: string;
}

export default function SubscriptionsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [currentSubscription, setCurrentSubscription] =
        useState<SubscriptionData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isCancelling, setIsCancelling] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [currentPlanFeatures, setCurrentPlanFeatures] = useState<string[]>(
        [],
    );
    const [hasLoadedSubscription, setHasLoadedSubscription] = useState(false);

    useEffect(() => {
        const fetchSubscription = async () => {
            if (status === "loading" || hasLoadedSubscription) return;
            if (!session?.user?.id) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            const result = await getActiveSubscription();
            if (result && "error" in result) {
                toast.error(
                    result.error.general || "Failed to fetch subscription.",
                );
                setCurrentSubscription(null);
                setCurrentPlanFeatures([]);
            } else if (result && result.data) {
                setCurrentSubscription({
                    ...result.data,
                    startDate: new Date(
                        result.data.startDate,
                    ).toLocaleDateString(),
                    endDate: new Date(result.data.endDate).toLocaleDateString(),
                });

                // Find plan in either plans or additionalPlans
                const matchingPlan =
                    plans.find((p) => p.name === result.data.plan) ||
                    additionalPlans.find((p) => p.name === result.data.plan);

                if (matchingPlan) {
                    // Convert features object to array of strings for display
                    const featuresList: string[] = [];
                    Object.entries(matchingPlan.features).forEach(
                        ([key, value]) => {
                            if (Array.isArray(value) && value.length === 2) {
                                if (value[0]) {
                                    featuresList.push(value[1] as string);
                                }
                            } else if (typeof value === "boolean" && value) {
                                featuresList.push(
                                    key
                                        .replace(/([A-Z])/g, " $1")
                                        .trim()
                                        .replace(/^\w/, (c) => c.toUpperCase()),
                                );
                            } else if (typeof value === "string") {
                                featuresList.push(value);
                            }
                        },
                    );
                    setCurrentPlanFeatures(featuresList);
                } else {
                    setCurrentPlanFeatures([]);
                }
            } else {
                setCurrentSubscription(null);
                setCurrentPlanFeatures([]);
            }
            setIsLoading(false);
            setHasLoadedSubscription(true);
        };

        fetchSubscription();
    }, [session, status, hasLoadedSubscription]);

    const handleCancelSubscription = async () => {
        if (!currentSubscription) return;

        setIsCancelling(true);
        const result = await cancelSubscription({
            subscriptionId: currentSubscription.id,
        });
        setIsCancelling(false);
        setIsCancelModalOpen(false);

        if (result && "error" in result) {
            toast.error("Failed to cancel subscription.");
        } else {
            toast.success(
                result?.message || "Subscription cancelled successfully!",
            );
            setCurrentSubscription((prev) =>
                prev
                    ? {
                          ...prev,
                          status: "CANCELLED",
                          endDate: new Date().toLocaleDateString(),
                      }
                    : null,
            );
            setHasLoadedSubscription(false);
        }
    };

    const handleViewPaymentHistory = () => {
        router.push("/account/billing");
    };

    if (status === "loading" || isLoading) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="flex items-center gap-2">
                    <div className="loader"></div>
                    <span>Retrieving data</span>
                </div>
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-semibold">Access Denied</h2>
                <p className="text-muted-foreground">
                    You must be logged in to view this page.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl space-y-8">
            {currentSubscription ? (
                <>
                    <div>
                        <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                            Current Subscription
                        </h2>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            Details about your active subscription plan and
                            features.
                        </p>

                        <div className="mb-4 flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                            <div className="flex items-center space-x-3">
                                <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                    <CreditCard
                                        className="h-4 w-4 dark:text-gray-300"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                        {currentSubscription.plan}
                                    </p>
                                    <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                        <Badge
                                            variant={
                                                currentSubscription.status ===
                                                "ACTIVE"
                                                    ? "default"
                                                    : "secondary"
                                            }
                                            className={
                                                currentSubscription.status ===
                                                "ACTIVE"
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                            }
                                        >
                                            {currentSubscription.status.toLowerCase()}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span>
                                        Start Date:{" "}
                                        {currentSubscription.startDate}
                                    </span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span>
                                        {currentSubscription.plan.toLowerCase() ===
                                        "lifetime"
                                            ? "Expires: Never (Lifetime)"
                                            : `End Date: ${currentSubscription.endDate}`}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Plan Features:
                                </h3>
                                {currentPlanFeatures.length > 0 ? (
                                    <ul className="space-y-1">
                                        {currentPlanFeatures.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                    <CheckCircle2 className="mr-2 h-3 w-3 shrink-0 text-green-500" />
                                                    {feature}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-500 dark:text-gray-500">
                                        No features found for this plan.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row">
                            {currentSubscription.status === "ACTIVE" && (
                                <Dialog
                                    open={isCancelModalOpen}
                                    onOpenChange={setIsCancelModalOpen}
                                >
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            disabled={isCancelling}
                                        >
                                            {isCancelling ? (
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            ) : (
                                                <X className="mr-2 h-4 w-4" />
                                            )}
                                            Cancel Subscription
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="dark:border-neutral-800 dark:bg-neutral-950">
                                        <DialogHeader>
                                            <DialogTitle className="dark:text-gray-100">
                                                Are you sure you want to cancel?
                                            </DialogTitle>
                                            <DialogDescription className="dark:text-gray-400">
                                                Your subscription for the{" "}
                                                {currentSubscription.plan} will
                                                be cancelled. Your access will
                                                continue until{" "}
                                                {currentSubscription.endDate}.
                                                No further charges will be made.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button
                                                variant="outline"
                                                onClick={() =>
                                                    setIsCancelModalOpen(false)
                                                }
                                                disabled={isCancelling}
                                            >
                                                Keep Subscription
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                onClick={
                                                    handleCancelSubscription
                                                }
                                                disabled={isCancelling}
                                            >
                                                {isCancelling ? (
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                ) : null}
                                                Confirm Cancellation
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            )}
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleViewPaymentHistory}
                            >
                                View Payment History
                            </Button>
                            {currentSubscription.status !== "ACTIVE" && (
                                <Link href="/pricing">
                                    <Button size="sm">Explore Plans</Button>
                                </Link>
                            )}
                        </div>

                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                            Manage your subscription and view billing details.
                        </p>
                    </div>
                </>
            ) : (
                <div>
                    <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                        Subscription
                    </h2>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        View and manage your subscription plans.
                    </p>

                    <div className="mb-4 flex items-center justify-between rounded-md border border-dashed border-gray-300 p-6 dark:border-gray-700 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <CreditCard
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    No Active Subscription
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Explore our plans to unlock premium features
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button asChild size="sm">
                        <Link href="/pricing">Explore Pricing</Link>
                    </Button>

                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                        Choose a plan that fits your needs and unlock premium
                        features.
                    </p>
                </div>
            )}
        </div>
    );
}
