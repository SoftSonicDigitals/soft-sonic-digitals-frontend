import { PLATFORM_MENU } from "@/prototypes/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DigitalPlatforms = () => {
  return (
    <section id="digital_platforms" className="bg-gray-0">
      <div className="wrapper_container flex-center mb-24 pb-24">
        <div className="flex-center flex-col mb-16 gap-4 px-5 md:px-8 ">
          <h1 className="text-2xl md:text-[2.1rem] font-[500] mx-4 ">
            Digital Commerce Platform
          </h1>
          <p className="text-[1rem] md:text-xl font-[500] text-gray-800 text-center">
            We will recommend and propose a digital commerce platform that is
            most aligned with your business vision and objectives. When you’ve
            reached a crossroads and are unsure what to do next, we will use
            data-informed decisions that turn your transactional experience into
            a journey driving absolute customer value
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 lg:gap-x-8 xl:gap-x-10 justify-center   mb-4 ">
          {PLATFORM_MENU.subMenu.map((menu) => (
            <Link href={menu.link} key={menu.title}>
              <div className="px-5 pt-4 pb-6 ">
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
    </section>
  );
};

export default DigitalPlatforms;
