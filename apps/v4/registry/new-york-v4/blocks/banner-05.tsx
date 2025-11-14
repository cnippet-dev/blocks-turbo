"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Banner03() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="w-full overflow-hidden bg-linear-to-r my-10 from-amber-100 to-orange-500 dark:from-amber-600 dark:to-orange-600">
            <div className="flex items-center gap-4 px-6 py-2">
                <div className="rounded-lg bg-white p-2.5 dark:bg-white/10 dark:backdrop-blur">
                    <Zap className="h-5 w-5 text-amber-700 dark:text-yellow-300" />
                </div>

                <div className="flex-1">
                    <h3 className="text-sm font-semibold text-amber-900 dark:text-white">
                        Upgrade to Premium
                    </h3>
                    <p className="mt-0.5 text-xs text-amber-800 dark:text-amber-50">
                        Unlock unlimited features and priority support for your
                        team.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white text-amber-700 hover:bg-amber-50 dark:border-0 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                    >
                        Learn more
                    </Button>
                    <Button
                        size="sm"
                        className="bg-yellow-300 text-black hover:bg-yellow-400 dark:bg-white/90 dark:text-amber-700 dark:hover:bg-white"
                    >
                        Upgrade
                    </Button>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="shrink-0 p-1 text-white hover:text-white dark:text-white/60 dark:hover:text-white"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
