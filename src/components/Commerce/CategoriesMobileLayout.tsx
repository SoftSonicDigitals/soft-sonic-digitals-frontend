"use client";
import { COMMERCE_CATEGORIES } from "@/prototypes/commerce";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
    <div className="mb-10">
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
                <div key={item.link} className="flex  gap-3 ml-4">
                  <div className="relative w-6 h-6">
                    <Image
                      src={"/dropdown-icon.svg"}
                      alt="dropdown-logo"
                      fill
                    />
                  </div>
                  <Link href={item.link} className="flex">
                    {category.category_title ===
                    "Individually Outstanding, Spectacular in Combination"
                      ? `${item.title.split("-")[1]}`
                      : item.title}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesMobileLayout;
