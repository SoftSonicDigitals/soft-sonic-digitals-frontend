import Image from "next/image";
import React from "react";

const HeroTemplate = () => {
  return (
    <section className="mb-24">
      <div className="relative w-[100vw] h-[70vh]">
        <Image
          src="/prototype_page/hero.webp"
          alt="hero"
          fill
          className="object-cover object-[85%]"
        />
      </div>
    </section>
  );
};

export default HeroTemplate;
