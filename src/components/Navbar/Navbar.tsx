import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu, Platform, Resources, Solutions } from ".";
import Button from "../Reusable/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="container flex justify-between ">
        <Link href={"/"}>
          <div
            className="cursor-pointer relative w-24 h-12 sm:w-28 sm:h-16 sm:my-3 
          "
          >
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="flex-center gap-12">
          <div className="flex-center gap-8 font-[700] tracking-wide text-gray-800 h-full">
            {/* <Solutions />
            <Platform />
            <Resources /> */}

            {/* <Link href={"/"}>Customer</Link> */}
          </div>

          <div className="flex-center gap-3">
            <Button
              type="button"
              title="CONTACT US"
              className="px-5 py-2 text-xs"
            />
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
