import React from "react";
import { ECOMMERCE_PROJECT_BANNER_HEADING } from "@/constants/industry";
import Reveal from "../Animation/Reveal";
import { GetInTouchContactBtn } from "../Home/GetInTouch";

const EcommerceProjectBanner = ({ verticalPadding = "py-8" }) => {
  return (
    <Reveal>
      <section id="banner" className="bg-black">
        <div className={`wrapper_container ${verticalPadding} mb-12 md:mb-24`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 xl:mx-16">
            <h1 className="text-xl md:text-2xl font-[500] text-white text-center lg:text-left xl:max-w-max">
              {ECOMMERCE_PROJECT_BANNER_HEADING}
            </h1>
            <div className="flex w-[200px]">
              <GetInTouchContactBtn btnStyles="hover:text-black transition duration-200 mb-2  basis-full">
                LET&apos;S TALK
              </GetInTouchContactBtn>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default EcommerceProjectBanner;
