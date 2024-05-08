"use client";
import { JEWELLERY } from "@/prototypes/industries/jewellery";
import Image from "next/image";
import React, { useState } from "react";
const IndustryFeatureTabs = () => {
  const [toogleState, setToogleState] = useState<number>(0);

  return (
    <section id="features">
      <div className="wrapper_container mb-24">
        <h1
          className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-8 text-center `}
        >
          {JEWELLERY.featuresSection.sectionHeading}
        </h1>

        <div>
          <div className="flex-center px-4 bg-white-100 border-gray-600 rounded-md border-b-[1px] mb-16">
            {JEWELLERY.featuresSection.features.map((feature, index) => (
              <button
                key={index}
                className={`text-[17px] font-[600] relative text-gray-700 rounded-t px-2 py-3 mx-[2px] border-gray-600  border-[1px] ${
                  toogleState === index
                    ? " border-[1px] text-orange bg-white after:w-full after:h-[2px]  after:absolute after:left-0 after:-bottom-0.5 after:bg-white "
                    : " bg-white-100  hover:bg-white-200 border-white-100"
                }`}
                onClick={() => {
                  setToogleState(index);
                }}
              >
                {feature.heading}
              </button>
            ))}
          </div>

          {
            <div className="flex-center gap-8 px-12">
              <div className="basis-full">
                <Image
                  src={JEWELLERY.featuresSection.features[toogleState].imgPath}
                  alt="assets"
                  width={587}
                  height={362}
                />
              </div>
              <div className={`basis-full  max-w-[700px]  `}>
                <h1
                  className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-8 text-center md:text-left capitalize`}
                >
                  {JEWELLERY.featuresSection.features[toogleState].heading}
                </h1>

                <h3
                  className={`text-xl md:text-2xl lg:text-xl  font-[500] text-gray-900 text-center md:text-left  tracking-wider`}
                >
                  {JEWELLERY.featuresSection.features[toogleState].subHeading}
                </h3>
                <br />
                <p
                  className={`text-[1rem] md:text-lg lg:text-xl font-[500] text-gray-800  md:text-left  tracking-wider text-center whitespace-pre-line`}
                >
                  {JEWELLERY.featuresSection.features[toogleState].description}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default IndustryFeatureTabs;
