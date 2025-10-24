import { getContactMessages } from "@/lib/actions/contact.actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboardPage() {
    const contactsResult = await getContactMessages();
    const contactCount = contactsResult.success
        ? contactsResult.data?.length || 0
        : 0;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-600">
                    Welcome to the admin dashboard
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Contact Messages
                        </CardTitle>
                        <MessageSquare className="text-muted-foreground h-4 w-4" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{contactCount}</div>
                        <p className="text-muted-foreground text-xs">
                            Total contact form submissions
                        </p>
                        <Link href="/admin/contacts" className="mt-4 block">
                            <Button variant="outline" size="sm">
                                View Messages
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Users
                        </CardTitle>
                        <Users className="text-muted-foreground h-4 w-4" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-muted-foreground text-xs">
                            Total registered users
                        </p>
                        <Link href="/admin/users" className="mt-4 block">
                            <Button variant="outline" size="sm">
                                View Users
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Analytics
                        </CardTitle>
                        <TrendingUp className="text-muted-foreground h-4 w-4" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Coming Soon</div>
                        <p className="text-muted-foreground text-xs">
                            Site analytics and insights
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">
                            No recent activity to display
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Link href="/admin/contacts">
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <MessageSquare className="mr-2 h-4 w-4" />
                                View Contact Messages
                            </Button>
                        </Link>
                        <Link href="/admin/settings">
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <Users className="mr-2 h-4 w-4" />
                                Manage Settings
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
