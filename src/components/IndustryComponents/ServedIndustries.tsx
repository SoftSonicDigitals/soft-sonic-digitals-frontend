import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import Image from "next/image";

const ServedIndustries = () => {
  return (
    <section>
      <div className="wrapper_container mb-24 flex px-10 gap-10">
        <div className="max-w-[500px]  ">
          <h1 className={` text-2xl md:text-[2.1rem] font-[500] mb-6 `}>
            Other industries that we serve
          </h1>
          <p className={`text-[1rem] md:text-xl font-[500] text-gray-800 `}>
            Create an ecommerce website backed by powerful tools that help you
            find customers, drive sales, and manage your day-to-day.
          </p>
        </div>
        <div className="flex-center flex-col">
          <div className=" px-10 py-3.5 rounded shadow-custom">
            <Image
              src="/industry/served_industries/Furniture.png"
              alt="industry"
              width={72}
              height={72}
              className="mb-6"
            />
            <p className="text-center text-lg font-[500]">Furniture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServedIndustries;
