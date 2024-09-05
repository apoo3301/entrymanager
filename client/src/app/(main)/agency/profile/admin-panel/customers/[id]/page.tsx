"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FilePenIcon, ChevronDownIcon, TrashIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/server/client";
import Link from "next/link";
import { sendPass } from "@/lib/serverActions";

export default function CustomerDetailPage({ params }: { params: any }) {
    const { id } = params;
    const { toast } = useToast();
    const router = useRouter();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
    const [selectedEmailForDialog, setSelectedEmailForDialog] = useState<string | null>(null);
    const [customerData, setCustomerData] = useState({
        id: '',
        email: '',
        fullName: '',
        duration: '',
        createdAt: '',
        phoneNumber: '',
    });
    const [customerEmails, setCustomerEmails] = useState<string[]>([]);

    const { data, isLoading, error } = trpc.customers.getById.useQuery({ id });
    const { data: emailsData } = trpc.customers.getEmails.useQuery();
    const deleteCustomer = trpc.customers.delete.useMutation({
        onSuccess: () => {
            toast({ description: 'Customer deleted successfully.', variant: 'default' });
            router.push('/agency/profile/admin-panel/customers');
        },
        onError: (error) => {
            toast({ description: `Failed to delete customer: ${error.message}`, variant: 'destructive' });
        },
    });

    const editCustomer = trpc.customers.edit.useMutation({
        onSuccess: () => {
            toast({ description: 'Customer updated successfully.', variant: 'default' });
            setIsEditModalOpen(false);
        },
        onError: (error) => {
            toast({ description: `Failed to update customer: ${error.message}`, variant: 'destructive' });
        },
    });

    useEffect(() => {
        if (error) {
            toast({ description: `Failed to load customer: ${error.message}`, variant: 'destructive' });
            router.push('/agency/profile/admin-panel/customers');
        }
    }, [error, router, toast]);

    useEffect(() => {
        if (data) {
            setCustomerData({
                id: data.id,
                email: data.email,
                fullName: data.fullname,
                duration: data.duree.toString(),
                createdAt: data.createdAt,
                phoneNumber: '',
            });
        }
    }, [data]);

    useEffect(() => {
        if (emailsData) {
            setCustomerEmails([customerData.email || '']);
            setSelectedEmail(customerData.email || '');
        }
    }, [emailsData, customerData.email]);

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

    const handleEmailSelect = (email: string) => {
        setSelectedEmailForDialog(email);
        setIsEmailDialogOpen(true);
        setSelectedEmail(email);
    };

    const send = async () => {
        if (selectedEmail) {
            try {
                await sendPass(selectedEmail);
                toast({ description: 'Your message has been sent.', variant: 'default', title: 'Email sent' });
            } catch (error) {
                toast({ variant: 'destructive', title: 'Uh oh! Something went wrong.', description: 'There was a problem with your request.' });
            }
        } else {
            console.error('No email selected');
        }
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
                        <CardTitle>Contact Pass Manager</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full">
                                        {selectedEmail || "Select Email"}
                                        <ChevronDownIcon className="ml-auto h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    {customerEmails.length > 0 && (
                                        customerEmails.map(email => (
                                            <DropdownMenuItem key={email} onClick={() => handleEmailSelect(email)}>
                                                {email}
                                            </DropdownMenuItem>
                                        ))
                                    )}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Button onClick={send}>Send Pass</Button>
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
            <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Email Details</DialogTitle>
                        <DialogDescription>
                            Here you can see details about the selected email.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="selectedEmail">Selected Email</Label>
                            <Input
                                id="selectedEmail"
                                type="email"
                                value={selectedEmailForDialog || ''}
                                readOnly
                            />
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsEmailDialogOpen(false)}>
                                Close
                            </Button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
