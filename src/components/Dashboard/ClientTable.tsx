"use client";
import React, { useState } from "react";
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
import ClientRow from "./ClientRow";
import usePagination from "@/hooks/usePagination";
import PaginationSection from "./PaginationSection";
import SearchBar from "./SearchBar";
import { PriorityKey, StatusKey } from "@/models/dashboard";

const ClientTables = () => {
  const { totalClientCount, isLoading, clients, page } = usePagination();

  const canNextPage = totalClientCount > page * CLIENT_TABLE_LIMIT;
  const canPrevPage = page > 1;
  const totalPage = Math.ceil(totalClientCount / CLIENT_TABLE_LIMIT);

  return (
    <section id="clients_table" className="pt-32">
      <div className="wrapper_container">
        <div className="text-4xl mb-8">{DASHBOARD_TABLE_HEADING}</div>

        <SearchBar />

        <Table className="mb-4 hover:">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Client ID</TableHead>
              <TableHead className="w-[150px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Service</TableHead>
              <TableHead className="text-right">Tags</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {!isLoading &&
              clients?.map(
                ({
                  client_id,
                  name,
                  email,
                  mobile,
                  priority,
                  status,
                  service,
                  id,
                }) => (
                  <ClientRow
                    id={id}
                    key={id}
                    clientID={client_id}
                    name={name}
                    email={email}
                    mobile={mobile}
                    service={service}
                    priority={priority as PriorityKey}
                    status={status as StatusKey}
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
        <PaginationSection
          canNextPage={canNextPage}
          canPrevPage={canPrevPage}
          totalPage={totalPage}
          currentPage={page}
        />
      </div>
    </section>
  );
};

export default ClientTables;
