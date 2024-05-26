import React from "react";
import B2CaseStudies from "./B2CaseStudies";
import {
  B2C_CASE_STUDIES_DESCRIPTION,
  B2C_CASE_STUDIES_HEADING,
} from "@/constants/b2c_ecommerce";

const B2CaseStudy = () => {
  return (
    <section id="case_study" className="bg-white-100 sm:bg-white">
      <div className="wrapper_container mb-24  ">
        <div className="md:mx-6 lg:mx-10 xl:mx-16 py-12 sm:bg-orange-100">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700] text-gray-800 !leading-[1.25]  text-center md:mx-6 lg:mx-10 xl:mx-32 mb-4">
            {B2C_CASE_STUDIES_HEADING}
          </h1>

          <p className="text-center md:text-lg  mb-10">
            {B2C_CASE_STUDIES_DESCRIPTION}
          </p>

          <B2CaseStudies />
        </div>
      </div>
    </section>
  );
};

export default B2CaseStudy;
