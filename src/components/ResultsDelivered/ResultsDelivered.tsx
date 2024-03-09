import React from "react";

const ResultsDelivered = () => {
  return (
    <section>
      <div className="wrapper_container mt-24 ">
        <div className="flex-center mb-12">
          <h1 className="text-[2.1rem] font-[500] mx-4 text-gray-800 ">
            The results we deliver
          </h1>
        </div>
        <div className="flex-center flex-col">
          <div>
            <div className="flex flex-center">
              <h2 className="text-7xl font-[500] text-gray-800">120</h2>
              <div className="text-8xl font-[400] text-red">+</div>
            </div>
            <div className="text-[1.7rem] font-[600] text-gray-800">
              Global Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDelivered;
