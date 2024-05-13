import React from "react";
import Image from "next/image";
import {
  INDUSTRIES_SERVED_ARRAY,
  INDUSTRIES_SERVED_DESCRIPTION,
  INDUSTRIES_SERVED_HEADING,
} from "@/constants/industry";
import IndustriesCard from "./IndustriesCard";

const ServedIndustries = () => {
  return (
    <section>
      <div className="wrapper_container mb-24 flex flex-col lg:flex-row px-3 xl:px-16 gap-10 lg:gap-6 justify-center items-center">
        <div className="mt-6 text-center lg:text-left lg:max-w-[510px]">
          <h1 className={` text-2xl md:text-[2.1rem] font-[500] mb-6 `}>
            {INDUSTRIES_SERVED_HEADING}
          </h1>
          <p className={`text-[1rem] md:text-xl font-[500] text-gray-800 `}>
            {INDUSTRIES_SERVED_DESCRIPTION}
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap  gap-6  xl:grid xl:grid-cols-3 2xl:grid-cols-4">
          {INDUSTRIES_SERVED_ARRAY.map(({ name, image }, index) => (
            <IndustriesCard key={index} name={name} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServedIndustries;
