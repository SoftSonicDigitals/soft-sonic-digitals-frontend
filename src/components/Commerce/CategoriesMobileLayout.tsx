"use client";
import { COMMERCE_CATEGORIES } from "@/prototypes/Commerce";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { CategoryItem } from ".";

const CategoriesMobileLayout = () => {
  const [selectedDropDownMenu, setSelectedDropDownMenu] = useState<
    number | null
  >(null);

  const toggleDropDown = (index: number) => {
    if (selectedDropDownMenu === index) {
      return setSelectedDropDownMenu(null);
    }
    setSelectedDropDownMenu(index);
  };

  const isMenuOpen = (selected: number | null, index: number) => {
    return selected === index;
  };

  return (
    <div className="mb-10 md:hidden">
      {COMMERCE_CATEGORIES.map((category, indexOfMenu) => (
        <div
          onClick={() => toggleDropDown(indexOfMenu)}
          key={category.category_title}
          className="  first:border-t-[1px] border-b-[1px] border-gray-200 text-gray-800 mx-4 py-4   "
        >
          <div className="flex item-center justify-between ">
            <h4 className="font-[600] text-lg">{category.category_title}</h4>
            <div className="flex-center mx-2">
              {!isMenuOpen(selectedDropDownMenu, indexOfMenu) ? (
                <FaPlus className="cursor-pointer" />
              ) : (
                <FaMinus className="cursor-pointer" />
              )}
            </div>
          </div>
          {isMenuOpen(selectedDropDownMenu, indexOfMenu) && (
            <div className=" my-3 flex flex-col gap-3">
              {category.category_items.map((item) => (
                <CategoryItem
                  key={item.link}
                  categoryName={category.category_title}
                  title={item.title}
                  description={String(item.description)}
                  link={item.link}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesMobileLayout;
