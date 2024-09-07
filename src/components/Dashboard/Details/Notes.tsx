"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import useSWR from "swr";
import { fetcher } from "@/utils";
import { NoteItem, NotesSkeleton } from "./";

const Notes = ({ leadId }: { leadId: string }) => {
  const { data, isLoading, error } = useSWR(`/api/notes/${leadId}`, fetcher);

  if (data?.status === "error") {
    return;
  }
  const { notes } = data?.data || {};

  return (
    <>
      {!isLoading && (
        <section id="notes">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4 ">
              <h1 className="text-2xl font-[600] tracking-wide text-gray-800 ">
                Notes
              </h1>

              <div className="w-9 h-9 bg-gray-100 p-2 text-center rounded-lg flex-center text-gray-400 font-[700]">
                {notes.length}
              </div>
            </div>
            <div className="flex-center gap-3 font-[700] text-sm text-orange cursor-pointer">
              <IoMdAdd className="text-lg" />
              <p>Add note</p>
            </div>
          </div>
          {notes?.map(
            (item: {
              created_by: string;
              created_at: string;
              note: string;
              id: string;
            }) => (
              <NoteItem
                createdAt={item.created_at}
                key={item.id}
                noteText={item.note}
                createdBy={item.created_by}
              />
            )
          )}
        </section>
      )}
      {isLoading && <NotesSkeleton />}
    </>
  );
};

export default Notes;
