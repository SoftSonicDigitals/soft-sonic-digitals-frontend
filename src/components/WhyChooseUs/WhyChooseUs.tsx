import Image from "next/image";
import React from "react";
import { WhyChooseUsHeadingInfo } from ".";

const WhyChooseUs = () => {
  return (
    <section id="why_choose_us">
      <div className="wrapper_container mb-24 flex-center">
        <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 2xl:gap-x-6  md:px-8 lg:px-0  2xl:pl-[6%] 2xl:pr-[4%] 3xl:pl-[2%] 3xl:pr-[2%] max-w-[750px] lg:max-w-max">
          <WhyChooseUsHeadingInfo />

          <Image
            src="/why_choose_us/Why-choose-us.webp"
            alt="image"
            width={602}
            height={516}
            style={{ objectFit: "contain" }}
            className="md:row-span-2"
          />

          <div className="grid grid-cols-1 md:grid-cols-2  gap-y-6 gap-x-12 lg:gap-6 mb-4 px-5 md:px-6 2xl:px-8 pt-8 lg:pt-16">
            {[0, 0, 0, 0, 0, 0].map((index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange to-pink w-full text-white font-[500] text-xl lg:text-base xl:text-xl px-6 py-4"
              >
                13+ Yrs Experience
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
