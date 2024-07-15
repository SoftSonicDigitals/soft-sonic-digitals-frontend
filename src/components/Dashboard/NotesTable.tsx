"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import useSWR from "swr";
import { getClientNotes } from "@/actions";
import { format } from "date-fns";
const NotesTable = ({ id }: { id?: string }) => {
  const {
    data: notes,
    error,
    isLoading,
  } = useSWR(["note", id], async () => await getClientNotes(id!));

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
          {!isLoading &&
            notes?.map(({ created_by, created_at, note }, index) => (
              <TableRow key={index}>
                <TableCell className="w-[20px]">{created_by}</TableCell>
                <TableCell className="w-[150px]">
                  {format(new Date(created_at), "MM/dd/yyyy")}
                </TableCell>
                <TableCell className="w-[150px]">{note}</TableCell>
              </TableRow>
            ))}

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
  );
};

export default NotesTable;
