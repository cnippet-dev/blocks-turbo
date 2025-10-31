import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import AuthProvider from "@/providers/auth-provider";
import ThemeProvider from "@/providers/theme-provider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BASE_URL } from "@/config/docs";
import { ProStatusProvider } from "@/providers/pro-status-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: "Cnippet Blocks",
        template: `%s - Cnippet Blocks`,
    },
    description:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",

    applicationName: "Cnippet Blocks",

    keywords: ["UI components", "React components", "open source UI kit"],
    authors: [{ name: "Cnippet Team", url: BASE_URL }],
    category: "Technology",

    openGraph: {
        type: "website",
        title: "Cnippet Blocks",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        images: [
            {
                url: `${BASE_URL}/images/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Cnippet Blocks Component Library",
            },
        ],
        siteName: "Cnippet Blocks",
        locale: "en_US",
    },

    twitter: {
        card: "summary_large_image",
        title: "Cnippet Blocks",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        images: [`${BASE_URL}/images/og-image.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png" },
        ],
        apple: [{ url: "/apple-icon.png" }],
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased`}
            >
                <AuthProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <ProStatusProvider>{children}</ProStatusProvider>
                        <Sonner richColors expand={true} position="top-right" />
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
