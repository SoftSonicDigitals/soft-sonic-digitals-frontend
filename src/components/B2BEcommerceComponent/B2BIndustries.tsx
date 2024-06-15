import { B2B_INDUSTRIES } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";
import IndustryItem from "./IndustryItem";

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
              <IndustryItem key={index} title={title} iconPath={iconPath} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BIndustries;
