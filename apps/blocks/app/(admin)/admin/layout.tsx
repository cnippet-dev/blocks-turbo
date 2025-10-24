import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { nextauthOptions } from "@/lib/nextauth-options";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Settings } from "lucide-react";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(nextauthOptions);

    // Redirect if not authenticated or not admin
    if (!session?.user) {
        redirect("/sign-in");
    }

    // You can add admin role check here if needed
    // if (!session.user.isAdmin) {
    //     redirect("/");
    // }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                {/* Sidebar */}
                <div className="min-h-screen w-64 bg-white shadow-sm">
                    <div className="p-6">
                        <h1 className="text-xl font-bold text-gray-900">
                            Admin Panel
                        </h1>
                    </div>

                    <nav className="mt-6">
                        <div className="space-y-2 px-4">
                            <Link href="/admin/contacts">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start"
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Contact Messages
                                </Button>
                            </Link>

                            {/* Add more admin links here */}
                            <Link href="/admin/users">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start"
                                >
                                    <Users className="mr-2 h-4 w-4" />
                                    Users
                                </Button>
                            </Link>

                            <Link href="/admin/settings">
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start"
                                >
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>

                {/* Main content */}
                <div className="flex-1">
                    <main className="p-8">{children}</main>
                </div>
            </div>
        </div>
    );
}
