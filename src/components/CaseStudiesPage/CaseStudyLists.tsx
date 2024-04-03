import React from "react";
import { PrimaryLists } from "../Reusable";
type CaseStudyListsProps = {
  title: string[];
  list: string[];
};
const CaseStudyLists = ({ list, title }: CaseStudyListsProps) => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24  px-4 md:px-2">
        <div className="case_study_headings">{title}</div>
        <PrimaryLists listArray={list} />
      </div>
    </section>
  );
};

export default CaseStudyLists;
