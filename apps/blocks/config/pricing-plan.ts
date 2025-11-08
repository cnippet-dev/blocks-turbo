import { z } from "zod";
import { subscriptionPlanSchema } from "@/lib/validations/subscription";

export type PricingPlan = z.infer<typeof subscriptionPlanSchema>;

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: "basic-monthly",
        name: "Basic",
        price: 1,
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
            "Low barrier to entry, drive adoption. Perfect for personal projects.",
        features: {
            basicBlocks: [true, "15+ basic sections"],
            advanceBlocks: false,
            pages: [true, "5 starter templates"],
            templates: false,
            usage: "Personal use only",
            support: "Community support",
        },
    },
    {
        name: "Starter",
        popular: true,
        monthlyPrice: 1,
        annualPrice: 4999,
        discount: "16% off",
        description:
            "Perfect for individual developers. All sections, pages, and premium templates.",
        features: {
            basicBlocks: [true, "All 100+ sections"],
            advanceBlocks: [true, "All 50+ pages"],
            pages: [true, "20+ premium templates"],
            templates: true,
            usage: "Commercial license",
            support: "Priority support",
        },
    },
    {
        name: "Pro",
        popular: false,
        monthlyPrice: 999,
        annualPrice: 9999,
        discount: "17% off",
        description:
            "For freelancers & small agencies. Advanced layouts, Figma files, and consultation.",
        features: {
            basicBlocks: [true, "Everything in Starter"],
            advanceBlocks: [true, "100+ premium templates"],
            pages: [true, "Advanced layouts"],
            templates: true,
            usage: "White-label usage rights",
            support: "1:1 setup consultation",
        },
    },
];

export const additionalPlans = [
    {
        name: "Agency",
        popular: false,
        monthlyPrice: 2499,
        annualPrice: 24999,
        discount: "17% off",
        description:
            "For teams & enterprises. Team accounts, custom requests, and dedicated support.",
        features: {
            basicBlocks: [true, "Everything in Pro"],
            advanceBlocks: [true, "Team accounts (up to 5 seats)"],
            pages: [true, "Custom component requests"],
            templates: true,
            usage: "Source code access",
            support: "Dedicated support channel",
        },
    },
    {
        name: "Lifetime",
        popular: false,
        monthlyPrice: 14999,
        annualPrice: 14999,
        lifetime: true,
        discount: "Limited Time",
        description:
            "One-time payment. All Pro tier features with lifetime updates for 3+ years.",
        features: {
            basicBlocks: [true, "All current Pro tier features"],
            advanceBlocks: [true, "Lifetime updates (3+ years)"],
            pages: [true, "All future templates (2 years)"],
            templates: true,
            usage: "Commercial license forever",
            support: "Priority support",
        },
    },
];
