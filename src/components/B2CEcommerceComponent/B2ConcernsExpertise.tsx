import Image from "next/image";
import React from "react";

const B2ConcernsExpertise = () => {
  return (
    <section id="concerns_and_expertise">
      <div className="wrapper_container mb-24">
        <div className="md:mx-6 lg:mx-10 xl:mx-32 mb-12 flex">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <Image
              src="/b2c/shape.png"
              alt="shape"
              width={496}
              height={600}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2ConcernsExpertise;
