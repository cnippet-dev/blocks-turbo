"use client";

import { useState } from "react";
import { AlertCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Banner03() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="w-full overflow-hidden border-l-4 border-l-blue-500 bg-linear-to-r from-blue-50 to-cyan-50 dark:border-l-cyan-400 dark:from-slate-800 dark:to-slate-700">
            <div className="flex items-center gap-4 px-6 py-2">
                <AlertCircle className="h-6 w-6 shrink-0 text-blue-600 dark:text-cyan-400" />

                <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Important update available
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 dark:text-slate-300">
                        A critical security update is now available. Please
                        update your browser to the latest version.
                    </p>
                </div>

                <Button
                    size="sm"
                    className="shrink-0 bg-blue-600 text-white hover:bg-blue-700 dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
                >
                    Update now
                </Button>

                <button
                    onClick={() => setIsVisible(false)}
                    className="shrink-0 p-1 text-gray-400 hover:text-gray-600 dark:text-slate-400 dark:hover:text-slate-200"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
