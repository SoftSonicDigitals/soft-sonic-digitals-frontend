import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="why_choose_us">
      <div className="wrapper_container mb-24 flex-center">
        <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 2xl:gap-x-6  md:px-8 lg:px-0  2xl:pl-[6%] 2xl:pr-[4%] max-w-[750px] lg:max-w-max">
          <div className="flex flex-col gap-6 mb-8 lg:mb-0 px-5 md:px-0 lg:px-6 2xl:px-8 pt-8 lg:pt-16 text-center lg:text-left  ">
            <h1 className="text-2xl md:text-4xl font-[500]  ">
              Why choose us?
            </h1>
            <p className="text-[1rem] md:text-xl font-[500] text-gray-800 whitespace-pre-line  ">
              A team of digital commerce experts working with manufacturers,
              wholesalers, and retailers globally, turning ideas into unique
              customer & content-centric experiences using a platform-agnostic
              approach. <br /> <br /> We Push Ourselves. We Push Technology & We
              Push the Boundaries of Conventional Commerce.
            </p>
          </div>
          <div className="md:row-span-2">
            <Image
              src="/why_choose_us/Why-choose-us.webp"
              alt="image"
              width={602}
              height={516}
              style={{ objectFit: "contain" }}
            />
          </div>

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
