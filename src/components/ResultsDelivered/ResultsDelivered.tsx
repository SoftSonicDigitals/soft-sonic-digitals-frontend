import { RESULTS_DELIVERED } from "@/prototypes/results";
import React from "react";
import { ResultsDeliveredItem } from ".";
import { RESULTS_DELIVERED_HEADING } from "@/constants/results";
import { PrimaryStyledHeadings } from "../Reusable";

const ResultsDelivered = () => {
  return (
    <section id="results">
      <div className="wrapper_container my-24 ">
        <PrimaryStyledHeadings
          mainHeading={RESULTS_DELIVERED_HEADING}
          containerStyles="mb-12"
        />
        <div className="  grid grid-cols-2  gap-4 lg:gap-0 md:flex item-center justify-center md:flex-wrap md:px-10 lg:px-0">
          {RESULTS_DELIVERED.map(({ title, value }) => (
            <ResultsDeliveredItem key={title} title={title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsDelivered;
