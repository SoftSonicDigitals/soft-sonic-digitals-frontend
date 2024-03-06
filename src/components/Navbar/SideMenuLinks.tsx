"use client";
import { SIDE_MENU } from "@/prototypes/navbar";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { SideMenuLink } from ".";

const SideMenuLinks = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);

  const dropDownMenuHandler = () => {
    setIsDropDownMenuOpen((prev) => !prev);
  };

  return (
    <div className="ml-4 mr-5 ">
      {SIDE_MENU.map((menu) => (
        <div
          onClick={dropDownMenuHandler}
          key={menu.title}
          className=" pb-2 border-b-[1px] border-gray-200"
        >
          <div className="text-gray-800 font-bold text-md flex items-center justify-between pb-3 mt-5">
            <p className="tracking-wider">{menu.title}</p>
            <FaPlus className="cursor-pointer" />
          </div>
          <SideMenuLink navLinks={menu.subMenu} />
        </div>
      ))}
    </div>
  );
};

export default SideMenuLinks;
