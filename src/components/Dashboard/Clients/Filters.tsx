import React from "react";
import { IoFilterSharp } from "react-icons/io5";
const Filters = () => {
  return (
    <button className="flex-center gap-2 px-5 py-2.5 border-[1.5px] border-gray-200 text-sm font-[500]">
      <IoFilterSharp className="text-lg" />

      <p className="font-[600]">More filters</p>
    </button>
  );
};

export default Filters;
