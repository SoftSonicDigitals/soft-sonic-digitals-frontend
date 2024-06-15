"use client";
import useDropDown from "@/hooks/useDropDown";
import React from "react";
import DropdownMenuItem from "./DropdownMenuItem";
type DropdownMenuProps = {
  dropDownList: {
    title: string;
    description: string;
    iconPath?: string;
  }[];
};
const DropdownMenu = ({ dropDownList }: DropdownMenuProps) => {
  const { selected, isOpen, toggle } = useDropDown();

  return (
    <div className="basis-full flex xl:items-center justify-center flex-col mx-auto">
      {dropDownList.map(({ title, description, iconPath }, index) => (
        <DropdownMenuItem
          title={title}
          description={description}
          index={index}
          key={index}
          toggleItem={toggle}
          selectedItem={selected}
          isItemOpen={isOpen}
          iconPath={iconPath}
        />
      ))}
    </div>
  );
};

export default DropdownMenu;
