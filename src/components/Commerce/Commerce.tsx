import React from "react";
import { Categories } from ".";
import { COMMERCE_MAIN_HEADING, COMMERCE_SUB_HEADING } from "@/constants/commerce";

const Commerce = () => {
  return (
    <section id="Commerce">
      <div className="wrapper_container flex flex-col gap-12 ">
        <div className="flex-center flex-col gap-6 px-0 sm:px-8 2xl:px-0 2xl:mt-60 3xl:mt-0">
          <div className="flex flex-col gap-6 text-center leading-tight ">
            <h1 className="text-xl sm:text-[1.75rem] lg:text-[2.2rem] font-[600] text-gray-800 ">
              {COMMERCE_MAIN_HEADING}
            </h1>
            <h3 className="hidden md:block text-[.94rem] sm:text-lg md:text-[1.28rem] font-[500] tracking-wide whitespace-pre-wrap">
              {COMMERCE_SUB_HEADING}
            </h3>
          </div>
        </div>
        <Categories />
      </div>
    </section>
  );
};

export default Commerce;
