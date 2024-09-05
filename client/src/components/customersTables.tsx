"use client";

import React from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Customer {
  id: string;
  email: string;
  fullname: string;
  duree: number;
  createdAt: string;
}

interface CustomersTableProps {
  customers: Customer[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

const CustomersTable = ({
  customers,
  isLoading,
  totalPages,
  currentPage,
  totalItems,
}: CustomersTableProps) => {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/agency/profile/admin-panel/customers/${id}`);
  };

  // Trier les clients par date de création décroissante (juste pour assurer le bon ordre côté client)
  const sortedCustomers = [...customers].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden sm:table-cell">Full Name</TableHead>
              <TableHead className="hidden md:table-cell">Duration</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index} className="animate-pulse">
                  <TableCell width={"40%"}>
                    <div className="p-5 bg-gray-400/30 rounded-xl"></div>
                  </TableCell>
                  <TableCell>
                    <div className="p-5 bg-gray-400/30 rounded-xl"></div>
                  </TableCell>
                  <TableCell>
                    <div className="p-5 bg-gray-400/30 rounded-xl"></div>
                  </TableCell>
                  <TableCell>
                    <div className="p-5 bg-gray-400/30 rounded-xl"></div>
                  </TableCell>
                  <TableCell>
                    <div className="p-5 bg-gray-400/30 rounded-xl"></div>
                  </TableCell>
                </TableRow>
              ))}
            {!isLoading &&
              sortedCustomers.map((customer) => (
                <TableRow key={customer.id} onClick={() => handleRowClick(customer.id)} className="cursor-pointer hover:bg-gray-100">
                  <TableCell className="hidden md:inline">
                    <div className="text-sm text-muted-foreground">
                      {customer.id}
                    </div>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {customer.fullname}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {customer.duree}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {customer.createdAt}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/agency/profile/admin-panel/customers?page=${
                    currentPage - 1
                  }&totalItems=${totalItems}`}
                />
              </PaginationItem>
            )}
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`/agency/profile/admin-panel/customers?page=${
                    index + 1
                  }&totalItems=${totalItems}`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            {totalPages !== currentPage && (
              <PaginationItem>
                <PaginationNext
                  href={`/agency/profile/admin-panel/customers?page=${
                    currentPage + 1
                  }&totalItems=${totalItems}`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
};

export default CustomersTable;
