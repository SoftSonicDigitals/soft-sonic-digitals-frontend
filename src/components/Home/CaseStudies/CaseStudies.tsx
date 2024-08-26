import React from "react";
import { CaseStudiesLayout, CaseStudy } from ".";
import { PrimaryStyledHeadings, ViewAllBtn } from "../../Reusable";
import {
  CASE_STUDIES_HEADING,
  CASE_STUDIES_SUBHEADING,
} from "@/constants/home";
import Reveal from "../../Animation/Reveal";

const CaseStudies = () => {
  return (
    <section id="case_studies">
      <div className="wrapper_container mb-24">
        <Reveal>
          <PrimaryStyledHeadings
            mainHeading={CASE_STUDIES_HEADING}
            subHeading={CASE_STUDIES_SUBHEADING}
            mainHeadingStyles="mx-4"
            containerStyles="mb-16 gap-4 px-5 md:px-8"
          />
        </Reveal>

        <CaseStudiesLayout showAllButton={true} />
      </div>
    </section>
  );
};

export default CaseStudies;
