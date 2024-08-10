import {
  BannerImage,
  CaseHeadings,
  CaseStudyInfo,
  CaseStudyLists,
  LetsTalkBanner,
  RandomCaseStudies,
  ShowCaseImg,
} from "@/components/CaseStudyPage";
import { RequestProposalBtn } from "@/components/Reusable";

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
  const caseStudyIndex = CASE_STUDIES_ARRAY.findIndex(
    (caseItem) =>
      caseItem.caseName.replaceAll(" ", "_").toLowerCase() === params.case_name
  );
  const caseStudy = CASE_STUDIES_ARRAY[caseStudyIndex];

  if (!caseStudy) {
    redirect("/");
  }

  function pickTwoRandomCaseStudyExcluding(
    arrayLength: number,
    excludeIndex: number
  ) {
    // Generate a random index different from the excluded index
    let randomIndex1 = Math.floor(Math.random() * (arrayLength - 1)); // Subtract 1 to exclude the excluded index
    if (randomIndex1 >= excludeIndex) {
      randomIndex1++; // Adjust the index if it's after the excluded index
    }

    // Generate another random index different from both the excluded index and the first random index
    let randomIndex2 = Math.floor(Math.random() * (arrayLength - 2)); // Subtract 2 to exclude two indices
    if (randomIndex2 >= Math.max(excludeIndex, randomIndex1)) {
      randomIndex2++; // Adjust the index if it's after the excluded or first random index
    } else if (randomIndex2 >= Math.min(excludeIndex, randomIndex1)) {
      randomIndex2 += 2; // Adjust the index if it's in between the excluded and first random index
    }

    return [CASE_STUDIES_ARRAY[randomIndex1], CASE_STUDIES_ARRAY[randomIndex2]];
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
      <RandomCaseStudies
        randomCases={pickTwoRandomCaseStudyExcluding(
          CASE_STUDIES_ARRAY.length,
          caseStudyIndex
        )}
      />
      <LetsTalkBanner />
      <RequestProposalBtn />
    </>
  );
};

export default CaseStudyPage;
