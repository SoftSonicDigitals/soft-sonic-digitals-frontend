import { B2B_INDUSTRIES } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";

const B2BIndustries = () => {
  return (
    <section id="b2b_industries">
      <div className="wrapper_container mb-24">
        <div className="flex-center  gap-6 px-10">
          <p className="text-3xl basis-[30%]">
            Our B2B commerce solutions cover the following industries
          </p>
          <div className="grid grid-cols-4  border-2 p-4 ">
            {B2B_INDUSTRIES.map(({ title, iconPath }, index) => (
              <div
                key={index}
                className="flex-col flex-center w-[175px] h-[200px]"
              >
                <Image
                  src={iconPath}
                  alt={title}
                  width={72}
                  height={72}
                  className="mb-6"
                />
                <p className="text-center mb-6">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BIndustries;
