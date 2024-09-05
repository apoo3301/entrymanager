"use client";

import { trpc } from "@/server/client";
import { useRouter } from "next/navigation";
import { JSX, SVGProps, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator"; // Added for payment section
import { FilePenIcon } from "lucide-react";

export default function CustomerDetailPage({ params }: { params: any }) {
    const { id } = params;
    const router = useRouter();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [customerData, setCustomerData] = useState({
        id: '',
        email: '',
        fullName: '',
        duration: '',
        createdAt: '',
        phoneNumber: '',
    });

    const { data, isLoading, error } = trpc.customers.getById.useQuery({ id });
    const deleteCustomer = trpc.customers.delete.useMutation({
        onSuccess: () => {
            console.log('Customer deleted successfully.');
            router.push('/agency/profile/admin-panel/customers');
        },
        onError: (error) => {
            console.error('Failed to delete customer:', error.message);
        },
    });

    const editCustomer = trpc.customers.edit.useMutation({
        onSuccess: () => {
            console.log('Customer updated successfully.');
            setIsEditModalOpen(false);
        },
        onError: (error) => {
            console.error('Failed to update customer:', error.message);
        },
    });

    useEffect(() => {
        if (error) {
            console.error('Failed to load customer:', error.message);
            router.push('/agency/profile/admin-panel/customers');
        }
    }, [error, router]);

    useEffect(() => {
        if (data) {
            setCustomerData({
                id: data.id,
                email: data.email,
                fullName: data.fullname,
                duration: data.duree.toString(),
                createdAt: data.createdAt,
                phoneNumber: '', // You may want to set this if available
            });
        }
    }, [data]);

    if (isLoading) return <p>Loading...</p>;

    if (!data) return <p>No customer found</p>;

    const handleDelete = async () => {
        try {
            await deleteCustomer.mutateAsync(id);
        } catch (error) {
            console.error('Failed to delete customer:', error);
        }
    };

    const handleSaveCustomer = async () => {
        try {
            await editCustomer.mutateAsync({
                id: customerData.id,
                email: customerData.email,
                fullname: customerData.fullName,
                duree: parseFloat(customerData.duration),
            });
        } catch (error) {
            console.error('Failed to update customer:', error);
        }
    };

    const handleEditCustomer = () => {
        setIsEditModalOpen(true);
    };

    return (
        <div className="grid gap-6 md:grid-cols-[1fr_300px] max-w-6xl mx-auto px-4 py-8 md:px-6">
            <div className="grid gap-6">
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Customer Information</CardTitle>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" onClick={handleEditCustomer}>
                                <FilePenIcon className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <TrashIcon className="h-4 w-4" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete the customer information.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <div className="text-sm text-muted-foreground">Customer ID</div>
                                <div className="font-medium">{customerData.id}</div>
                            </div>
                            <div className="grid gap-1">
                                <div className="text-sm text-muted-foreground">Email</div>
                                <div className="font-medium">
                                    <Link href={`mailto:${customerData.email}`} prefetch={false}>
                                        {customerData.email}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <div className="text-sm text-muted-foreground">Full Name</div>
                                <div className="font-medium">{customerData.fullName}</div>
                            </div>
                            <div className="grid gap-1">
                                <div className="text-sm text-muted-foreground">Duration</div>
                                <div className="font-medium">{customerData.duration} minutes</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <div className="text-sm text-muted-foreground">Created At</div>
                                <div className="font-medium">{customerData.createdAt}</div>
                            </div>
                            <div className="grid gap-1">
                                <div className="text-sm text-muted-foreground">Phone Number</div>
                                <div className="font-medium">
                                    <Link href={`tel:${customerData.phoneNumber}`} prefetch={false}>
                                        {customerData.phoneNumber}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Logs</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-1">
                            <div className="text-sm text-muted-foreground">Current Status</div>
                            <div className="font-medium">
                                <Badge variant="secondary">Active</Badge>
                            </div>
                        </div>
                        <Separator />
                        <div className="grid gap-1">
                            <div className="text-sm text-muted-foreground">Modifications History</div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <div>event</div>
                                    <div>user</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Customer</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="Enter subject" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Enter message" className="min-h-[150px]" />
                        </div>
                        <Button>Send Email</Button>
                    </CardContent>
                </Card>
            </div>
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Edit Customer</DialogTitle>
                        <DialogDescription>Update the customer information.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={customerData.email}
                                onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                id="fullName"
                                value={customerData.fullName}
                                onChange={(e) => setCustomerData({ ...customerData, fullName: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="duration">Duration</Label>
                            <Input
                                id="duration"
                                type="number"
                                value={customerData.duration}
                                onChange={(e) => setCustomerData({ ...customerData, duration: e.target.value })}
                            />
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleSaveCustomer}>Save</Button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}
