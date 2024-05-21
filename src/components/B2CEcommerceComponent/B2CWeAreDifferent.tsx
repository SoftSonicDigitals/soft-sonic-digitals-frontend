import {
  WE_ARE_DIFF_HEADING,
  WE_ARE_DIFF_HEADING_TIMEFRAME,
} from "@/constants/b2c_ecommerce";
import { WE_ARE_DIFF_REASONS } from "@/prototypes/b2c";
import Image from "next/image";
import React from "react";

const B2CWeAreDifferent = () => {
  return (
    <section id="we_are_different">
      <div className="wrapper_container mb-24">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700] text-gray-800 !leading-[1.25]  text-center md:mx-6 lg:mx-10 xl:mx-32 mb-12">
            <span className="border-b-[1px] border-gray-800">
              {" "}
              {WE_ARE_DIFF_HEADING_TIMEFRAME}
            </span>{" "}
            {WE_ARE_DIFF_HEADING}
          </h1>
        </div>

        <div className="flex-center flex-col lg:flex-row gap-10  md:mx-6 lg:mx-10 xl:mx-32 mb-12 ">
          <div className="hidden sm:block basis-full">
            <Image
              src="/b2c/we_are_different.png"
              alt="we are different"
              width={700}
              height={707}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className=" basis-full pl-2 lg:pl-12 ">
            <h3 className="text-2xl font-[700] font-gray-800 text-left mb-10 ">
              {WE_ARE_DIFF_REASONS.title}
            </h3>
            {WE_ARE_DIFF_REASONS.reasons.map(
              ({ reason, description }, index) => (
                <div key={index} className="mb-8">
                  <p className="text-xl font-[700] mb-2">{reason}</p>
                  <p>{description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2CWeAreDifferent;
