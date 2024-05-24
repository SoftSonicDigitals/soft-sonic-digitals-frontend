import React from "react";
import B2CStatsContainer from "./B2CStatsContainer";
import { B2C_STATS_HEADING } from "@/constants/b2c_ecommerce";

const B2CStats = () => {
  return (
    <section id="results" className="bg-white-100 py-20 mb-24">
      <div className="wrapper_container  ">
        <h1 className="md:mx-6 lg:mx-10 xl:mx-16 text-2xl sm:text-2xl  xl:text-4xl font-[700] text-gray-800 !leading-[1.32]   text-center mb-10">
          {B2C_STATS_HEADING}
        </h1>

        <B2CStatsContainer />
      </div>
    </section>
  );
};

export default B2CStats;
