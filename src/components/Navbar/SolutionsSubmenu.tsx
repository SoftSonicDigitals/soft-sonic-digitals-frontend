"use client";

import { SOLUTIONS_MENU } from "@/prototypes/Navbar";
import Link from "next/link";
import React from "react";
import { CiBoxList } from "react-icons/ci";
import { MenuBanner } from ".";

type SolutionsSubmenuProps = {
  setIsOpen: React.Dispatch<boolean>;
};

const SolutionsSubmenu = ({ setIsOpen }: SolutionsSubmenuProps) => {
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden lg:block absolute z-100 top-[5.5rem] right-0 bg-white w-[100vw] shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transform origin-top  "
    >
      <div className="flex-center flex-col mt-8 mb-6 ">
        <h2 className="text-2xl mb-4">{SOLUTIONS_MENU.title}</h2>
        <p className="text-gray-800 font-[400] tracking-normal ">
          {SOLUTIONS_MENU.description}
        </p>
      </div>

      <div className="flex justify-center wrapper_container gap-5 mb-4">
        {SOLUTIONS_MENU.subMenu.map((menu) => (
          <div
            key={menu.subMenuHeading}
            className="border-r-[1px]  pr-4 lg:pr-10 border-gray-100 last:border-none last:pr-0"
          >
            <h3 className="text-xl mb-2">{menu.subMenuHeading}</h3>
            {menu.subMenuLinks.map((sublink) => (
              <div
                key={sublink.title}
                className="flex items-center  gap-3 font-[400] text-sm pb-1 mb-1 hover:bg-gray-200 rounded-xs  xl:pr-10"
              >
                <CiBoxList className="text-lg" />
                <Link href={sublink.link}>{sublink.title}</Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <MenuBanner />
    </div>
  );
};

export default SolutionsSubmenu;
