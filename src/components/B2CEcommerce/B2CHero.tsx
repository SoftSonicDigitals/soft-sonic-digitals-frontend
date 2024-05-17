import Image from "next/image";
import React from "react";

const B2CHero = () => {
  return (
    <section id="b2c_hero" className="bg-white-100">
      <div className="wrapper_container mb-24 mt-[48px] lg:mt-[88px]">
        <Image src="/b2c/hero.png" alt="hero" width={496} height={502} />
      </div>
    </section>
  );
};

export default B2CHero;
