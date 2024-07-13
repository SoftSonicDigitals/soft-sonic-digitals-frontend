"use client";
import { useUser } from "@clerk/nextjs";
import React, { useRef, useState } from "react";
import { Textarea } from "../ui/textarea";

const NotesSection = () => {
  const noteInputRef = useRef<HTMLTextAreaElement | null>(null);
  const user = useUser();
  const [toogleTextArea, setToogleTextArea] = useState(false);

  const onAddNoteHandler = () => {
    if (noteInputRef.current) {
      console.log("Textarea content:", noteInputRef.current.value);
    } else {
      setToogleTextArea(true);
    }
  };

  return (
    <div className="mx-4">
      <div className="mt-10 mx-4 text-2xl font-[600]">Notes</div>

      {toogleTextArea && (
        <Textarea
          ref={noteInputRef}
          className={` border-gray-600 mt-8  w-full  py-2 outline-0 px-4 text-sm text-gray-700`}
        />
      )}
      <div className="flex gap-4 items-center mt-6 ">
        <button
          onClick={() => onAddNoteHandler()}
          className=" bg-gray-200 py-2 px-4 font-[600] rounded-md border-2  hover:border-gray-700 hover:bg-white  transition-all duration-300 "
        >
          Add Note
        </button>

        {toogleTextArea && (
          <button
            onClick={() => setToogleTextArea(false)}
            className="bg-gray-200 py-2 px-4 font-[600] rounded-md border-2 hover:bg-red hover:text-white hover:border-red transition-all duration-300"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default NotesSection;
