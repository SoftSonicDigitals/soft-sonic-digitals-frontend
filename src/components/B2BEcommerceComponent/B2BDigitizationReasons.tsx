import {
  B2B_DIGITIZATION_REASON_DESCRIPTION,
  B2B_DIGITIZATION_REASON_HEADING,
} from "@/constants/b2b_ecommerce";
import { B2B_DIGITIZATION_LIST } from "@/prototypes/b2b";
import React from "react";
import DigitizationDetails from "./DigitizationDetails";
import DigitizationMobileLayout from "./DigitizationMobileLayout";

const B2BDigitizationReasons = () => {
  return (
    <section id="b2b_digitization_reason">
      <div className="wrapper_container mb-24 flex-center flex-col">
        <div className="mb-12 text-center ">
          <h1 className="section_heading mb-6">
            {B2B_DIGITIZATION_REASON_HEADING}
          </h1>
          <p className="section_description ">
            {B2B_DIGITIZATION_REASON_DESCRIPTION}
          </p>
        </div>
        <DigitizationDetails
          imagePath="/b2b/Diagram.png"
          reasons={B2B_DIGITIZATION_LIST}
        />
        <DigitizationMobileLayout />
      </div>
    </section>
  );
};

export default B2BDigitizationReasons;
