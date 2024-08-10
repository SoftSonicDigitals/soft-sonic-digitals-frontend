"use client";
import { RESOURCES } from "@/constants/navbar";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ResourcesSubmenu } from ".";

const Resources = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div
        id="resources_div"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
        className="hidden relative lg:flex group h-full text-gray-800 hover:text-gray-900  "
      >
        <div className=" flex-center gap-0.5 ">
          <p>{RESOURCES}</p>
          <MdOutlineKeyboardArrowDown
            className={`text-3xl  ${
              isSubMenuOpen ? "rotate-180" : ""
            } transition duration-300`}
          />
        </div>
      </div>
      {isSubMenuOpen && <ResourcesSubmenu setIsOpen={setIsSubMenuOpen} />}
    </>
  );
};

export default Resources;
