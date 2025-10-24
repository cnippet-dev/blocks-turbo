import type { Metadata } from "next";
import "./globals.css";
import { Funnel_Display, Open_Sans } from "next/font/google";

import AuthProvider from "@/providers/auth-provider";
import ThemeProvider from "@/providers/theme-provider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BASE_URL } from "@/config/docs";
import { ProStatusProvider } from "@/providers/pro-status-provider";

const funnel = Funnel_Display({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const open_sans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: {
        default: "Cnippet Blocks",
        template: `%s - Cnippet Blocks`,
    },
    description: "",

    applicationName: "Cnippet Blocks",

    keywords: [],
    authors: [{ name: "Cnippet Team", url: BASE_URL }],
    category: "Technology",

    openGraph: {
        type: "website",
        title: "Cnippet Blocks",
        description:
            "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
        url: BASE_URL,
        images: [
            {
                url: `${BASE_URL}/images/site.png`,
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
        images: [`${BASE_URL}/images/site.png`],
        site: "@cnippet_ui",
        creator: "@cnippet_ui",
    },

    alternates: {
        canonical: BASE_URL,
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${funnel.className} ${open_sans.className} dark:bg-background`}
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
