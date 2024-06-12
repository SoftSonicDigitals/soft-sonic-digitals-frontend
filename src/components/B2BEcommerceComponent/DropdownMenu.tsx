"use client";
import useDropDown from "@/hooks/useDropDown";
import { B2B_PORTAL_LIST } from "@/prototypes/b2b";
import React from "react";
import DropdownMenuItem from "./DropdownMenuItem";

const DropdownMenu = () => {
  const { selected, isOpen, toggle } = useDropDown();

  return (
    <div>
      {B2B_PORTAL_LIST.map(({ title, description }, index) => (
        <DropdownMenuItem
          title={title}
          description={description}
          index={index}
          key={index}
          toggleItem={toggle}
          selectedItem={selected}
          isItemOpen={isOpen}
        />
      ))}
    </div>
  );
};

export default DropdownMenu;
