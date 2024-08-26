import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SideMenu, Platforms, Resources, Solutions, ContactUs } from ".";
import { CUSTOMER } from "@/constants/home";

const Navbar = () => {
  return (
    <nav className="shadow-md fixed w-full bg-white z-[999] ">
      <div className="wrapper_container flex justify-between py-2 lg:py-0">
        <Link href={"/"}>
          <div
            className="cursor-pointer relative w-24 h-12 
          lg:w-28 lg:h-16 lg:my-3"
          >
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="flex-center gap-12">
          <div className="hidden lg:flex item-center justify-center gap-8 font-[700] tracking-wide h-full   ">
            <Solutions />
            <Platforms />
            <Resources />

            <Link
              href={"/case-studies"}
              className="hidden lg:flex items-center justify-center text-gray-800"
            >
              {CUSTOMER}
            </Link>
          </div>

          <div className="flex-center gap-3">
            <ContactUs />
            <div className="lg:hidden">
              <SideMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
