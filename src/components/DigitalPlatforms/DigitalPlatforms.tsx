import { PLATFORM_MENU } from "@/prototypes/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
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
                // <Link href={menu.link} key={menu.title}>
                //   <div className="mx-5 my-3 lg:m-0 lg:px-5 lg:py-4  group border-b-[1px] border-gray-200 lg:border-none">
                //     <div
                //       className={`relative w-full h-8 mb-5`}
                //       style={{ width: menu.iconWidth }}
                //     >
                //       <Image
                //         src={menu.iconPath}
                //         alt={`${menu.title}-logo`}
                //         fill
                //       />
                //     </div>
                //     <div className="mb-8">
                //       <h4 className="mb-2 font-[700] text-gray-800 text-xl ">
                //         {menu.title}
                //       </h4>

                //       <p className="text-sm tracking-wide font-[500] text-gray-700">
                //         {menu.description}
                //       </p>
                //     </div>
                //     <FaArrowRightLong className="hidden lg:block text-lg text-gray-800 group-hover:translate-x-1 transition duration-200 ease-in" />
                //   </div>
                // </Link>

                <Platform />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatforms;
