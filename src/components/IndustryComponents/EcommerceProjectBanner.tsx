import React from "react";
import { GetInTouchContactBtn } from "../GetInTouch";
import { ECOMMERCE_PROJECT_BANNER_HEADING } from "@/constants/industry";

const EcommerceProjectBanner = () => {
  return (
    <section id="banner" className="bg-black">
      <div className="wrapper_container py-8 mb-12 md:mb-24">
        <div className="flex justify-around items-center">
          <h1 className="text-xl md:text-2xl font-[500] text-white">
            {ECOMMERCE_PROJECT_BANNER_HEADING}
          </h1>
          <GetInTouchContactBtn btnStyles="hover:text-black transition duration-200">
            LET&apos;S TALK
          </GetInTouchContactBtn>
        </div>
      </div>
    </section>
  );
};

export default EcommerceProjectBanner;
