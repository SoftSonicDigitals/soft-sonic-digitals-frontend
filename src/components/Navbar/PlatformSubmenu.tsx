import { PLATFORM_MENU } from "@/prototypes/navbar";
import React from "react";
import { Platform } from "../Reusable";

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

      <div className="grid grid-cols-3 grid-rows-2 lg:gap-x-8 xl:gap-x-10 justify-center wrapper_container  mb-4 ">
        {PLATFORM_MENU.subMenu.map(
          ({ title, link, iconPath, iconWidth, description }) => (
            <Platform
              key={title}
              title={title}
              link={link}
              iconPath={iconPath}
              iconWidth={iconWidth}
              description={description}
              showArrow={false}
              containerStyles={"px-5 pt-4 pb-6 hover:bg-gray-0"}
              imageContainerStyles="mb-3"
              infoContainerStyles=""
              headingStyles="mb-2 "
              descriptionStyles="tracking-wider font-[400] text-sm"
            />
          )
        )}
      </div>
    </div>
  );
};

export default PlatformSubmenu;
