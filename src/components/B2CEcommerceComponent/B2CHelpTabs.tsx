import React from "react";
import { FaPlus } from "react-icons/fa6";

const B2CHelpTabs = () => {
  return (
    <div className="basis-full">
      <div className="flex-center gap-4">
        <div className="bg-gray-100 p-2 rounded-full">
          <FaPlus className="cursor-pointer" />
        </div>
        <p className="font-[700] text-2xl text-gray-800">
          Technology platform assessments
        </p>
      </div>
    </div>
  );
};

export default B2CHelpTabs;
