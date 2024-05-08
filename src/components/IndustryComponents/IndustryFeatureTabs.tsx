"use client";
import React, { useState } from "react";
const feature = [
  "360 degree view",
  "Warranty claim",
  "Third party platforms",
  "Search & Filtering",
  "Display management",
  "Mood-board design",
  "Make to order",
  "Chatbot support",
];
const IndustryFeatureTabs = () => {
  const [toogleState, setToogleState] = useState<number>(0);

  return (
    <section id="features">
      <div className="wrapper_container mb-24">
        <h1
          className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-8 text-center `}
        >
          Unveiling the Secrets to Building an Effective Jewelry eCommerce
          Solution
        </h1>

        <div>
          <div className="flex px-4 bg-white-100 border-gray-600 rounded-md border-b-[1px] ">
            {feature.map((item, index) => (
              <button
                key={index}
                className={`text-[17px] font-[600] relative text-gray-700 rounded-t px-3 py-3 mx-[2px] border-gray-600  border-[1px] ${
                  toogleState === index
                    ? " border-[1px] text-orange bg-white after:w-full after:h-[2px]  after:absolute after:left-0 after:-bottom-0.5 after:bg-white "
                    : " bg-white-100  hover:bg-white-200 border-white-100"
                }`}
                onClick={() => {
                  setToogleState(index);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFeatureTabs;
