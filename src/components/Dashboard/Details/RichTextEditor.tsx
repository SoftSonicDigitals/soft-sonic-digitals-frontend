"use client";
import React, { Dispatch, useState } from "react";
import Tiptap from "./TipTap";

const RichTextEditor = ({
  setEditorOpen,
}: {
  setEditorOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeEditor = () => {
    setEditorOpen(false);
  };

  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };

  return (
    <form>
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
        closeEditor={closeEditor}
      />
    </form>
  );
};

export default RichTextEditor;
