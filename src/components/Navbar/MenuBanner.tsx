import { BANNER_DETAILS } from "@/constants/navbar";
import React from "react";

const MenuBanner = () => {
  return (
    <div className="w-full bg-gray-0 py-5 mx-2">
      <div className="wrapper_container flex justify-between ">
        <div className="flex flex-col">
          <h2 className="text-xl mb-1">{BANNER_DETAILS.title} </h2>
          <p className="text-sm font-[400]">{BANNER_DETAILS.description} </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MenuBanner;
