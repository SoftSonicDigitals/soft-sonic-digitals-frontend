import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Platform, Resources, Solutions } from ".";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="container flex justify-between ">
        <Link href={"/"}>
          <div
            className="cursor-pointer relative w-28 h-16 my-3
          "
          >
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="flex-center gap-12">
          <div className="flex-center gap-8 font-[700] tracking-wide text-gray-800 h-full">
            <Solutions />
            <Platform />
            <Resources />

            <Link href={"/"}>Customer</Link>
          </div>

          <div className="flex-center gap-6  "></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
