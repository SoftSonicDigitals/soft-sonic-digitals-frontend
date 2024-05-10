import React from "react";
import { GetInTouchContactBtn } from "../GetInTouch";
import { PrimaryStyledHeadings } from "../Reusable";

const IndustryBanner = () => {
  return (
    <section id="banner" className="bg-black">
      <div className="wrapper_container py-8 mb-12 md:mb-24">
        <div className="my-3 ">
          <PrimaryStyledHeadings
            mainHeading="Talk to our gems & jewelry web designer consultant"
            subHeading="Communication is the key for us to understand each other. Allow us to understand your requirements or queries. Present us with an opportunity to serve you."
            subHeadingStyles="text-white 2xl:px-20"
            mainHeadingStyles="mb-8 text-white"
            containerStyles="mb-12 px-8  md:px-12 lg:px-8 xl:px-12 "
          />
          <div className="flex-center w-full">
            <GetInTouchContactBtn>HIRE NOW</GetInTouchContactBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryBanner;
