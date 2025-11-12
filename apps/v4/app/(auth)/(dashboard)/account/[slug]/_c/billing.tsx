"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    PlusCircle,
    CreditCard,
    FileText,
    Download,
    MoreHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { getUserPayments } from "@/lib/actions/payment.actions";

interface PaymentMethod {
    id: string;
    type: string;
    last4: string;
    expiry: string;
    default: boolean;
}

interface InvoiceData {
    id: string;
    date: string;
    amount: string;
    status: string;
    downloadLink: string;
}

export default function BillingPage() {
    const { data: session, status } = useSession();
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
        {
            id: "1",
            type: "Visa",
            last4: "4242",
            expiry: "12/26",
            default: true,
        },
        {
            id: "2",
            type: "Mastercard",
            last4: "5555",
            expiry: "08/25",
            default: false,
        },
    ]);
    const [invoices, setInvoices] = useState<InvoiceData[]>([]);
    const [isLoadingInvoices, setIsLoadingInvoices] = useState(true);
    const [hasLoadedInvoices, setHasLoadedInvoices] = useState(false);

    const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);
    const [newCardNumber, setNewCardNumber] = useState("");
    const [newCardExpiry, setNewCardExpiry] = useState("");
    const [newCardCVC, setNewCardCVC] = useState("");

    useEffect(() => {
        const fetchInvoices = async () => {
            if (status === "loading" || hasLoadedInvoices) return;
            if (!session?.user?.id) {
                setIsLoadingInvoices(false);
                toast.info("Please sign in to view your billing history.");
                return;
            }

            setIsLoadingInvoices(true);
            const result = await getUserPayments();
            if (result.error) {
                toast.error(result.error);
                setInvoices([]);
            } else if (result.payments) {
                const fetchedInvoices: InvoiceData[] = result.payments.map(
                    //eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (payment: any) => ({
                        id: payment.razorpayOrderId || payment.id,
                        date: new Date(payment.createdAt).toLocaleDateString(),
                        amount: `₹${(payment.amount || 0).toFixed(2)}`,
                        status: payment.status,
                        downloadLink: `#`,
                    }),
                );
                setInvoices(fetchedInvoices);
            }
            setIsLoadingInvoices(false);
            setHasLoadedInvoices(true);
        };

        fetchInvoices();
    }, [session, status, hasLoadedInvoices]);

    const handleAddPaymentMethod = () => {
        if (!newCardNumber || !newCardExpiry || !newCardCVC) {
            toast.error("Please fill all card details.");
            return;
        }
        const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!expiryRegex.test(newCardExpiry)) {
            toast.error("Invalid expiry date format. Use MM/YY.");
            return;
        }

        toast.info("Adding payment method... (Placeholder)");
        const newMethod = {
            id: String(Date.now()),
            type: newCardNumber.startsWith("4")
                ? "Visa"
                : newCardNumber.startsWith("5")
                  ? "Mastercard"
                  : "Card", // Simple guess
            last4: newCardNumber.slice(-4),
            expiry: newCardExpiry,
            default: paymentMethods.length === 0,
        };

        setPaymentMethods((prevMethods) => {
            const updatedMethods = prevMethods.map((method) => ({
                ...method,
                default: false,
            }));
            return [...updatedMethods, newMethod];
        });

        setNewCardNumber("");
        setNewCardExpiry("");
        setNewCardCVC("");
        setIsAddPaymentModalOpen(false);
        toast.success("Payment method added! (Placeholder)");
    };

    const handleRemovePaymentMethod = (id: string) => {
        setPaymentMethods((prevMethods) => {
            const updatedMethods = prevMethods.filter(
                (method) => method.id !== id,
            );
            if (
                paymentMethods.find((m) => m.id === id)?.default &&
                updatedMethods.length > 0
            ) {
                updatedMethods[0].default = true;
            }
            return updatedMethods;
        });
        toast.success("Payment method removed! (Placeholder)");
    };

    const handleSetDefaultPaymentMethod = (id: string) => {
        setPaymentMethods((prevMethods) =>
            prevMethods.map((method) => ({
                ...method,
                default: method.id === id,
            })),
        );
        toast.success("Default payment method updated! (Placeholder)");
    };

    const handleDownloadInvoice = (invoiceId: string) => {
        toast.info(`Downloading invoice ${invoiceId}... (Placeholder)`);
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

    if (!session?.user) {
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
                    Payment Methods
                </h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    Manage your stored payment methods for seamless transactions.
                </p>
                
                {paymentMethods.length === 0 ? (
                    <div className="mb-4 flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <CreditCard
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    No payment methods
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Add a payment method to get started
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-4 space-y-2">
                        {paymentMethods.map((method) => (
                            <div
                                key={method.id}
                                className="flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                        <CreditCard
                                            className="h-4 w-4 dark:text-gray-300"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                            {method.type} ending in {method.last4}
                                        </p>
                                        <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                            Expires {method.expiry}
                                            {method.default && (
                                                <Badge
                                                    variant="secondary"
                                                    className="ml-2 bg-green-100 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                >
                                                    Default
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {method.default ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8 bg-transparent"
                                                aria-label="More actions"
                                            >
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="dark:border-neutral-800 dark:bg-neutral-950"
                                        >
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    handleRemovePaymentMethod(
                                                        method.id,
                                                    )
                                                }
                                            >
                                                Remove
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                handleSetDefaultPaymentMethod(
                                                    method.id,
                                                )
                                            }
                                        >
                                            Set Default
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() =>
                                                handleRemovePaymentMethod(
                                                    method.id,
                                                )
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <Dialog
                    open={isAddPaymentModalOpen}
                    onOpenChange={setIsAddPaymentModalOpen}
                >
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add Payment Method
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="dark:border-neutral-800 dark:bg-neutral-950">
                        <DialogHeader>
                            <DialogTitle className="dark:text-gray-100">
                                Add New Payment Method
                            </DialogTitle>
                            <DialogDescription className="dark:text-gray-400">
                                Enter your card details to add a new payment method.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="cardNumber" className="dark:text-gray-300">
                                    Card Number
                                </Label>
                                <Input
                                    id="cardNumber"
                                    placeholder="**** **** **** 1234"
                                    value={newCardNumber}
                                    onChange={(e) =>
                                        setNewCardNumber(e.target.value)
                                    }
                                    className="dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiryDate" className="dark:text-gray-300">
                                        Expiry Date (MM/YY)
                                    </Label>
                                    <Input
                                        id="expiryDate"
                                        placeholder="MM/YY"
                                        value={newCardExpiry}
                                        onChange={(e) =>
                                            setNewCardExpiry(e.target.value)
                                        }
                                        className="dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc" className="dark:text-gray-300">CVC</Label>
                                    <Input
                                        id="cvc"
                                        placeholder="XXX"
                                        value={newCardCVC}
                                        onChange={(e) =>
                                            setNewCardCVC(e.target.value)
                                        }
                                        className="dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    setIsAddPaymentModalOpen(false)
                                }
                            >
                                Cancel
                            </Button>
                            <Button onClick={handleAddPaymentMethod}>
                                Add Method
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                    Your payment methods are securely stored and encrypted.
                </p>
            </div>

            <Separator />

            <div>
                <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Billing History
                </h2>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                    View your past invoices and transaction history.
                </p>
                
                {isLoadingInvoices ? (
                    <div className="flex min-h-[200px] items-center justify-center">
                        <div className="flex items-center gap-2">
                            <div className="loader"></div>
                            <span>Loading invoices...</span>
                        </div>
                    </div>
                ) : invoices.length === 0 ? (
                    <div className="mb-4 flex items-center justify-between rounded-md border border-gray-200 p-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="flex items-center space-x-3">
                            <div className="bg-background text-foreground/80 grid h-8 w-8 place-items-center rounded-md border dark:border-neutral-800">
                                <FileText
                                    className="h-4 w-4 dark:text-gray-300"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="text-foreground text-sm font-medium text-pretty dark:text-gray-200">
                                    No invoices found
                                </p>
                                <div className="text-muted-foreground truncate text-sm dark:text-gray-400">
                                    Your billing history will appear here
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mb-4 overflow-hidden rounded-md border border-gray-200 dark:border-neutral-800">
                        <Table>
                            <TableHeader>
                                <TableRow className="dark:border-neutral-800">
                                    <TableHead className="dark:text-gray-300">Invoice ID</TableHead>
                                    <TableHead className="dark:text-gray-300">Date</TableHead>
                                    <TableHead className="dark:text-gray-300">Amount</TableHead>
                                    <TableHead className="dark:text-gray-300">Status</TableHead>
                                    <TableHead className="text-right dark:text-gray-300">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.id} className="dark:border-neutral-800">
                                        <TableCell className="font-medium dark:text-gray-200">
                                            {invoice.id}
                                        </TableCell>
                                        <TableCell className="dark:text-gray-300">{invoice.date}</TableCell>
                                        <TableCell className="dark:text-gray-300">{invoice.amount}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    invoice.status === "SUCCESS"
                                                        ? "default"
                                                        : "secondary"
                                                }
                                                className={
                                                    invoice.status === "SUCCESS"
                                                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                                }
                                            >
                                                {invoice.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() =>
                                                    handleDownloadInvoice(
                                                        invoice.id,
                                                    )
                                                }
                                            >
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}

                <p className="text-xs text-gray-500 dark:text-gray-500">
                    Download your invoices for accounting and record keeping.
                </p>
            </div>
        </div>
    );
}
