import {
  BannerImage,
  CaseHeadings,
  CaseStudyInfo,
  CommonIssue,
  ShowCaseImg,
} from "@/components/CaseStudiesPage";
import { SOLUTION, THE_ASK } from "@/constants/case_studies_page";
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
      <CommonIssue commonIssues={FEATHER_DOWN.commonIssues} />
      <ShowCaseImg showCaseImgPath={FEATHER_DOWN.showCaseImg1Path} />
      <CaseStudyInfo title={SOLUTION} description={FEATHER_DOWN.solution} />
    </>
  );
};

export default page;
