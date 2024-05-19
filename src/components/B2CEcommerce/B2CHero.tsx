import Image from "next/image";
import React from "react";

const B2CHero = () => {
  return (
    <section id="b2c_hero" className="bg-white-100">
      <div className="wrapper_container mb-24 mt-[48px] lg:mt-[88px] py-8 lg:py-16 flex-center flex-col-reverse lg:flex-row gap-8 md:gap-16  ">
        <div className="lg:max-w-[600px]  md:px-8 tracking-wide">
          <h1 className="text-2xl md:text-5xl font-[700] text-gray-800  leading-tight mb-8">
            Online retailers don&apos;t just love us, they trust us to solve
            their{" "}
            <span className="inline-block bg-gradient-to-l from-pink to-orange text-white px-1.5 py-1 ">
              B2C e-commerce
            </span>{" "}
            challenges
          </h1>
          <p>
            Because we believe in, It's not about "trying different things,"{" "}
            <span className="inline-block font-[600] ">
              it's about doing things differently in retail e-commerce
            </span>
          </p>
        </div>
        <Image src="/b2c/hero.png" alt="hero" width={496} height={502} />
      </div>
    </section>
  );
};

export default B2CHero;
