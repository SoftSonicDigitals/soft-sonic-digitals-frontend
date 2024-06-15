import { B2B_INDUSTRIES } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";

const B2BIndustries = () => {
  return (
    <section id="b2b_industries">
      <div className="wrapper_container mb-24">
        <div className="flex flex-col lg:flex-row  items-center justify-around  gap-6 ">
          <p className="text-2xl lg:text-4xl font-[500] basis-[30%] text-gray-800 tracking-wide !leading-snug text-center lg:text-left">
            Our B2B commerce solutions cover the following industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4   p-4 ">
            {B2B_INDUSTRIES.map(({ title, iconPath }, index) => (
              <div
                key={index}
                className="flex-col  flex-center w-[175px] lg:w-[155px] xl:w-[175px] h-[200px] border-[1.5px] border-gray-100"
              >
                <Image
                  src={iconPath}
                  alt={title}
                  width={72}
                  height={72}
                  className="mb-6"
                />
                <p className="text-center text-lg mb-6 font-[500] text-gray-800">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BIndustries;
