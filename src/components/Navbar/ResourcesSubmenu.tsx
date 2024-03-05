import { RESOURCES_MENU } from "@/prototypes/navbar";
import Link from "next/link";
import React from "react";
type ResourcesSubmenuProps = {
  setIsOpen: React.Dispatch<boolean>;
};
const ResourcesSubmenu = ({ setIsOpen }: ResourcesSubmenuProps) => {
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden lg:block absolute z-100 top-[3.7rem] w-[155px]  bg-white  shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transform origin-top  "
    >
      <div className="flex flex-col  text-sm">
        {RESOURCES_MENU.submenu.map((menu) => (
          <Link
            href={menu.link}
            key={menu.title}
            className="py-3 pl-3  hover:bg-gray-0"
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSubmenu;
