import { filterMenuOptions } from "@/prototypes/admin/filter";
import React from "react";
import { IconType } from "react-icons";
import { HiOutlineCalendar } from "react-icons/hi2";
const FiltersMenu = () => {
  return (
    <div className="absolute top-12 left-0 w-60 z-100">
      <div className="border rounded-2xl  shadow-lg border-gray-200 bg-white p-4">
        <p className="text-sm font-[700] mb-4">Add Filter</p>
        <div className="grid grid-cols-2 gap-3">
          {filterMenuOptions.map((menu, index) => (
            <div
              key={index}
              className="flex-col flex-center w-full h-24 bg-gray-300 rounded-xl text-gray-700 hover:text-red-300 hover:bg-red-100 transition duration-300"
            >
              <menu.icon className="text-2xl mb-1.5 " />
              <p className="text-sm font-[700] capitalize">{menu.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
