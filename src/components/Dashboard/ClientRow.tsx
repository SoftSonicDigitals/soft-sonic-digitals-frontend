"use client";
import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { Clients } from "@/models/dashboard";
import { useRouter } from "next/navigation";
const ClientRow = ({ clientID, name, email, mobile, service, id }: Clients) => {
  const router = useRouter();
  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => {
        router.push(`/admin/client/${id}`);
      }}
    >
      <TableCell className="font-medium">{clientID}</TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{mobile}</TableCell>
      <TableCell className="text-right">{service}</TableCell>
    </TableRow>
  );
};

export default ClientRow;
