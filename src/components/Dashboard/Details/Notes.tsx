import React from "react";
import { IoMdAdd } from "react-icons/io";
import NoteItem from "./NoteItem";
const Notes = () => {
  return (
    <section id="notes">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4 ">
          <h1 className="text-2xl font-[600] tracking-wide text-gray-800 ">
            Notes
          </h1>

          <div className="w-9 h-9 bg-gray-100 p-2 text-center rounded-lg flex-center text-gray-400 font-[700]">
            10
          </div>
        </div>
        <div className="flex-center gap-3 font-[700] text-sm text-orange cursor-pointer">
          <IoMdAdd className="text-lg" />
          <p>Add note</p>
        </div>
      </div>
      {[1, 1, 1, 1].map((item, index) => (
        <NoteItem key={index} />
      ))}
    </section>
  );
};

export default Notes;
