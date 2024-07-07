import React from "react";
import B2CHelpTabs from "./B2CHelpTabs";
import { B2C_HELP_HEADING } from "@/constants/b2c_ecommerce";
import Reveal from "../Animation/Reveal";

const B2CHelp = () => {
  return (
    <section id="help_every_step">
      <Reveal>
        <div className="wrapper_container mb-12 mb:mb-24 ">
          <div className=" md:mx-6 lg:mx-10 xl:mx-16 flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-16  2xl:gap-28 max-w-[725px] lg:max-w-fit mx-auto">
            <div className="lg:basis-[70%] xl:basis-[60%]">
              <h1 className=" text-2xl sm:text-2xl  xl:text-4xl font-[700] text-gray-800 !leading-[1.32]   ">
                {B2C_HELP_HEADING}
              </h1>
            </div>

            <B2CHelpTabs />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default B2CHelp;
