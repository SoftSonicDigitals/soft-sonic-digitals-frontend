import React from "react";
type CaseHeadingsPropsType = {
  caseName: string;
  caseOutcomes: string;
};
const CaseHeadings = ({ caseName, caseOutcomes }: CaseHeadingsPropsType) => {
  return (
    <div className="wrapper_container mb-12 md:mb-24 px-4 md:px-2">
      <div className="pt-[150px] lg:pt-[170px] mb-9 md:mb-12 text-base lg:text-lg xl:text-base font-[700] text-gray-700 tracking-wide uppercase">
        {caseName}
      </div>
      <div className="case_study_headings">{caseOutcomes}</div>
    </div>
  );
};

export default CaseHeadings;
