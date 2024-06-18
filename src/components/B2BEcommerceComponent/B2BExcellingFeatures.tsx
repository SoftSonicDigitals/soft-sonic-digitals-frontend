import Image from "next/image";
import React from "react";
import ExcellingFeaturesContainer from "./ExcellingFeaturesContainer";
import {
  B2B_EXCELLING_FEATURES_DESCRIPTION,
  B2B_EXCELLING_FEATURES_HEADING,
} from "@/constants/b2b_ecommerce";

const B2BExcellingFeatures = () => {
  return (
    <section id="b2b_excelling_features" className="bg-white-100 py-20 mb-24">
      <div className="wrapper_container ">
        <div className="flex-center gap-24 mb-24">
          <h1 className="section_heading mb-4   !w-[488px] flex-shrink-0 px-3">
            {B2B_EXCELLING_FEATURES_HEADING}
          </h1>
          <p className="section_description  ">
            {B2B_EXCELLING_FEATURES_DESCRIPTION}
          </p>
        </div>

        <div className="flex-center gap-20 ">
          <Image
            src="/b2b/excelling_features.png"
            alt="excelling features"
            width={488}
            height={396}
            className="basis-2/5 self-start"
          />
          <ExcellingFeaturesContainer />
        </div>
      </div>
    </section>
  );
};

export default B2BExcellingFeatures;
