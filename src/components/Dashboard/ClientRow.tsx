"use client";
import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { Clients } from "@/models/admin";
import { useRouter } from "next/navigation";
import Tag from "./Tag";
import {
  PRIORITY_TAGS_COLORS,
  STATUS_TAGS_COLORS,
} from "@/prototypes/dashboard";
const ClientRow = ({
  clientID,
  name,
  email,
  mobile,
  service,
  id,
  priority,
  status,
}: Clients) => {
  const router = useRouter();
  console.log(id, priority, status);
  return (
    <TableRow
      className="cursor-pointer hover:bg-white-100"
      onClick={() => {
        router.push(`/admin/client/${id}`);
      }}
    >
      <TableCell className="font-medium">{clientID}</TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{mobile}</TableCell>
      <TableCell>{service}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end flex-col md:flex-row gap-2">
          <Tag
            tagName={PRIORITY_TAGS_COLORS[`${priority}`]?.tagName}
            color={PRIORITY_TAGS_COLORS[`${priority}`]?.color}
            variant="small"
          />
          <Tag
            tagName={STATUS_TAGS_COLORS[`${status}`]?.tagName}
            color={STATUS_TAGS_COLORS[`${status}`]?.color}
            variant="small"
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ClientRow;
