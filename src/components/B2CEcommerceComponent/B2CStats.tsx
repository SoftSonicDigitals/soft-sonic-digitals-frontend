import React from "react";
import B2CStatsContainer from "./B2CStatsContainer";

const B2CStats = () => {
  //   return <section id="ecommerce_stats" className="bg-white-100"></section>;

  return (
    <section id="results">
      <div className="wrapper_container my-24 ">
        <h1 className="md:mx-6 lg:mx-10 xl:mx-16 text-2xl sm:text-2xl  xl:text-4xl font-[700] text-gray-800 !leading-[1.32]   text-center mb-10">
          Uplift eCommerce experience for globally renowned brands through
          expertise
        </h1>

        <B2CStatsContainer />
      </div>
    </section>
  );
};

export default B2CStats;
