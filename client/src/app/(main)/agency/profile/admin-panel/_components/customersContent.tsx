"use client"

import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { trpc } from "@/server/client";
import CustomersTable from "@/components/customersTables";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DEFAULT_PAGE = 1;
const DEFAULT_TOTAL_ITEMS = 7;

function CustomersContent() {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [currentSearch, setCurrentSearch] = useState<string>("");
    const [showForm, setShowForm] = useState<boolean>(false);
    const [newCustomer, setNewCustomer] = useState({
        fullname: "",
        email: "",
        duree: 0,
    });
    const [isAdding, setIsAdding] = useState<boolean>(false);

    const page = +(searchParams.get("page") ?? DEFAULT_PAGE);
    const totalItems = +(searchParams.get("totalItems") ?? DEFAULT_TOTAL_ITEMS);
    const search = searchParams.get("search") || "";

    const { data, isLoading, refetch } = trpc.customers.get.useQuery({
        page: page < 1 ? DEFAULT_PAGE : page,
        totalItems: totalItems < 1 ? DEFAULT_TOTAL_ITEMS : totalItems,
        search,
    });

    const addCustomerMutation = trpc.customers.create.useMutation({
        onMutate: () => setIsAdding(true),
        onSuccess: async () => {
            await refetch();
            setNewCustomer({ fullname: "", email: "", duree: 0 });
            setShowForm(false);
        },
        onError: (error) => console.error("Failed to add customer:", error.message),
        onSettled: () => setIsAdding(false),
    });

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("search", currentSearch);
        return params.toString();
    };

    const handleAddCustomer = () => {
        if (newCustomer.fullname && newCustomer.email && newCustomer.duree > 0) {
            addCustomerMutation.mutate(newCustomer);
        } else {
            console.error("Please fill out all fields correctly.");
        }
    };

    useEffect(() => {
        setCurrentSearch(search);
    }, [search]);
    return (
        <div className="m-10 flex flex-col gap-5">
            <div className="flex gap-3 items-center">
                <Input
                    value={currentSearch}
                    placeholder="Search"
                    onChange={(e) => setCurrentSearch(e.target.value)}
                    className="mr-2"
                />
                <Button
                    onClick={() => router.push(`${pathname}?${handleSearch()}`)}
                    className="mr-2"
                >
                    Search
                </Button>
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cancel" : "Add Customer"}
                </Button>
            </div>
            {showForm && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Add New Customer</h2>
                    <Input
                        placeholder="Full Name"
                        value={newCustomer.fullname}
                        onChange={(e) => setNewCustomer({ ...newCustomer, fullname: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        placeholder="Email"
                        type="email"
                        value={newCustomer.email}
                        onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                        className="mb-2"
                    />
                    <Input
                        placeholder="Duration (in minutes)"
                        type="number"
                        value={newCustomer.duree}
                        onChange={(e) => setNewCustomer({ ...newCustomer, duree: +e.target.value })}
                        className="mb-2"
                    />
                    <Button
                        onClick={handleAddCustomer}
                        disabled={isAdding}
                    >
                        {isAdding ? "Adding..." : "Add Customer"}
                    </Button>
                </div>
            )}
            <CustomersTable
                customers={data?.items ?? []}
                isLoading={isLoading}
                totalPages={data?.totalPages ?? 1}
                currentPage={page}
                totalItems={totalItems}
            />
        </div>
    )
}

export default CustomersContent