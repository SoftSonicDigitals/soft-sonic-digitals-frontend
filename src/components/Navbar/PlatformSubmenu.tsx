import { PLATFORM_MENU } from "@/prototypes/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PlatformSubmenuProps = {
  setIsOpen: React.Dispatch<boolean>;
};

const PlatformSubmenu = ({ setIsOpen }: PlatformSubmenuProps) => {
  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden lg:block absolute z-100 top-[5.5rem] right-0 bg-white w-[100vw] shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transform origin-top  "
    >
      <div className="flex-center flex-col mt-8 mb-6 ">
        <h2 className="text-2xl mb-4">{PLATFORM_MENU.title}</h2>
        <p className="text-gray-800 font-[400] tracking-normal ">
          {PLATFORM_MENU.description}
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-x-10 justify-center wrapper_container  mb-4 ">
        {PLATFORM_MENU.subMenu.map((menu) => (
          <Link href={menu.link} key={menu.title}>
            <div className="px-5 pt-4 pb-6 hover:bg-gray-0 ">
              <div
                className={`relative w-full h-8 mb-3`}
                style={{ width: menu.iconWidth }}
              >
                <Image src={menu.iconPath} alt={`${menu.title}-logo`} fill />
              </div>
              <h4 className="mb-2 ">{menu.title}</h4>
              <div className="font-[400] text-sm">
                <p className=" tracking-wider"> {menu.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlatformSubmenu;
