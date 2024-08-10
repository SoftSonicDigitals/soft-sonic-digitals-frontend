import React from "react";
import Reveal from "../Animation/Reveal";
type CaseStudyInfoProps = {
  title: string;
  description: string;
};
const CaseStudyInfo = ({ title, description }: CaseStudyInfoProps) => {
  return (
    <section>
      <Reveal>
        <div className="wrapper_container mb-12 md:mb-24 px-4 md:px-2">
          <div className="case_study_headings ">{title} </div>
          <div className="text-lg font-[500] text-gray-400">{description}</div>
        </div>
      </Reveal>
    </section>
  );
};

export default CaseStudyInfo;
