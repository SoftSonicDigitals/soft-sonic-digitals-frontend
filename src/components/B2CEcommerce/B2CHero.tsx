import Image from "next/image";
import React from "react";

const B2CHero = () => {
  return (
    <section id="b2c_hero" className="bg-white-100">
      <div className="wrapper_container mb-24 mt-[48px] lg:mt-[88px] py-16 flex-center gap-16  ">
        <div className="max-w-[575px] px-8">
          <h1 className="text-5xl font-[700] text-gray-700  leading-[1.125] mb-8">
            Online retailers don&apos;t just love us, they trust us to solve
            their <p>B2C e-commerce </p> challenges
          </h1>
          <p>
            Because we believe in, It's not about "trying different things,"
            it's about doing things differently in retail e-commerce
          </p>
        </div>
        <Image src="/b2c/hero.png" alt="hero" width={496} height={502} />
      </div>
    </section>
  );
};

export default B2CHero;
