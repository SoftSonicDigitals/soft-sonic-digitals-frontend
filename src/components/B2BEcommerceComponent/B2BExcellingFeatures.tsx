import Image from "next/image";
import React from "react";
import ExcellingFeaturesContainer from "./ExcellingFeaturesContainer";
import {
  B2B_EXCELLING_FEATURES_DESCRIPTION,
  B2B_EXCELLING_FEATURES_HEADING,
} from "@/constants/b2b_ecommerce";
import Reveal from "../Animation/Reveal";

const B2BExcellingFeatures = () => {
  return (
    <section id="b2b_excelling_features" className="bg-white-100 py-20 mb-24">
      <Reveal>
        <div className="wrapper_container ">
          <div className="flex-center flex-col xl:flex-row gap-4 xl:gap-24 mb-12 xl:mb-24 text-center md:text-left">
            <h1 className="section_heading mb-4 xl:w-[488px] flex-shrink-0 px-3">
              {B2B_EXCELLING_FEATURES_HEADING}
            </h1>
            <p className="section_description  ">
              {B2B_EXCELLING_FEATURES_DESCRIPTION}
            </p>
          </div>

          <div className="flex-center flex-col xl:flex-row gap-4 xl:gap-24 ">
            <div className="w-[410px] h-[360px] sm:w-[488px] sm:h-[396px] flex-shrink-0 xl:self-start sticky ">
              <Image
                src="/b2b/excelling_features.png"
                alt="excelling features"
                fill
              />
            </div>
            <ExcellingFeaturesContainer />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default B2BExcellingFeatures;
