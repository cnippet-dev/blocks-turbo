"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2, Palette, Bell, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { updateUserSettings } from "@/lib/actions/profile.actions";

import { useSessionCache } from "@/hooks/use-session-cache";

export default function SettingsPage() {
    const { data: session, status, update } = useSessionCache();
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [inAppNotifications, setInAppNotifications] = useState(false);
    const [language, setLanguage] = useState("en");
    const [timezone, setTimezone] = useState("UTC");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            setTheme(
                (session.user.preferredTheme as "light" | "dark" | "system") ||
                    "system",
            );
            setEmailNotifications(session.user.emailNotifications ?? true);
            setInAppNotifications(session.user.inAppNotifications ?? false);
            setLanguage(session.user.preferredLanguage || "en");
            setTimezone(session.user.preferredTimezone || "UTC");
        }
    }, [session, status]);

    const handleSaveSettings = async () => {
        setIsSaving(true);
        try {
            const result = await updateUserSettings({
                theme,
                emailNotifications,
                inAppNotifications,
                language,
                timezone,
            });

            if ("success" in result && result.success) {
                toast.success("Settings saved successfully!");
                // Update the session with new settings
                await update({
                    preferredTheme: theme,
                    emailNotifications,
                    inAppNotifications,
                    preferredLanguage: language,
                    preferredTimezone: timezone,
                });
            } else {
                if ("error" in result) {
                    if ("general" in result.error) {
                        toast.error(result.error.general);
                    } else {
                        // Handle field-specific errors
                        const fieldErrors = Object.values(result.error).flat();
                        toast.error(
                            fieldErrors[0] || "Failed to save settings",
                        );
                    }
                } else {
                    toast.error("Failed to save settings");
                }
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Settings save error:", error);
        } finally {
            setIsSaving(false);
        }
    };

    if (status === "loading") {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <div className="flex items-center gap-2">
                    <div className="loader"></div>
                    <span>Retrieving data</span>
                </div>
            </div>
        );
    }

    if (status === "unauthenticated") {
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
            <div>
                <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Appearance
                </h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Customize how the app looks and feels to match your preferences.
                </p>
                <div className="mb-4 flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                    <div className="flex items-center space-x-3">
                        <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                            <Palette
                                className="h-4 w-4 dark:text-gray-300"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="min-w-0">
                            <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                Theme
                            </p>
                            <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                Choose your preferred theme
                            </div>
                        </div>
                    </div>
                    <Select
                        value={theme}
                        onValueChange={(value: "light" | "dark" | "system") => setTheme(value)}
                    >
                        <SelectTrigger className="w-32 dark:border-neutral-800 dark:bg-neutral-950">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="dark:border-neutral-800 dark:bg-neutral-950">
                            <SelectItem value="light" className="dark:text-gray-200">Light</SelectItem>
                            <SelectItem value="dark" className="dark:text-gray-200">Dark</SelectItem>
                            <SelectItem value="system" className="dark:text-gray-200">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                    The system theme will automatically switch based on your device settings.
                </p>
            </div>

            <Separator />

            <div>
                <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Notifications
                </h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Choose how you want to receive notifications and updates.
                </p>
                
                <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <Bell
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    Email Notifications
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Receive updates via email
                                </div>
                            </div>
                        </div>
                        <Switch
                            id="email-notifications"
                            checked={emailNotifications}
                            onCheckedChange={setEmailNotifications}
                        />
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <Bell
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    In-App Notifications
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Show notifications within the app
                                </div>
                            </div>
                        </div>
                        <Switch
                            id="in-app-notifications"
                            checked={inAppNotifications}
                            onCheckedChange={setInAppNotifications}
                        />
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                    You can change these settings at any time.
                </p>
            </div>

            <Separator />

            <div>
                <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Localization
                </h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Set your preferred language and timezone for a personalized experience.
                </p>
                
                <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <Globe
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    Language
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Choose your preferred language
                                </div>
                            </div>
                        </div>
                        <Select
                            value={language}
                            onValueChange={setLanguage}
                        >
                            <SelectTrigger className="w-32 dark:border-neutral-800 dark:bg-neutral-950">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="dark:border-neutral-800 dark:bg-neutral-950">
                                <SelectItem value="en" className="dark:text-gray-200">English</SelectItem>
                                <SelectItem value="es" className="dark:text-gray-200">Spanish</SelectItem>
                                <SelectItem value="fr" className="dark:text-gray-200">French</SelectItem>
                                <SelectItem value="de" className="dark:text-gray-200">German</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <Globe
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    Timezone
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Set your local timezone
                                </div>
                            </div>
                        </div>
                        <Select
                            value={timezone}
                            onValueChange={setTimezone}
                        >
                            <SelectTrigger className="w-32 dark:border-neutral-800 dark:bg-neutral-950">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="dark:border-neutral-800 dark:bg-neutral-950">
                                <SelectItem value="UTC" className="dark:text-gray-200">UTC</SelectItem>
                                <SelectItem value="EST" className="dark:text-gray-200">EST</SelectItem>
                                <SelectItem value="PST" className="dark:text-gray-200">PST</SelectItem>
                                <SelectItem value="GMT" className="dark:text-gray-200">GMT</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                    These settings affect how dates, times, and content are displayed.
                </p>
            </div>

            <Separator />

            <div className="flex justify-end">
                <Button onClick={handleSaveSettings} disabled={isSaving} size="sm">
                    {isSaving ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                        </>
                    ) : (
                        "Save Settings"
                    )}
                </Button>
            </div>
        </div>
    );
}
