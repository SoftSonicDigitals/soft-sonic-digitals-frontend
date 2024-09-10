"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  List,
  ListOrdered,
  Heading2,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";
type ToolbarProps = {
  editor: Editor | null;
  content: string;
  closeEditor: () => void;
};

const Toolbar = ({ editor, content, closeEditor }: ToolbarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="px-4 py-6  flex justify-between items-center gap-5 w-full border flex-wrap lg:flex-row">
      <div className="flex justify-start items-center gap-2  min-w-fit  ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <FaBold className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <FaItalic className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <FaUnderline className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <FaStrikethrough className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <Heading2 className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-gray-500 text-white p-2 rounded-md"
              : "text-gray-700 bg-white p-2"
          }
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>
      {content && (
        <div className="flex  flex-row-reverse md:flex-row gap-2">
          <button
            type="button"
            className="px-6 py-3 bg-white text-orange text-sm font-[500]  "
            onClick={() => closeEditor()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-orange text-white text-sm font-[500] min-w-fit "
          >
            Add note
          </button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
