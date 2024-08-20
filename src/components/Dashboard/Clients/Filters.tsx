"use client";
import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import FiltersMenu from "./FiltersMenu";
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
        {isFilterMenuOpen && <FiltersMenu />}
      </div>
    </>
  );
};

export default Filters;
