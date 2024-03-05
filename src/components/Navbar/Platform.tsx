"use client";
import { PLATFORM } from "@/constants/navbar";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Platform = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
        className="hidden lg:flex group h-full text-gray-800 hover:text-gray-900  "
      >
        <div className=" flex-center gap-0.5 ">
          <p>{PLATFORM}</p>
          <MdOutlineKeyboardArrowDown
            className={`text-3xl  hover:rotate-180
             transition duration-300`}
          />
        </div>
      </div>
    </>
  );
};

export default Platform;
