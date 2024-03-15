import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideMenu, Platforms, Resources, Solutions, ContactUs } from ".";

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
            <Platforms />
            <Resources />

            <Link href={"/"} className="hidden lg:block text-gray-800">
              Customer
            </Link>
          </div>

          <div className="flex-center gap-3">
            <ContactUs />
            <SideMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
