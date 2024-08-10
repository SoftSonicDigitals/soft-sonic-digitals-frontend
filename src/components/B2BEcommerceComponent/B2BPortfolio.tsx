import React from "react";
import { CaseStudiesLayout } from "../Home/CaseStudies";
import {
  B2B_PORTAL_DESCRIPTION,
  B2B_PORTFOLIO_HEADING,
} from "@/constants/b2b_ecommerce";

const B2BPortfolio = () => {
  return (
    <section id="case_studies" className="bg-white-100 py-16 mb-16">
      <div className="wrapper_container ">
        <div className="px-3 lg:px-12 mb-16">
          <h1 className="section_heading text-center mb-4">
            {B2B_PORTFOLIO_HEADING}
          </h1>
          <p className="section_description text-center whitespace-pre-wrap">
            {B2B_PORTAL_DESCRIPTION}
          </p>
        </div>
        <CaseStudiesLayout
          alignment="vertical"
          showInfo={true}
          showAllButton={true}
        />
      </div>
    </section>
  );
};

export default B2BPortfolio;
