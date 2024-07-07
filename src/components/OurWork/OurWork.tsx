import { OUR_WORK_DESCRIPTION, OUR_WORK_HEADING } from "@/constants/our_work";
import React from "react";
import Reveal from "../Animation/Reveal";

const OurWork = () => {
  return (
    <section id="our_work">
      <div className=" h-[calc(80vh-48px)]  xl:h-[100vh] flex-center bg-gray-950">
        <Reveal>
          <div className="flex flex-col max-w-[600px] lg:max-w-[720px]  text-white items-center justify-center text-center mx-6 md:mx-10 pt-[48px] lg:pt-[88px]">
            <h1 className="text-3xl md:text-6xl  mb-3 tracking-wide">
              {OUR_WORK_HEADING}
            </h1>
            <p className="font-[500] tracking-wider text-base">
              {OUR_WORK_DESCRIPTION}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default OurWork;
