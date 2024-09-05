"use client";

import { trpc } from "@/server/client";
import { useRouter } from "next/navigation";
import { JSX, SVGProps, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";

export default function CustomerDetailPage({ params }: { params: any }) {
    const { id } = params;
    const router = useRouter();

    const { data, isLoading, error } = trpc.customers.getById.useQuery({ id });
    const deleteCustomer = trpc.customers.delete.useMutation({
        onSuccess: () => {
            console.log('Customer deleted successfully.');
            router.push('/agency/profile/admin-panel/customers'); // Redirect after deletion
        },
        onError: (error) => {
            console.error('Failed to delete customer:', error.message);
        },
    });

    useEffect(() => {
        if (error) {
            console.error('Failed to load customer:', error.message);
            router.push('/agency/profile/admin-panel/customers');
        }
    }, [error, router]);

    if (isLoading) return <p>Loading...</p>;

    if (!data) return <p>No customer found</p>;

    const handleDelete = async () => {
        try {
            await deleteCustomer.mutateAsync(id);
        } catch (error) {
            console.error('Failed to delete customer');
        }
    };

    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>Customer Information</CardTitle>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
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
                            <div className="font-medium">{data.id}</div>
                        </div>
                        <div className="grid gap-1">
                            <div className="text-sm text-muted-foreground">Email</div>
                            <div className="font-medium">
                                <Link href={`mailto:${data.email}`} prefetch={false}>
                                    {data.email}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-1">
                            <div className="text-sm text-muted-foreground">Full Name</div>
                            <div className="font-medium">{data.fullname}</div>
                        </div>
                        <div className="grid gap-1">
                            <div className="text-sm text-muted-foreground">Duration</div>
                            <div className="font-medium">{data.duree} minutes</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-1">
                            <div className="text-sm text-muted-foreground">Created At</div>
                            <div className="font-medium">{data.createdAt}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
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
    );
}

function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
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
