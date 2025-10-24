"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { deleteContactMessage } from "@/lib/actions/contact.actions";

type ContactMessage = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
};

interface ContactMessagesTableProps {
    messages: ContactMessage[];
}

export function ContactMessagesTable({ messages }: ContactMessagesTableProps) {
    const [expandedMessages, setExpandedMessages] = useState<Set<string>>(
        new Set(),
    );
    const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());

    const toggleMessageExpansion = (messageId: string) => {
        const newExpanded = new Set(expandedMessages);
        if (newExpanded.has(messageId)) {
            newExpanded.delete(messageId);
        } else {
            newExpanded.add(messageId);
        }
        setExpandedMessages(newExpanded);
    };

    const handleDeleteMessage = async (messageId: string) => {
        if (confirm("Are you sure you want to delete this message?")) {
            setDeletingIds((prev) => new Set(prev).add(messageId));

            try {
                const result = await deleteContactMessage(messageId);

                if (result.success) {
                    toast.success("Message deleted successfully");
                    // Refresh the page to update the list
                    window.location.reload();
                } else {
                    toast.error(result.error || "Failed to delete message");
                }
            } catch (error) {
                console.error("Delete error:", error);
                toast.error("Failed to delete message");
            } finally {
                setDeletingIds((prev) => {
                    const newSet = new Set(prev);
                    newSet.delete(messageId);
                    return newSet;
                });
            }
        }
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (messages.length === 0) {
        return (
            <Card>
                <CardContent className="py-8">
                    <p className="text-center text-gray-500">
                        No contact messages found
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact Messages ({messages.length})</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages.map((message) => (
                            <TableRow key={message.id}>
                                <TableCell className="font-medium">
                                    {message.name}
                                </TableCell>
                                <TableCell>
                                    <a
                                        href={`mailto:${message.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {message.email}
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <div
                                        className="max-w-xs truncate"
                                        title={message.subject}
                                    >
                                        {message.subject}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="secondary">
                                        {formatDate(message.createdAt)}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                toggleMessageExpansion(
                                                    message.id,
                                                )
                                            }
                                        >
                                            {expandedMessages.has(
                                                message.id,
                                            ) ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() =>
                                                handleDeleteMessage(message.id)
                                            }
                                            disabled={deletingIds.has(
                                                message.id,
                                            )}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Expanded message details */}
                {Array.from(expandedMessages).map((messageId) => {
                    const message = messages.find((m) => m.id === messageId);
                    if (!message) return null;

                    return (
                        <Card key={`expanded-${messageId}`} className="mt-4">
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Message from {message.name}
                                </CardTitle>
                                <div className="text-sm text-gray-500">
                                    {formatDate(message.createdAt)}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <label className="font-medium">
                                            Subject:
                                        </label>
                                        <p className="text-gray-700">
                                            {message.subject}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Message:
                                        </label>
                                        <p className="whitespace-pre-wrap text-gray-700">
                                            {message.message}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Contact:
                                        </label>
                                        <p className="text-gray-700">
                                            <a
                                                href={`mailto:${message.email}`}
                                                className="text-blue-600 hover:underline"
                                            >
                                                {message.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </CardContent>
        </Card>
    );
}
