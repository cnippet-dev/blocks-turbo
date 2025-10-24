import { z } from "zod";
import { subscriptionPlanSchema } from "@/lib/validations/subscription";

export type PricingPlan = z.infer<typeof subscriptionPlanSchema>;

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: "basic-monthly",
        name: "Basic",
        price: 599,
        features: ["5 Projects", "Basic Analytics", "Community Support"],
        duration: "Monthly",
        popular: false,
    },
    {
        id: "pro-monthly",
        name: "Pro",
        price: 999,
        features: [
            "Unlimited Projects",
            "Advanced Analytics",
            "Priority Support",
            "Custom Branding",
        ],
        duration: "Monthly",
        popular: true,
    },
    {
        id: "enterprise-annually",
        name: "Enterprise",
        price: 9999,
        features: [
            "All Pro features",
            "Dedicated Account Manager",
            "24/7 Premium Support",
            "Custom Integrations",
        ],
        duration: "Annually",
        popular: false,
    },
];

export const plans = [
    {
        name: "Free",
        popular: false,
        monthlyPrice: 0,
        annualPrice: 0,
        discount: "",
        description:
            "Basic features for up to 10 employees with everything you need.",
        features: {
            basicBlocks: true,
            advanceBlocks: false,
            pages: [true, "~3 Free"],
            templates: false,
            usage: "1 Personal Project",
            support: false,
        },
    },
    {
        name: "Pro",
        popular: true,
        monthlyPrice: 599,
        annualPrice: 6000,
        discount: "17% off",
        description:
            "Advanced features and reporting, better workflows and automation.",
        features: {
            basicBlocks: true,
            advanceBlocks: true,
            pages: [true, "All Pages"],
            templates: false,
            usage: "Unlimited Projects",
            support: true,
        },
    },
    {
        name: "Lifetime",
        popular: false,
        monthlyPrice: 18000,
        annualPrice: 18000,
        lifetime: true,
        description:
            "Personalized service and enterprise security for large teams.",
        features: {
            basicBlocks: true,
            advanceBlocks: true,
            pages: [true, "All Pages"],
            templates: true,
            usage: "Unlimited Projects",
            support: true,
        },
    },
];
