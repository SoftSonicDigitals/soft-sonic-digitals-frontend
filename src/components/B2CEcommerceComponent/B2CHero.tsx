import {
  B2C_ECOMMERCE_WORD,
  B2C_HERO_HEADING,
  B2C_HERO_DESC,
  B2C_HERO_QUOTE,
} from "@/constants/b2c_ecommerce";
import Image from "next/image";
import React from "react";
import Reveal from "../Animation/Reveal";

const B2CHero = () => {
  const heroHeadingSplit = B2C_HERO_HEADING.split("B2C e-commerce");
  return (
    <section id="b2c_hero" className="bg-white-100">
      <Reveal>
        <div className="wrapper_container mb-12 md:mb-24 mt-[48px] lg:mt-[88px] py-8 lg:py-16 flex-center flex-col-reverse  min-[955px]:flex-row  gap-8 md:gap-16  text-center min-[955px]:text-left ">
          <div className="lg:max-w-[600px]  md:px-8 tracking-wide ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[700] text-gray-800  mb-8 !leading-[1.15]">
              {heroHeadingSplit[0]}
              <span className="inline-block bg-gradient-to-l from-pink to-orange text-white px-1.5 py-1 ">
                {B2C_ECOMMERCE_WORD}
              </span>{" "}
              {heroHeadingSplit[1]}
            </h1>
            <p>{B2C_HERO_DESC}</p>
            <span className="inline-block font-[600] ">{B2C_HERO_QUOTE}</span>
          </div>
          <Image src="/b2c/hero.png" alt="hero-img" width={471} height={476} />
        </div>
      </Reveal>
    </section>
  );
};

export default B2CHero;
