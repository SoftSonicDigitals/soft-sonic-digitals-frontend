import React from "react";
import { BsTags } from "react-icons/bs";

const Tags = () => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div>
        <div
          className="inline-block px-3 py-2 rounded-xl  
      text-sm font-[700] tracking-wider text-white bg-[#F57C00] mr-3"
        >
          Critical
        </div>

        <div className="inline-block px-3 py-2 rounded-xl text-sm  font-[700] tracking-wider text-white bg-[#D32F2F]">
          Urgent
        </div>
      </div>
      <div className="hover:bg-gray-300 p-1.5 rounded-lg cursor-pointer border-[1px] transition duration-200">
        <BsTags className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
};

export default Tags;
