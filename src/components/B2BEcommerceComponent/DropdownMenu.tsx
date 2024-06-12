"use client";
import useDropDown from "@/hooks/useDropDown";
import { B2B_PORTAL_LIST } from "@/prototypes/b2b";
import React, { Fragment } from "react";
import { FaPlus } from "react-icons/fa6";

const DropdownMenu = () => {
  const { selected, isOpen, toggle } = useDropDown();

  return (
    <div>
      {B2B_PORTAL_LIST.map(({ title, description }, index) => (
        <Fragment key={index}>
          {!isOpen(selected, index) && (
            <div
              className={`flex item-center pl-12 gap-8 mb-20  w-[587px] `}
              onClick={() => toggle(index)}
            >
              <div className="flex-center">
                <FaPlus />
              </div>
              <p className="text-xl font-[700]">{title}</p>
            </div>
          )}
          {isOpen(selected, index) && (
            <div
              className="w-[587px] px-24 py-12 shadow-lg border-l-4 border-gray-800 mb-8 "
              onClick={() => toggle(index)}
            >
              <p className="text-xl font-[700] mb-3">{title}</p>
              {description}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default DropdownMenu;
