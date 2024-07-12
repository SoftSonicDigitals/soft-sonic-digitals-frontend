"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CLIENT_TABLE_LIMIT,
  DASHBOARD_TABLE_HEADING,
} from "@/constants/dashboard";
import { getClientCount, getClients } from "@/actions";
import ClientRow from "./ClientRow";
import useSWR from "swr";
import { useRouter, useSearchParams } from "next/navigation";
import usePagination from "@/hooks/usePagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ClientTables = () => {
  const { totalClientCount, isLoading, clients, page } = usePagination();

  const canNextPage = totalClientCount > page * CLIENT_TABLE_LIMIT;

  const canPrevPage = page > 1;
  const totalPage = Math.ceil(totalClientCount / CLIENT_TABLE_LIMIT);

  return (
    <section id="clients_table" className="pt-32">
      <div className="wrapper_container">
        <div className="text-4xl mb-8">{DASHBOARD_TABLE_HEADING}</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Client ID</TableHead>
              <TableHead className="w-[150px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead className="text-right">Service</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {!isLoading &&
              clients?.map(
                ({ client_id, name, email, mobile, service, id }) => (
                  <ClientRow
                    id={id}
                    key={id}
                    clientID={client_id}
                    name={name}
                    email={email}
                    mobile={mobile}
                    service={service}
                  />
                )
              )}

            {/* loading */}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  <div className="flex-center">
                    <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-black" />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {canPrevPage ? (
                <PaginationPrevious
                  href={`/admin/dashboard?page=${page - 1}`}
                  className="bg-gray-200 text-black pointer-events-auto"
                />
              ) : (
                <PaginationPrevious className="bg-gray-200 text-black pointer-events-none opacity-60 " />
              )}
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className=" mx-10"
                href={`/admin/dashboard?page=${page}`}
              >
                Page {page} of {totalPage}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              {canNextPage ? (
                <PaginationNext
                  href={`/admin/dashboard?page=${page + 1}`}
                  className="bg-gray-200 text-black pointer-events-auto"
                />
              ) : (
                <PaginationNext className="bg-gray-200 text-black pointer-events-none opacity-60 " />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default ClientTables;
