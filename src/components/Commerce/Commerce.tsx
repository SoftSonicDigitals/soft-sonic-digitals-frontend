import {
  COMMERCE_MAIN_HEADING,
  COMMERCE_SUB_HEADING,
} from "@/constants/Commerce";
import React from "react";
import { Categories } from ".";

const Commerce = () => {
  return (
    <section id="Commerce">
      <div className="wrapper_container ">
        <div className="flex-center flex-col gap-6 px-8 2xl:px-0 2xl:mt-60 3xl:mt-0">
          <div className="flex flex-col gap-6 text-center leading-tight ">
            <h1 className="text-[2.2rem] font-[600] text-gray-800">
              {COMMERCE_MAIN_HEADING}
            </h1>
            <h3 className="text-[.94rem] sm:text-lg md:text-[1.28rem] font-[500] tracking-wide whitespace-pre-wrap">
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
