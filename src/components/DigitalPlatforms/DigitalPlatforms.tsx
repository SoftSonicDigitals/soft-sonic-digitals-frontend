import { PLATFORM_MENU } from "@/prototypes/navbar";
import React from "react";
import { DigitalPlatformInfo } from ".";
import { Platform } from "../Reusable";
const DigitalPlatforms = () => {
  return (
    <section id="digital_platforms" className="bg-gray-0">
      <div className="wrapper_container flex items-center justify-center  lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] mb-24 py-16 px-8 lg:px-0 max-w-[750px] lg:max-w-max">
          <DigitalPlatformInfo />
          <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-x-8 xl:gap-x-10 lg:gap-y-3 xl:gap-y-6 justify-center   mb-4 ">
            {PLATFORM_MENU.subMenu.map(
              ({ title, link, iconPath, iconWidth, description }) => (
                <Platform
                  key={title}
                  title={title}
                  link={link}
                  iconPath={iconPath}
                  iconWidth={iconWidth}
                  description={description}
                  showArrow={true}
                  containerStyles={
                    "mx-5 my-3 lg:m-0 lg:px-5 lg:py-4 border-b-[1px] border-gray-200 lg:border-none"
                  }
                  imageContainerStyles="mb-5"
                  infoContainerStyles="mb-8"
                  headingStyles="mb-2 font-[700] text-gray-800 text-xl "
                  descriptionStyles="text-sm tracking-wide font-[500] text-gray-700"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatforms;
