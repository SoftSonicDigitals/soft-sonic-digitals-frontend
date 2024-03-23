"use client";
import { FOOTER_LINKS } from "@/prototypes/footer";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const MobileFooter = () => {
  const [selectedDropDownMenu, setSelectedDropDownMenu] = useState<
    number | null
  >(null);

  const toggleDropDown = (index: number) => {
    if (selectedDropDownMenu === index) {
      return setSelectedDropDownMenu(null);
    }
    setSelectedDropDownMenu(index);
  };

  const isMenuOpen = (selected: number | null, index: number) => {
    return selected === index;
  };

  return (
    <div className="flex flex-col md:hidden w-full mb-12">
      {FOOTER_LINKS.map(({ title, links }, indexOfMenu) => (
        <div key={indexOfMenu} onClick={() => toggleDropDown(indexOfMenu)}>
          <div className="flex items-center justify-between border-y-[1px] last:border-b-[1px] border-gray-200 px-4 py-2.5">
            <p className="text-sm capitalize">{title}</p>

            {!isMenuOpen(selectedDropDownMenu, indexOfMenu) ? (
              <FaPlus className="cursor-pointer text-xs text-gray-700" />
            ) : (
              <FaMinus className="cursor-pointer text-xs text-gray-700" />
            )}
          </div>
          {isMenuOpen(selectedDropDownMenu, indexOfMenu) && (
            <div className="flex flex-col gap-2.5 px-4 py-2.5">
              {links.map(({ title, link }, index) => (
                <Link
                  href={link}
                  key={index}
                  className="text-gray-700 font-[500] text-sm tracking-wide "
                >
                  {title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;
