import { getContactMessages } from "@/lib/actions/contact.actions";
import { ContactMessagesTable } from "./_components/contact-messages-table";

export default async function AdminContactsPage() {
    const result = await getContactMessages();

    return (
        <div className="container mx-auto py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Contact Messages</h1>
                <p className="mt-2 text-gray-600">
                    Manage and view contact form submissions
                </p>
            </div>

            {result.success && result.data ? (
                <ContactMessagesTable messages={result.data} />
            ) : (
                <div className="py-8 text-center">
                    <p className="text-gray-500">
                        {result.error || "No contact messages found"}
                    </p>
                </div>
            )}
        </div>
    );
}
