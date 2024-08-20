import React from "react";
import { HiOutlineCalendar } from "react-icons/hi2";
const FiltersMenu = () => {
  return (
    <div className="absolute top-12 left-0 w-60 z-100">
      <div className="border rounded-2xl  shadow-lg border-gray-200 bg-white p-4">
        <p className="text-sm font-[700] mb-4">Add Filter</p>
        <div className="grid grid-cols-2 gap-3">
          {[0, 0, 0, 0].map((index) => (
            <div
              key={index}
              className="flex-col flex-center w-full h-24 bg-gray-300 rounded-xl text-gray-800 hover:text-red-500 hover:bg-red-100 transition duration-300"
            >
              <HiOutlineCalendar className="text-3xl mb-1.5 " />
              <p className="text-sm font-[600]">Date</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
