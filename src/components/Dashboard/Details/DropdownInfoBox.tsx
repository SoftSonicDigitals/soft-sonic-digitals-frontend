"use client";

import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const DropdownInfoBox = ({ title, value }) => {
  return (
    <div className=" p-6 bg-white h-full ">
      <h2 className="font-[600] text-sm text-gray-400 tracking-wide mb-2">
        {title}
      </h2>
      <div className="relative">
        <div id="priority" className="text-lg font-[600] border-none ">
          <button className="flex-center gap-2">
            <span>Select </span>
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div
          id="dropdownMenu"
          className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1">
            <span className="w-5 h-5 rounded mr-2 bg-red-300"></span> Low
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1">
            <span className="w-5 h-5 rounded mr-2 bg-red-300"></span> Medium
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1">
            <span className="w-5 h-5 rounded mr-2 bg-red-300"></span> High
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownInfoBox;
