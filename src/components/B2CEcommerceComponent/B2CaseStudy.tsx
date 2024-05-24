import React from "react";
import B2CaseStudies from "./B2CaseStudies";

const B2CaseStudy = () => {
  return (
    <section id="case_study">
      <div className="wrapper_container mb-24  ">
        <div className="md:mx-6 lg:mx-10 xl:mx-16 py-12 bg-orange-100">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700] text-gray-800 !leading-[1.25]  text-center md:mx-6 lg:mx-10 xl:mx-32 mb-4">
            Explore the brands who choose us as their partner
          </h1>

          <p className="text-center md:text-lg  mb-10">
            Improve your business outcomes with our expertise
          </p>

          <B2CaseStudies />
        </div>
      </div>
    </section>
  );
};

export default B2CaseStudy;
