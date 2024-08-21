"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

import { User } from '@/types/user';

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  isLoading,
  totalPages,
  currentPage,
  totalItems,
}) => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden md:table-cell">ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden sm:table-cell">name</TableHead>
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
                </TableRow>
              ))}
            {!isLoading &&
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="hidden md:inline">
                    <div className="text-sm text-muted-foreground">
                      {user.id}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {user.name ?? "N/A"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user.createdAt}
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
                  href={`/admin/users?page=${
                    currentPage - 1
                  }&totalItems=${totalItems}`}
                />
              </PaginationItem>
            )}
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`/admin/users?page=${
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
                  href={`/admin/users?page=${
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

export default UsersTable;