"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

import { useSessionCache } from "@/hooks/use-session-cache";

interface ProStatusContextType {
    isPro: boolean;
    isStarter: boolean;
    plan: string | null;
    isLoading: boolean;
}

const ProStatusContext = createContext<ProStatusContextType | undefined>(
    undefined,
);

export const ProStatusProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { status: sessionStatus, data: session } = useSessionCache();
    const [proStatus, setProStatus] = useState<ProStatusContextType>({
        isPro: false,
        isStarter: false,
        plan: null,
        isLoading: true,
    });

    // Memoize the fetch function to prevent unnecessary re-creations
    const fetchStatus = useCallback(async () => {
        try {
            const response = await fetch("/api/pro");
            const data = await response.json();
            setProStatus({ 
                isPro: data.isPro || false, 
                isStarter: data.isStarter || false,
                plan: data.plan || null,
                isLoading: false 
            });
        } catch (error) {
            console.error("Failed to fetch pro status", error);
            setProStatus({ 
                isPro: false, 
                isStarter: false,
                plan: null,
                isLoading: false 
            });
        }
    }, []);

    useEffect(() => {
        if (sessionStatus === "loading") {
            return;
        }

        if (sessionStatus === "unauthenticated") {
            setProStatus({ 
                isPro: false, 
                isStarter: false,
                plan: null,
                isLoading: false 
            });
            return;
        }

        // Only fetch if we have a session and haven't fetched yet
        if (sessionStatus === "authenticated" && session?.user?.email) {
            fetchStatus();
        }
    }, [sessionStatus, session?.user?.email, fetchStatus]);

    return (
        <ProStatusContext.Provider value={proStatus}>
            {children}
        </ProStatusContext.Provider>
    );
};

export const useProStatusContext = () => {
    const context = useContext(ProStatusContext);
    if (context === undefined) {
        throw new Error(
            "useProStatusContext must be used within a ProStatusProvider",
        );
    }
    return context;
};
