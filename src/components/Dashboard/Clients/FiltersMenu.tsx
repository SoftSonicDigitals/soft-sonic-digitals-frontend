"use client";
import {
  filterDate,
  filterMenuOptions,
  filterService,
  filterState,
  filterTags,
} from "@/prototypes/admin/filter";
import React, { useState } from "react";
import SubFilterTags from "./SubFilterTags";

const FiltersMenu = () => {
  const [showSubFilters, setShowSubFilters] = useState(false);

  const [filterCategory, setFilterCategory] =
    useState<(typeof filterMenuOptions)[number]["name"]>("");

  let filterCategoryTags: { id: string; label: string }[] = [];

  switch (filterCategory) {
    case "date":
      filterCategoryTags = filterDate;
      break;
    case "tags":
      filterCategoryTags = filterTags;
      break;
    case "service":
      filterCategoryTags = filterService;
      break;
    case "state":
      filterCategoryTags = filterState;
      break;
    default:
      filterCategoryTags = [];
  }

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
                  setFilterCategory(menu.name);
                  setShowSubFilters(true);
                }}
              >
                <menu.icon className="text-2xl mb-1.5 " />
                <p className="text-sm font-[700] capitalize">{menu.name}</p>
              </div>
            ))}
          </div>
        )}
        {showSubFilters && <SubFilterTags tags={filterCategoryTags} />}
      </div>
    </div>
  );
};

export default FiltersMenu;
