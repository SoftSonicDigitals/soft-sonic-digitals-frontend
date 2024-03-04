import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideMenu, Platform, Resources, Solutions } from ".";
import Button from "../Reusable/Button";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div
        className="wrapper_container flex justify-between
       "
      >
        <Link href={"/"}>
          <div
            className="cursor-pointer relative w-24 h-12 
          lg:w-28 lg:h-16 lg:my-3"
          >
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="flex-center gap-12">
          <div className="flex-center gap-8 font-[700] tracking-wide h-full ">
            <Solutions />
            <Platform />
            <Resources />

            <Link href={"/"} className="hidden lg:block text-gray-800">
              Customer
            </Link>
          </div>

          <div className="flex-center gap-3">
            <Button
              type="button"
              title="CONTACT US"
              className="px-5 py-2 lg:px-7 lg:py-2.5 text-xs lg:text-lg"
            />
            <SideMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
