import React from "react";
import { IoFilterSharp } from "react-icons/io5";
const Filters = () => {
  return (
    <div>
      <div>
        <button className="flex-center gap-2 px-4 py-2 border-2 border-gray-300 text-xs font-[500]">
          <IoFilterSharp className="text-lg" />
          More filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
