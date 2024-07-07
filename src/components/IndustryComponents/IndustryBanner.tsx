import React from "react";
import { GetInTouchContactBtn } from "../GetInTouch";
import { PrimaryStyledHeadings } from "../Reusable";
import Reveal from "../Animation/Reveal";

type IndustryBanner = {
  title: string;
  description: string;
  btnText: string;
};

const IndustryBanner = ({ title, description, btnText }: IndustryBanner) => {
  return (
    <section id="banner" className="bg-black">
      <Reveal>
        <div className="wrapper_container py-8 mb-12 md:mb-24">
          <div className="my-3 ">
            <PrimaryStyledHeadings
              mainHeading={title}
              subHeading={description}
              subHeadingStyles="text-white 2xl:px-20"
              mainHeadingStyles="mb-8 text-white"
              containerStyles="mb-12 px-4  md:px-12 lg:px-8 xl:px-12  text-center"
            />
            <div className="flex-center w-full">
              <GetInTouchContactBtn>{btnText}</GetInTouchContactBtn>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default IndustryBanner;
