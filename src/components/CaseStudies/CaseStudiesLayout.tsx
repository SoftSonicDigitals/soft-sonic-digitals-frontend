import { CASE_STUDIES } from "@/prototypes/case_studies";
import React from "react";
import CaseStudy from "./CaseStudy";
import { ViewAllBtn } from "../Reusable";

type CaseStudiesLayoutProps = {
  showInfo?: boolean;
  alignment?: "horizontal" | "vertical";
  showAllButton?: boolean;
};

const CaseStudiesLayout = ({
  showInfo = false,
  alignment = "vertical",
  showAllButton = false,
}: CaseStudiesLayoutProps) => {
  const containerHorizontalAlignPadding = "md:px-[2%] lg:mx-4";
  const containerVerticalAlignPadding = "md:px-[2%] lg:px-10 xl:px-6 2xl:p-0";
  const horizontalAlignGridGap = "gap-10 2xl:gap-y-12";
  const VerticalAlignGridGap = "gap-8 md:gap-4 2xl:gap-x-8 2xl:gap-y-0";

  return (
    <>
      <div className="flex-center  ">
        <div
          className={`grid grid-cols-1 ${
            alignment == "vertical"
              ? `md:grid-cols-2
            ${containerVerticalAlignPadding} ${VerticalAlignGridGap}`
              : `${containerHorizontalAlignPadding} ${horizontalAlignGridGap}`
          } items-center justify-center max-w-[1300px] m`}
        >
          {CASE_STUDIES.map(
            (
              { title, link, imageName, id, description, caseStudyPhrase },
              index
            ) => (
              <CaseStudy
                title={title}
                link={link}
                imageName={imageName}
                index={index}
                key={id}
                description={description}
                showInfo={showInfo}
                caseStudyPhrase={caseStudyPhrase}
                alignment={alignment}
              />
            )
          )}
        </div>
      </div>

      {showAllButton && (
        <div className="mt-16">
          <ViewAllBtn />
        </div>
      )}
    </>
  );
};

export default CaseStudiesLayout;
