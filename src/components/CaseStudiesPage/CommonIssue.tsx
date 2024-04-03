import { COMMON_ISSUES_FACED } from "@/constants/case_studies_page";
import React from "react";
import { PrimaryLists } from "../Reusable";
type CommonIssuePropsType = {
  commonIssues: string[];
};
const CommonIssue = ({ commonIssues }: CommonIssuePropsType) => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24  px-4 md:px-2">
        <div className="case_study_headings">{COMMON_ISSUES_FACED}</div>
        <PrimaryLists listArray={commonIssues} />
      </div>
    </section>
  );
};

export default CommonIssue;
