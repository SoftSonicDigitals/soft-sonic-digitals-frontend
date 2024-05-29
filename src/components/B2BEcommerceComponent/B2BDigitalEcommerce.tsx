import {
  B2B_DIGITAL_ECOMMERCE_DESCRIPTION,
  B2B_DIGITAL_ECOMMERCE_HEADING,
} from "@/constants/b2b_ecommerce";
import React from "react";
const B2BDigitalEcommerce = () => {
  return (
    <section id="digital_ecommerce" className="bg-white-100 ">
      <div className="wrapper_container mb-24  py-16 max-w-[750px] lg:max-w-fit">
        <h1 className="section_heading text-center mb-5">
          {B2B_DIGITAL_ECOMMERCE_HEADING}
        </h1>
        <p className="section_description px-3  lg:px-10">
          {B2B_DIGITAL_ECOMMERCE_DESCRIPTION}
        </p>
      </div>
    </section>
  );
};

export default B2BDigitalEcommerce;
