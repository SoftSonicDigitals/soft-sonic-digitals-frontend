import { RETAILERS_CONCERNS } from "@/prototypes/b2c";
import Image from "next/image";
import React from "react";
import RetailerListLayout from "./RetailerListLayout";

const B2ConcernsExpertise = () => {
  return (
    <section id="concerns_and_expertise">
      <div className="wrapper_container mb-24">
        <div className="md:mx-6 lg:mx-10 xl:mx-16 mb-12 flex gap-6">
          <div className="max-w-[650px] basis-full">
            <RetailerListLayout
              title={RETAILERS_CONCERNS.title}
              list={RETAILERS_CONCERNS.list}
            />
          </div>
          <Image
            src="/b2c/shape.png"
            alt="shape"
            width={496}
            height={600}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default B2ConcernsExpertise;
