import Image from "next/image";
import React from "react";

const HeroTemplate = () => {
  return (
    <section
      style={{
        background: "#EFEFEF url(/prototype_page/hero.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="h-[100vh] w-[100vw]"></div>
    </section>
  );
};

export default HeroTemplate;
