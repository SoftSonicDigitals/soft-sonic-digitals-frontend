import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Resources = () => {
  return (
    <div className="hidden lg:flex group h-full">
      <div className="flex-center gap-0.5  ">
        <p className=" ">Resources</p>
        <MdOutlineKeyboardArrowDown className="text-3xl  group-hover:rotate-180 transition duration-300" />
      </div>
    </div>
  );
};

export default Resources;
