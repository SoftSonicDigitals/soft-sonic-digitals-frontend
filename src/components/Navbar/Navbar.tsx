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
        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center justify-center gap-10 font-[700] tracking-wide text-gray-800">
            <Link href={"/"}>
              <div className=" ">Solutions</div>
            </Link>

            <Link href={"/"}>Platform</Link>
            <Link href={"/"}>Resources</Link>
            <Link href={"/"}>Customers</Link>
          </div>
          <div className="flex items-center justify-center gap-6 px-16">
            <div>Contact us</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
