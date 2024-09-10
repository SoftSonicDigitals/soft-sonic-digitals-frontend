"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const DisplayNoteText = ({ noteText }: { noteText: string }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: noteText,
    editable: false, // Make the editor read-only if you only want to display content,
    editorProps: {
      attributes: {
        class: "text-editor",
      },
    },

    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
};

export default DisplayNoteText;
