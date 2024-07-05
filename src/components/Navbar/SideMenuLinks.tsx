"use client";
import { SIDE_MENU } from "@/prototypes/navbar";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { SideMenuLink } from ".";
import Link from "next/link";
import useDropDown from "@/hooks/useDropDown";

type SideMenuLinksProps = {
  linkClickHandler: () => void;
};

const SideMenuLinks = ({ linkClickHandler }: SideMenuLinksProps) => {
  const {
    selected: selectedMenu,
    toggle: toogleMenu,
    isOpen: isMenuOpen,
  } = useDropDown();

  return (
    <div className="ml-4 mr-5 ">
      {SIDE_MENU.map((menu, indexOfMenu) => (
        <div
          onClick={() => toogleMenu(indexOfMenu)}
          key={menu.title}
          className=" pb-2 border-b-[1px] border-gray-200"
        >
          <div className="text-gray-800 font-bold text-md flex items-center justify-between pb-3 mt-5">
            {menu.subMenu && <p className="tracking-wider">{menu.title}</p>}
            {menu.subMenu &&
              (!isMenuOpen(selectedMenu, indexOfMenu) ? (
                <FaPlus className="cursor-pointer" />
              ) : (
                <FaMinus className="cursor-pointer" />
              ))}
            {!menu.subMenu && menu.link && (
              <Link href={menu.link} onClick={() => linkClickHandler()}>
                {menu.title}
              </Link>
            )}
          </div>
          {isMenuOpen(selectedMenu, indexOfMenu) && (
            <SideMenuLink
              navLinks={menu.subMenu}
              linkClickHandler={() => linkClickHandler()}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SideMenuLinks;
