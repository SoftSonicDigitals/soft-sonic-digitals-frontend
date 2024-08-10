import React from "react";
import { PrimaryLists } from "../Reusable";
import Reveal from "../Animation/Reveal";
type CaseStudyListsProps = {
  title: string;
  list: string[];
};
const CaseStudyLists = ({ list, title }: CaseStudyListsProps) => {
  return (
    <section>
      <Reveal>
        <div className="wrapper_container mb-12 md:mb-24  px-4 md:px-2">
          <div className="case_study_headings">{title}</div>
          <PrimaryLists listArray={list} />
        </div>
      </Reveal>
    </section>
  );
};

export default CaseStudyLists;
