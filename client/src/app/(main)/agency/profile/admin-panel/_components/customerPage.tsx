import { Button } from '@/components/ui/button'
import { trpc } from '@/server/client';
import { useRouter } from 'next/router';
import React from 'react'

function CustomerIdPage() {
  const router = useRouter();
  const { id } = router.query; // Assurez-vous que id est bien défini

  // Assurez-vous que id est une chaîne
  const { data: customer, isLoading, isError } = trpc.customers.getById.useQuery(id as string, {
    enabled: !!id, // Ne fait la requête que si id est défini
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading customer data</div>;

  if (!customer) {
    return <div>Customer not found</div>;
  }

  const handleBack = () => {
    router.push('/agency/profile/admin-dashboard/customers');
  };
  return (
    <>
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
    </>
  )
}

export default CustomerIdPage