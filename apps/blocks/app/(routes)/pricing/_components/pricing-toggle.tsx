import { Button } from "@/components/ui/button";

interface PricingToggleProps {
    isAnnual: boolean;
    setIsAnnual: (value: boolean) => void;
}

export default function PricingToggle({
    isAnnual,
    setIsAnnual,
}: PricingToggleProps) {
    return (
        <div className="bg-background inline-flex items-center rounded-full border p-1">
            <Button
                variant={isAnnual ? "ghost" : "default"}
                size="sm"
                className={`rounded-full px-4 ${!isAnnual ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setIsAnnual(false)}
            >
                Monthly billing
            </Button>
            <Button
                variant={!isAnnual ? "ghost" : "default"}
                size="sm"
                className={`rounded-full px-4 ${isAnnual ? "bg-primary text-primary-foreground" : ""}`}
                onClick={() => setIsAnnual(true)}
            >
                Annual billing
            </Button>
        </div>
    );
}
