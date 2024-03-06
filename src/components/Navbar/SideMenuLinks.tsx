"use client";
import { SIDE_MENU } from "@/prototypes/navbar";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { SideMenuLink } from ".";
import Link from "next/link";

const SideMenuLinks = () => {
  const [selectedDropDownMenu, setSelectedDropDownMenu] = useState<
    number | null
  >(null);

  const toggleDropDown = (index: number) => {
    if (selectedDropDownMenu === index) {
      return setSelectedDropDownMenu(null);
    }
    setSelectedDropDownMenu(index);
  };

  return (
    <div className="ml-4 mr-5 ">
      {SIDE_MENU.map((menu, indexOfMenu) => (
        <div
          onClick={() => toggleDropDown(indexOfMenu)}
          key={menu.title}
          className=" pb-2 border-b-[1px] border-gray-200"
        >
          <div className="text-gray-800 font-bold text-md flex items-center justify-between pb-3 mt-5">
            {menu.subMenu && <p className="tracking-wider">{menu.title}</p>}
            {menu.subMenu && <FaPlus className="cursor-pointer" />}
            {!menu.subMenu && menu.link && (
              <Link href={menu.link}>{menu.title}</Link>
            )}
          </div>
          {selectedDropDownMenu === indexOfMenu && (
            <SideMenuLink navLinks={menu.subMenu} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenuLinks;
