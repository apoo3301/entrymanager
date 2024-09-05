"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/server/client";
import { Button } from "@/components/ui/button";

const CustomerPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const customerId = params.id;

  // Fetch customer details using trpc
  const { data: customer, isLoading, isError } = trpc.customers.getById.useQuery(customerId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading customer data</div>;

  // Check if customer data is available
  if (!customer) {
    return <div>Customer not found</div>;
  }

  const handleBack = () => {
    router.push('/agency/profile/admin-dashboard/customers');
  };

  return (
    <div className="m-10 flex flex-col gap-5">
      <Button onClick={handleBack} className="mb-4">Back to Customers List</Button>
      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">Customer Details</h2>
        <div className="mb-4">
          <strong>Full Name:</strong> {customer.fullname}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {customer.email}
        </div>
        <div className="mb-4">
          <strong>Duration:</strong> {customer.duree}
        </div>
        <div className="mb-4">
          <strong>Created At:</strong> {new Date(customer.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
