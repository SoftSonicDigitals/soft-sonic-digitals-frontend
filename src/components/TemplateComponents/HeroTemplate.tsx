import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../Reusable";

const HeroTemplate = () => {
  return (
    <section className="mb-24">
      <div className="pt-[48px] lg:pt-[88px]">
        <div className="relative w-[100vw] h-[60vh] xl:h-[100vh] 2xl:h-[55vh]">
          <Image
            src="/prototype_page/hero.webp"
            alt="hero"
            fill
            className="object-cover object-[85%] md:object-top"
          />
          <div className="absolute w-full h-full ">
            <div className="wrapper_container h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl lg:text-[2.5rem]  font-[600] text-gray-800 mb-5 tracking-tight ">
                Transform your Jewelry Business Online!
              </h2>
              <p className="text-lg font-[500] text-gray-700 mb-2 ">
                We are the One Stop Shop for all your Jewelry website design &
                development needs.
              </p>
              <div>
                <PrimaryButton
                  title="REQUEST A PROPOSAL"
                  className="px-2 py-2.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTemplate;
