import { RESULTS_DELIVERED } from "@/prototypes/Results";
import React from "react";

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
            <div
              key={title}
              className=" first:pl-0 last:pr-0 px-8 border-r-[1px] border-gray-200 last:border-none"
            >
              <div className="flex flex-center">
                <h2 className="text-6xl font-[500] text-gray-800">{value}</h2>
                <div className="text-7xl font-[400] text-red ">+</div>
              </div>
              <div className="text-[1.5rem] font-[600] text-gray-800">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsDelivered;
