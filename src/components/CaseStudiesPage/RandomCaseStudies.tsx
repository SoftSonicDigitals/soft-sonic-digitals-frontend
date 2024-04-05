import React from "react";
import CaseStudyTiles from "./CaseStudyTiles";
import { CaseStudyPage } from "@/models/case_study_page";
import { ViewAllBtn } from "../Reusable";
type RandomCaseStudiesProps = {
  randomCases: CaseStudyPage[];
};
const RandomCaseStudies = ({ randomCases }: RandomCaseStudiesProps) => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-4 pt-16">
        <div className="grid  grid-cols-1  md:grid-cols-2 gap-8 max-w-[576px] md:max-w-fit mx-auto mb-20">
          {randomCases.map((caseStudy, index) => (
            <CaseStudyTiles
              key={index}
              title={caseStudy.caseName}
              posterPath={caseStudy.posterPath}
              logoPath={caseStudy.logoPath}
            />
          ))}
        </div>
        <ViewAllBtn />
      </div>
    </section>
  );
};

export default RandomCaseStudies;
