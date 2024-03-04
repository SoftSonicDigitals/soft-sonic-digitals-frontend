"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Menu = () => {
  const [openNavigationMenu, setOpenNavigationMenu] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setOpenNavigationMenu(true)}
      >
        <RxHamburgerMenu className="text-2xl font-[700]" />
      </button>

      {openNavigationMenu && (
        <ul
          className={`fixed top-0 right-0  h-[100vh] w-[250px]  z-100 bg-white shadow-md transition duration-500`}
        >
          <button
            type="button"
            className="flex w-[95%] mr-14 justify-end  mt-3"
            onClick={() => setOpenNavigationMenu(false)}
          >
            <IoCloseOutline className="text-2xl font-[700] " />
          </button>
          <li>Solutions</li>
          <li>Platforms</li>
          <li>Industry</li>
          <li>Resources</li>
          <li>Customer</li>
        </ul>
      )}
    </>
  );
};

export default Menu;
