import { PLATFORM_MENU } from "@/prototypes/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const DigitalPlatforms = () => {
  return (
    <section id="digital_platforms" className="bg-gray-0">
      <div className="wrapper_container grid grid-cols-1 lg:grid-cols-[1fr,2fr] mb-24 py-24">
        <div className="flex flex-col mb-16 gap-6 px-5 md:px-8 2xl:px-8 pt-8">
          <h1 className="text-2xl md:text-4xl font-[500]  ">
            Digital Commerce Platform
          </h1>
          <p className="text-[1rem] md:text-xl font-[500] text-gray-800 ">
            We will recommend and propose a digital commerce platform that is
            most aligned with your business vision and objectives.
          </p>
          <p className="text-[1rem] md:text-xl font-[500] text-gray-800">
            When you’ve reached a crossroads and are unsure what to do next, we
            will use data-informed decisions that turn your transactional
            experience into a journey driving absolute customer value
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-x-8 xl:gap-x-10 xl:gap-y-6 justify-center   mb-4 ">
          {PLATFORM_MENU.subMenu.map((menu) => (
            <Link href={menu.link} key={menu.title}>
              <div className="px-5 pt-4 pb-6 ">
                <div
                  className={`relative w-full h-8 mb-5`}
                  style={{ width: menu.iconWidth }}
                >
                  <Image src={menu.iconPath} alt={`${menu.title}-logo`} fill />
                </div>
                <div className="mb-8">
                  <h4 className="mb-2 font-[700] text-gray-800 text-xl ">
                    {menu.title}
                  </h4>
                  <div className="font-[400] text-sm ">
                    <p className=" tracking-wide font-[500] text-gray-700">
                      {" "}
                      {menu.description}
                    </p>
                  </div>
                </div>
                <FaArrowRightLong className="hidden lg:block text-xl text-gray-800 " />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatforms;
