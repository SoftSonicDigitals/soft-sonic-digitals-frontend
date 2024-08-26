import { RESULTS_DELIVERED } from "@/prototypes/results";
import React from "react";
import { ResultsDeliveredItem } from ".";
import { RESULTS_DELIVERED_HEADING } from "@/constants/home";
import { PrimaryStyledHeadings } from "../../Reusable";
import Reveal from "../../Animation/Reveal";

type ResultsDeliveredProps = {
  sectionStyles?: string;
};

const ResultsDelivered = ({ sectionStyles }: ResultsDeliveredProps) => {
  return (
    <section
      id="results"
      className={`mb-12 md:my-20 xl:mb-24 ${sectionStyles}`}
    >
      <div className="wrapper_container ">
        <Reveal>
          <PrimaryStyledHeadings
            mainHeading={RESULTS_DELIVERED_HEADING}
            containerStyles="mb-12"
          />
        </Reveal>
        <div className="  grid grid-cols-2  gap-4 lg:gap-0 md:flex item-center justify-center md:flex-wrap md:px-10 lg:px-0">
          {RESULTS_DELIVERED.map(({ title, value }, index) => (
            <Reveal key={index} index={index}>
              <ResultsDeliveredItem key={title} title={title} value={value} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsDelivered;
