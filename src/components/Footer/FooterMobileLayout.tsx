"use client";
import { FOOTER_LINKS } from "@/prototypes/footer";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { FooterLink } from ".";
import { AiOutlineMinus } from "react-icons/ai";
import { Collapse } from "react-collapse";
const FooterMobileLayout = () => {
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
        <div
          key={indexOfMenu}
          onClick={() => toggleDropDown(indexOfMenu)}
          className="group"
        >
          <div
            className={`flex items-center justify-between border-t-[1px] border-gray-200 px-4 py-2.5 bg-gray-0   ${
              isMenuOpen(selectedDropDownMenu, indexOfMenu)
                ? "border-y-[1px]"
                : ""
            }
             group-last:border-b-[1px]`}
          >
            <p className="text-sm capitalize">{title}</p>

            {!isMenuOpen(selectedDropDownMenu, indexOfMenu) ? (
              <IoAddOutline className="cursor-pointertext-gray-700 text-black" />
            ) : (
              <AiOutlineMinus className="cursor-pointer text-black" />
            )}
          </div>
          <Collapse isOpened={isMenuOpen(selectedDropDownMenu, indexOfMenu)}>
            {isMenuOpen(selectedDropDownMenu, indexOfMenu) && (
              <div className="flex flex-col gap-3 px-4 py-6">
                {links.map(({ title, link }, index) => (
                  <FooterLink key={index} link={link} title={title} />
                ))}
              </div>
            )}
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default FooterMobileLayout;
