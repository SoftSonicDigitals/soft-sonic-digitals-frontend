import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { GetInTouchContactBtn } from "../GetInTouch";

const EcommerceProjectBanner = () => {
  return (
    <section id="banner" className="bg-black">
      <div className="wrapper_container py-8 mb-12 md:mb-24">
        <div className="flex justify-around items-center">
          <h1 className="text-xl md:text-2xl font-[500] text-white">
            Have an eCommerce project in mind? We’d love to make your ideas into
            reality.
          </h1>
          <GetInTouchContactBtn>LET&apos;S TALK </GetInTouchContactBtn>
        </div>
      </div>
    </section>
  );
};

export default EcommerceProjectBanner;
