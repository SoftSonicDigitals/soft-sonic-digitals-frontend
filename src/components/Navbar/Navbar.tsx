import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav
      className="border-b-[2px]
      border-black"
    >
      <div className="container flex justify-between ">
        <Link href={"/"}>
          <div
            className="cursor-pointer relative w-28 h-14 my-3
          "
          >
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="flex-center gap-12">
          <div className="flex-center gap-8 font-[700] tracking-wide text-gray-800">
            <div className="flex items-center justify-center gap-0.5">
              <p className=" ">Solutions</p>
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>

            <div className="flex items-center justify-center gap-0.5">
              <p className=" ">Resources</p>
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>

            <div className="flex items-center justify-center gap-0.5">
              <p className=" ">Platform</p>
              <MdOutlineKeyboardArrowDown className="text-2xl" />
            </div>
            <Link href={"/"}>Customer</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
