import React from "react";
import { PrimaryButton } from "../Reusable";
import {
  HERO_BUTTON_TEXT,
  HERO_MAIN_HEADING,
  HERO_SUB_HEADING,
} from "@/constants/Hero";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="wrapper_container flex-center  flex-col h-[65vh] sm:h-[57vh] 2xl:h-[45vh]">
        <div className="flex flex-col gap-6 px-4 sm:px-0 2xl:mt-28 3xl:mt-0 pt-16 3xl:pt-4">
          <div className="flex-center flex-col gap-6 text-center leading-tight ">
            <h1 className="text-[2.4rem] font-[500] mx-4 ">
              {HERO_MAIN_HEADING}
            </h1>
            <h3 className="text-[.94rem] sm:text-lg md:text-[1.5rem] font-[500] tracking-wide whitespace-pre-wrap">
              {HERO_SUB_HEADING}
            </h3>
          </div>
          <div className="flex-center">
            <PrimaryButton title={HERO_BUTTON_TEXT} className="px-10 py-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
