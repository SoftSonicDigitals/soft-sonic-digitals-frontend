import Image from "next/image";
import React from "react";

const B2BHero = () => {
  return (
    <section>
      <div className="pt-[48px] lg:pt-[88px] ">
        <div className="relative w-[100vw] h-[50vh] xl:h-[100vh] 3xl:h-[50vh]">
          <Image
            src={`/b2b/hero.png`}
            alt="hero"
            fill
            className="object-cover object-[85%] md:object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
