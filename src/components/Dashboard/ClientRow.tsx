import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { Clients } from "@/models/dashboard";

const ClientRow = ({ clientID, name, email, mobile, service }: Clients) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{clientID}</TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{mobile}</TableCell>
      <TableCell className="text-right">{service}</TableCell>
    </TableRow>
  );
};

export default ClientRow;
