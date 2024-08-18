"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
const Filters = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  return (
    <>
      <div className="relative">
        <button
          className="flex-center gap-2 px-5 py-2.5 border-[1.5px] border-gray-200 text-sm font-[500]"
          onClick={() => setIsFilterMenuOpen((prev) => !prev)}
        >
          <IoFilterSharp className="text-lg" />

          <p className="font-[600]">More filters</p>
        </button>
        {isFilterMenuOpen && (
          <div className="absolute top-12 left-0 w-64 z-100">
            <div className="border rounded-md  shadow-xl border-gray-200 bg-white">
              <div className="flex items-center justify-between p-4 border-b mb-2">
                <div className="text-sm font-[700]">Filters</div>
                <IoClose
                  className="text-xl cursor-pointer"
                  onClick={() => setIsFilterMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
