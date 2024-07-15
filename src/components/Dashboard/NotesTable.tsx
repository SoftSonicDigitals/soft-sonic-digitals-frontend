import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const NotesTable = () => {
  return (
    <div className="mx-4 mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">Added By</TableHead>
            <TableHead className="w-[150px]">Added At</TableHead>
            <TableHead className="w-[150px]">Note</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>ClientId</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default NotesTable;
