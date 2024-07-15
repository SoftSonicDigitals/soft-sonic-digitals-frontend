import React from "react";
import {
  TableHead,
  TableHeader,
  TableRow,
  Table,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { AddNotesSection, NotesTable } from ".";

type ClientDetailsTableProps = {
  clientInfo: {
    id: string;
    client_id: string;
    name: string;
    email: string;
    mobile: string;
    company: string | null;
    service: string;
    budget: string;
    requirement: string;
    project_start: string;
    project_details: string | null;
  } | null;
};

const ClientDetailsTable = ({ clientInfo }: ClientDetailsTableProps) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">Detail</TableHead>
            <TableHead className="w-[150px]">Information</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>ClientId</TableCell>
            <TableCell>{clientInfo?.client_id}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{clientInfo?.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{clientInfo?.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mobile</TableCell>
            <TableCell>{clientInfo?.mobile}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>
              {!clientInfo?.company ? "----" : clientInfo.company}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell>{clientInfo?.service}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Budget</TableCell>
            <TableCell>{clientInfo?.budget}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Requirement</TableCell>
            <TableCell>{clientInfo?.requirement}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Project Start</TableCell>
            <TableCell>{clientInfo?.project_start}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Project Details</TableCell>
            <TableCell>
              {!clientInfo?.project_details
                ? "----"
                : clientInfo.project_details}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {clientInfo && <AddNotesSection id={clientInfo?.id!} />}
      <NotesTable id={clientInfo?.id} />
    </>
  );
};

export default ClientDetailsTable;
