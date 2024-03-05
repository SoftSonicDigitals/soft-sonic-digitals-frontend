import { SOLUTIONS_MENU } from "@/constants/navbarConstants";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Solutions = () => {
  return (
    <div className="hidden lg:flex group h-full text-gray-800 hover:text-gray-900  ">
      <div className=" flex-center gap-0.5 ">
        <p>{SOLUTIONS_MENU.title}</p>
        <MdOutlineKeyboardArrowDown className="text-3xl  group-hover:rotate-180 transition duration-300" />
      </div>
    </div>
  );
};

export default Solutions;
