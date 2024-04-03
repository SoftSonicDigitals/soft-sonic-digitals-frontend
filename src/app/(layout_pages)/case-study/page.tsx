import {
  BannerImage,
  CaseHeadings,
  CaseStudyInfo,
  ShowCaseImg,
} from "@/components/CaseStudiesPage";
import CaseStudyLists from "@/components/CaseStudiesPage/CaseStudyLists";
import {
  BENEFITS,
  COMMON_ISSUES,
  FACTS_FIGURES,
  SOLUTION,
  THE_ASK,
} from "@/constants/case_studies_page";
import { FEATHER_DOWN } from "@/prototypes/case_study_pages/featherDown";
import React from "react";

const page = () => {
  return (
    <>
      <CaseHeadings
        caseName={FEATHER_DOWN.caseName}
        caseOutcomes={FEATHER_DOWN.caseOutcomes}
      />
      <BannerImage bannerImgPath={FEATHER_DOWN.bannerImgPath} />
      <CaseStudyInfo title={THE_ASK} description={FEATHER_DOWN.theAsk} />
      <CaseStudyLists list={FEATHER_DOWN.commonIssues} title={COMMON_ISSUES} />
      <ShowCaseImg showCaseImgPath={FEATHER_DOWN.showCaseImg1Path} />
      <CaseStudyInfo title={SOLUTION} description={FEATHER_DOWN.solution} />
      <ShowCaseImg showCaseImgPath={FEATHER_DOWN.showCaseImg2Path} />
      <CaseStudyLists list={FEATHER_DOWN.benefits} title={BENEFITS} />

      <CaseStudyInfo
        title={FACTS_FIGURES}
        description={FEATHER_DOWN.factsFigures}
      />
      <ShowCaseImg showCaseImgPath={FEATHER_DOWN.showCaseImg3Path} />
    </>
  );
};

export default page;
