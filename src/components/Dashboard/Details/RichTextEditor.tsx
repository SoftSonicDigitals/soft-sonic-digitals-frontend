"use client";
import React, { Dispatch, useCallback, useEffect, useState } from "react";
import Tiptap from "./TipTap";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useSWRConfig } from "swr";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const RichTextEditor = ({
  setEditorOpen,
  leadId,
}: {
  leadId: string;
  setEditorOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  // user
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { user } = useUser();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(Array.from(searchParams.entries()));

  const closeEditor = () => {
    setEditorOpen(false);
  };

  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: string) => {
    setContent(reason);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      return;
    }
    try {
      const response = await axios.post(`/api/notes/${leadId}`, {
        note: content,
        createdBy:
          user?.firstName && user.lastName
            ? `${user?.firstName} ${user.lastName}`
            : user.primaryEmailAddress?.emailAddress,
      });

      // Clear content and close editor after successful submission

      if (response.status === 201) {
        setContent("");
        closeEditor();
      }
      mutate(`/api/notes/${leadId}?${params.toString()}`);
      router.push(`/admin/leads/${leadId}?page=1`, { scroll: false });
    } catch (err) {
      console.error("Error submitting content:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
        closeEditor={closeEditor}
      />
    </form>
  );
};

export default RichTextEditor;
