import { CASE_STUDIES } from "@/prototypes/case_studies";
import React from "react";
import CaseStudy from "./CaseStudy";
import { ViewAllBtn } from "../Reusable";

const CaseStudiesContainer = () => {
  return (
    <>
      <div className="flex-center mb-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center justify-center max-w-[1300px] md:px-[2%] lg:px-10 xl:px-6 2xl:p-0 2xl:gap-x-8 2xl:gap-y-0">
          {CASE_STUDIES.map(({ title, link, imageName, id }, index) => (
            <CaseStudy
              title={title}
              link={link}
              imageName={imageName}
              index={index}
              key={id}
            />
          ))}
        </div>
      </div>

      <ViewAllBtn />
    </>
  );
};

export default CaseStudiesContainer;
