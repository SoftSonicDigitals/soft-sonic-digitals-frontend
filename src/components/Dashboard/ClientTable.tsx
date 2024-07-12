"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DASHBOARD_TABLE_HEADING } from "@/constants/dashboard";
import { getClientCount, getClients } from "@/actions";
import ClientRow from "./ClientRow";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import usePagination from "@/hooks/usePagination";

const ClientTables = () => {
  const { isLoading, clients } = usePagination();

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
      </div>
    </section>
  );
};

export default ClientTables;
