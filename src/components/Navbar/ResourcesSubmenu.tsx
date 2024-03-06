import { RESOURCES_MENU } from "@/prototypes/navbar";
import Link from "next/link";
import React from "react";
type ResourcesSubmenuProps = {
  setIsOpen: React.Dispatch<boolean>;
};
const ResourcesSubmenu = ({ setIsOpen }: ResourcesSubmenuProps) => {
  // to make responsive menu
  const gapFromRight =
    "right-[21rem] xl:right-[27.5rem] 2xl:right-[29rem]  3xl:right-[48.3rem] min-[2000px]:right-[calc(100vw/2-13rem)]  min-[2160px]:right-[calc(100vw/2-14.8rem)] min-[2260px]:right-[calc(100vw/2-18rem)] min-[2350px]:right-[calc(100vw/2-22rem)]  min-[2460px]:right-[calc(100vw/2-22rem)]";

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`hidden lg:block absolute z-100 top-[5.5rem] w-[155px] 
       bg-white  shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transform origin-top ${gapFromRight}  `}
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
