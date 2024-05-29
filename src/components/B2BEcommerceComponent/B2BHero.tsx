import Image from "next/image";
import React from "react";
import B2BHeroInfo from "./B2BHeroInfo";

const B2BHero = () => {
  return (
    <section id="b2b_hero">
      <div className="pt-[48px] lg:pt-[88px] ">
        <div className="relative w-[100vw] h-[40vh] sm:h-[65vh]  xl:h-[100vh] 3xl:h-[55vh]  ">
          <Image
            src={`/b2b/hero.png`}
            alt="hero"
            fill
            className="object-cover object-[100%] md:object-top"
          />

          <div className="hidden sm:block absolute  w-full h-full">
            <B2BHeroInfo />
          </div>
        </div>
        <div className="-mt-20 z-100 relative sm:hidden">
          <B2BHeroInfo />
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
