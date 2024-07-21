import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
const SideNavbar = () => {
  return (
    <div className="h-screen w-20 bg-purple fixed z-50  ">
      <div className="flex flex-col h-full justify-between">
        <div>user button </div>
        <Link href="#" className="flex-center">
          <div className="p-2 hover:bg-purple-300  rounded-full flex-center transition duration-300">
            <GoHome className="w-[28px] h-[28px] text-white " />
          </div>
        </Link>
        <div>settings</div>
      </div>
    </div>
  );
};

export default SideNavbar;
