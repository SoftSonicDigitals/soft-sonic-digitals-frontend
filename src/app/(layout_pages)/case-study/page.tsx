import {
  BannerImage,
  CaseHeadings,
  TheAsk,
} from "@/components/CaseStudiesPage";
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
      <TheAsk theAskDescription={FEATHER_DOWN.theAsk} />
    </>
  );
};

export default page;
