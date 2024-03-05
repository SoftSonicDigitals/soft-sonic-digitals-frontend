"use client";

import { SOLUTIONS_MENU } from "@/constants/navbarConstants";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SolutionsSubmenu } from ".";

const Solutions = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
        className="hidden lg:flex group h-full text-gray-800 hover:text-gray-900  "
      >
        <div className=" flex-center gap-0.5 ">
          <p>{SOLUTIONS_MENU.title}</p>
          <MdOutlineKeyboardArrowDown
            className={`text-3xl  ${
              isSubMenuOpen ? "rotate-180" : ""
            } transition duration-300`}
          />
        </div>
      </div>
      {isSubMenuOpen && <SolutionsSubmenu setIsOpen={setIsSubMenuOpen} />}
    </>
  );
};

export default Solutions;
