"use client";
import {
  filterMonth,
  filterMenuOptions,
  filterService,
  filterState,
  filterTags,
} from "@/prototypes/admin/filter";
import React, { Dispatch, useState } from "react";
import SubFilterTags from "./SubFilterTags";
import { usePathname, useRouter } from "next/navigation";
import { ValueOf } from "next/dist/shared/lib/constants";
import { FilterCategoryTypes } from "@/constants/admin";

const FiltersMenu = ({
  setIsFilterMenuOpen,
}: {
  setIsFilterMenuOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showSubFilters, setShowSubFilters] = useState(false);
  const [filterCategory, setFilterCategory] =
    useState<ValueOf<typeof FilterCategoryTypes>>("");

  let filterCategoryTags: { id: string; label: string }[] = [];

  switch (filterCategory) {
    case FilterCategoryTypes.MONTH:
      filterCategoryTags = filterMonth;
      break;
    case FilterCategoryTypes.TAGS:
      filterCategoryTags = filterTags;
      break;
    case FilterCategoryTypes.SERVICES:
      filterCategoryTags = filterService;
      break;
    case FilterCategoryTypes.STATE:
      filterCategoryTags = filterState;
      break;
    default:
      filterCategoryTags = [];
  }

  const router = useRouter();
  const pathname = usePathname();

  const closeFilterMenu = () => {
    setIsFilterMenuOpen(false);
  };

  return (
    <div className="absolute top-12 left-0 w-64 z-100">
      <div className="border rounded-2xl  shadow-lg border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-[700] mb-4">Add Filter</p>
          <button
            className="text-sm font-[700] mb-4"
            onClick={() => {
              router.push(pathname);
            }}
          >
            Reset
          </button>
        </div>
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
        {showSubFilters && (
          <SubFilterTags
            tags={filterCategoryTags}
            category={filterCategory}
            closeFilterMenu={closeFilterMenu}
          />
        )}
      </div>
    </div>
  );
};

export default FiltersMenu;
