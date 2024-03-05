import { SOLUTIONS_MENU } from "@/constants/navbarConstants";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Solutions = () => {
  return (
    <>
      <div className="hidden lg:flex group h-full text-gray-800 hover:text-gray-900  ">
        <div className=" flex-center gap-0.5 ">
          <p>{SOLUTIONS_MENU.title}</p>
          <MdOutlineKeyboardArrowDown className="text-3xl  group-hover:rotate-180 transition duration-300" />
        </div>
      </div>
      <div
        className="absolute z-100 top-[5.5rem] right-0 bg-white w-[100vw] shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]
     transform origin-top
      "
      >
        <div className="flex-center flex-col mt-8 ">
          <h2 className="text-2xl mb-4">Solutions</h2>
          <p className="text-gray-800 font-[400] tracking-normal mb-4">
            We push ourselves. We push technology. And we push the boundaries of
            conventional commerce.
          </p>
        </div>
      </div>
    </>
  );
};

export default Solutions;
