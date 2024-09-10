"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({ onChange, content, closeEditor }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-6 py-6  justify-start border-b border-r border-l border text-gray-400 items-start w-full gap-3 font-medium text-[16px] h-32 outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full ">
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
      <Toolbar editor={editor} content={content} closeEditor={closeEditor} />
    </div>
  );
};

export default Tiptap;
