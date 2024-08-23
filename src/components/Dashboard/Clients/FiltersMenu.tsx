"use client";
import { filterMenuOptions } from "@/prototypes/admin/filter";
import React, { useState } from "react";
import FilterTags from "./FilterTags";

const FiltersMenu = () => {
  const [showSubFilters, setShowSubFilters] = useState(false);

  return (
    <div className="absolute top-12 left-0 w-64 z-100">
      <div className="border rounded-2xl  shadow-lg border-gray-200 bg-white p-4">
        <p className="text-sm font-[700] mb-4">Add Filter</p>
        {!showSubFilters && (
          <div className="grid grid-cols-2 gap-3">
            {filterMenuOptions.map((menu, index) => (
              <div
                key={index}
                className="flex-col flex-center w-full h-24 bg-gray-300 rounded-xl text-gray-700 hover:text-red-300 hover:bg-red-100 transition duration-300 cursor-pointer"
                onClick={() => {
                  setShowSubFilters(true);
                }}
              >
                <menu.icon className="text-2xl mb-1.5 " />
                <p className="text-sm font-[700] capitalize">{menu.name}</p>
              </div>
            ))}
          </div>
        )}
        {showSubFilters && <FilterTags tags={} />}
      </div>
    </div>
  );
};

export default FiltersMenu;
