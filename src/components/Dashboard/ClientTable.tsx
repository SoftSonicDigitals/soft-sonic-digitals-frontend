"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DASHBOARD_TABLE_HEADING } from "@/constants/dashboard";
import { getClients } from "@/actions";
import ClientRow from "./ClientRow";

const ClientTables = () => {
  const clients = [];

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
          <TableBody>
            {clients?.map(({ client_id, name, email, mobile, service, id }) => (
              <ClientRow
                id={id}
                key={id}
                clientID={client_id}
                name={name}
                email={email}
                mobile={mobile}
                service={service}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ClientTables;
