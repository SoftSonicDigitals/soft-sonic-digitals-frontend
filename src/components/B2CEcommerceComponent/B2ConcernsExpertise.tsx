import Image from "next/image";
import React from "react";
import ConcernExpertiseContainer from "./ConcernExpertiseContainer";

const B2ConcernsExpertise = () => {
  return (
    <section id="concerns_and_expertise">
      <div className="wrapper_container mb-24">
        <div className="md:mx-6 lg:mx-10 xl:mx-16 mb-12 flex gap-6">
          <div className="max-w-[650px] basis-full">
            <ConcernExpertiseContainer />
          </div>
          <div className="w-[496px] h-[600px] relative">
            <Image
              src="/b2c/shape.png"
              alt="shape"
              fill
              style={{ objectFit: "contain" }}
              className="hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2ConcernsExpertise;
