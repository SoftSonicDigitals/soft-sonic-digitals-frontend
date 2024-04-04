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
  RESPONSIVE_LAYOUT,
  SOLUTION,
  TAKE_AWAY,
  THE_ASK,
} from "@/constants/case_studies_page";
import { CASE_STUDIES_ARRAY } from "@/prototypes/case_study_pages";
import { redirect } from "next/navigation";

import React from "react";

const CaseStudyPage = ({ params }: { params: { case_name: string } }) => {
  const caseStudy = CASE_STUDIES_ARRAY.find(
    (caseItem) =>
      caseItem.caseName.replaceAll(" ", "_").toLowerCase() === params.case_name
  );

  if (!caseStudy) {
    redirect("/");
  }

  return (
    <>
      <CaseHeadings
        caseName={caseStudy.caseName}
        caseOutcomes={caseStudy.caseOutcomes}
      />
      <BannerImage bannerImgPath={caseStudy.bannerImg1Path} />
      <CaseStudyInfo title={THE_ASK} description={caseStudy.theAsk} />
      <CaseStudyLists list={caseStudy.commonIssues} title={COMMON_ISSUES} />
      <ShowCaseImg showCaseImgPath={caseStudy.showCaseImg1Path} />
      <CaseStudyInfo title={SOLUTION} description={caseStudy.solution} />
      <ShowCaseImg showCaseImgPath={caseStudy.showCaseImg2Path} />
      <CaseStudyLists list={caseStudy.benefits} title={BENEFITS} />

      <CaseStudyInfo
        title={FACTS_FIGURES}
        description={caseStudy.factsFigures}
      />
      <ShowCaseImg showCaseImgPath={caseStudy.showCaseImg3Path} />
      <BannerImage bannerImgPath={caseStudy.bannerImg2Path} />
      <CaseStudyInfo
        title={RESPONSIVE_LAYOUT}
        description={caseStudy.responsiveLayout}
      />
      <ShowCaseImg showCaseImgPath={caseStudy.responsiveShowCaseImgPath} />
      <CaseStudyInfo title={TAKE_AWAY} description={caseStudy.takeAway} />
    </>
  );
};

export default CaseStudyPage;
