import React from "react";
import CaseStudyTile from "./CaseStudyTile";
import { CASE_STUDIES_ARRAY } from "@/prototypes/case_study_pages";
import Reveal from "../Animation/Reveal";

const CaseStudyTiles = () => {
  return (
    <section id="case_studies">
      <div className="wrapper_container grid md:grid-cols-2 lg:grid-cols-3 sm:mt-4 mb-12 lg:mb-24 max-w-[1190px]">
        {CASE_STUDIES_ARRAY.map(
          ({ caseName, displayImg, displayDescription }, index) => (
            <Reveal key={index} index={index}>
              <CaseStudyTile
                key={index}
                title={caseName}
                description={displayDescription}
                displayImg={displayImg}
              />
            </Reveal>
          )
        )}
      </div>
    </section>
  );
};

export default CaseStudyTiles;
