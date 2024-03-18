import { CASE_STUDIES } from "@/prototypes/case_studies";
import React from "react";
import { CaseStudy } from ".";
import { PrimaryButton, PrimaryStyledHeadings } from "../Reusable";
import {
  CASE_STUDIES_HEADING,
  CASE_STUDIES_SUBHEADING,
} from "@/constants/case_studies";

const CaseStudies = () => {
  return (
    <section id="case_studies">
      <div className="wrapper_container mb-24">
        <PrimaryStyledHeadings
          mainHeading={CASE_STUDIES_HEADING}
          subHeading={CASE_STUDIES_SUBHEADING}
          mainHeadingStyles="mx-4"
        />
        <div className="flex-center mb-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center justify-center max-w-[1300px] md:px-[2%] lg:px-10 xl:px-6 2xl:p-0 2xl:gap-x-8 2xl:gap-y-0">
            {CASE_STUDIES.map(({ title, link, imageName, id }, index) => (
              <CaseStudy
                title={title}
                link={link}
                imageName={imageName}
                index={index}
                key={id}
              />
            ))}
          </div>
        </div>

        <div className="flex-center">
          <PrimaryButton
            title="VIEW ALL"
            className="px-11 py-3 md:px-14 md:py-4"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
