"use client";

import { trpc } from "@/server/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CustomerDetailPage({ params }: { params: any }) {
  const { id } = params;
  const router = useRouter();

  const { data, isLoading, error } = trpc.customers.getById.useQuery({
    id: id,
  });

  useEffect(() => {
    if (error) {
      console.error('Failed to load customer:', error.message);
      router.push('/agency/profile/admin-panel/customers');
    }
  }, [error, router]);

  if (isLoading) return <p>Loading...</p>;

  if (!data) return <p>No customer found</p>;

  return (
    <div>
      <h1>{data.fullname}</h1>
      <p>Email: {data.email}</p>
      <p>Duration: {data.duree} minutes</p>
    </div>
  );
}
