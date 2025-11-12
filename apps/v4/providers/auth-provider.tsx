"use client";

import { SessionProvider } from "next-auth/react";

interface ProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: ProviderProps) {
    return (
        <SessionProvider
            // Reduce session polling
            refetchInterval={5 * 60} // 5 minutes
            refetchOnWindowFocus={false}
            refetchWhenOffline={false}
        >
            {children}
        </SessionProvider>
    );
}
