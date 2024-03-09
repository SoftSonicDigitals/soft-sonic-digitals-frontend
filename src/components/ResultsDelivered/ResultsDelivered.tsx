import { RESULTS_DELIVERED } from "@/prototypes/Results";

import React from "react";
import { ResultsDeliveredItem } from ".";

const ResultsDelivered = () => {
  return (
    <section>
      <div className="wrapper_container mt-24 mb-24 ">
        <div className="flex-center mb-12">
          <h1 className="text-[2.1rem] font-[500] mx-4 text-gray-800 ">
            The results we deliver
          </h1>
        </div>
        <div className="flex-center ">
          {RESULTS_DELIVERED.map(({ title, value }) => (
            <ResultsDeliveredItem key={title} title={title} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsDelivered;
