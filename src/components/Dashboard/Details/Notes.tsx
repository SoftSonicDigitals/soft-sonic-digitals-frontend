"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import useSWR from "swr";
import { fetcher } from "@/utils";
import { NoteItem, NotesSkeleton, RichTextEditor, TipTap } from "./";
import { Pagination } from "../Clients";
import { NOTES_LIMIT } from "@/constants/dashboard";
import { useSearchParams } from "next/navigation";

const Notes = ({ leadId }: { leadId: string }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(Array.from(searchParams.entries()));

  const { data, isLoading, error } = useSWR(
    `/api/notes/${leadId}?${params.toString()}`,
    fetcher
  );

  const [openAddNote, setOpenAddNote] = useState(false);

  if (data?.status === "error") {
    return;
  }
  const { notes, totalCount, page } = data?.data || {};

  return (
    <>
      {!isLoading && (
        <section id="notes" className="mb-16">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4 ">
              <h1 className="text-2xl font-[600] tracking-wide text-gray-800 ">
                Notes
              </h1>

              <div className="w-9 h-9 bg-gray-100 p-2 text-center rounded-lg flex-center text-gray-400 font-[700]">
                {totalCount}
              </div>
            </div>
            <div
              className="flex-center gap-3 font-[700] text-sm text-orange cursor-pointer"
              onClick={() => {
                setOpenAddNote(true);
              }}
            >
              <IoMdAdd className="text-lg" />
              <p>Add note</p>
            </div>
          </div>

          {/* Rich Text Editor */}
          {openAddNote && (
            <RichTextEditor setEditorOpen={setOpenAddNote} leadId={leadId} />
          )}

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
      {!isLoading && (
        <Pagination
          limit={NOTES_LIMIT}
          currentPage={page}
          totalCount={totalCount}
        />
      )}
    </>
  );
};

export default Notes;
