import { RESULTS_DELIVERED } from "@/prototypes/Results";

import React from "react";
import { ResultsDeliveredItem } from ".";
import { RESULTS_DELIVERED_HEADING } from "@/constants/Results";

const ResultsDelivered = () => {
  return (
    <section>
      <div className="wrapper_container mt-24 mb-24 ">
        <div className="flex-center mb-12">
          <h1 className="text-[2.1rem] font-[500] mx-4 text-gray-800 ">
            {RESULTS_DELIVERED_HEADING}
          </h1>
        </div>
        <div className="  grid grid-cols-2  gap-4 lg:gap-0 md:flex item-center justify-center md:flex-wrap md:px-12 lg:px-0">
          {RESULTS_DELIVERED.map(({ title, value }) => (
            <ResultsDeliveredItem key={title} title={title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsDelivered;
