import { PLATFORM_MENU } from "@/prototypes/navbar";
import Image from "next/image";
import React from "react";

const PlatformSubmenu = () => {
  return (
    <div className="hidden lg:block absolute z-100 top-[5.5rem] right-0 bg-white w-[100vw] shadow-t-md text-gray-900 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transform origin-top  ">
      <div className="flex-center flex-col mt-8 mb-6 ">
        <h2 className="text-2xl mb-4">{PLATFORM_MENU.title}</h2>
        <p className="text-gray-800 font-[400] tracking-normal ">
          {PLATFORM_MENU.description}
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 justify-center wrapper_container gap-5 mb-4 ">
        {PLATFORM_MENU.subMenu.map((menu) => (
          <div key={menu.title}>
            <div className="relative w-24 h-24">
              <Image src={menu.iconPath} alt={`${menu.title}-logo`} fill />
            </div>
            <h4 className="mb-2">{menu.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformSubmenu;
