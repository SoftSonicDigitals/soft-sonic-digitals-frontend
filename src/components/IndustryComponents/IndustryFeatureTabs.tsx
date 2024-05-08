"use client";
import { JEWELLERY } from "@/prototypes/industries/jewellery";
import React, { useState } from "react";
import FeatureDetails from "./FeatureDetails";
import { IoAddOutline } from "react-icons/io5";
import IndustryFeaturesMobile from "./IndustryFeaturesMobile";
type IndustryFeatureTabsProps = {
  sectionHeading: string;
  featuresArray: {
    heading: string;
    subHeading: string;
    description: string;
    imgPath: string;
  }[];
};

const IndustryFeatureTabs = ({
  sectionHeading,
  featuresArray,
}: IndustryFeatureTabsProps) => {
  const [toogleIndex, setToogleIndex] = useState<number>(0);

  return (
    <section id="features">
      <div className="wrapper_container mb-24">
        <h1
          className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-10 text-center  px-8`}
        >
          {sectionHeading}
        </h1>

        <div>
          {/* for larger screens */}
          <div className="hidden lg:flex justify-center px-4 bg-white-100 border-gray-600 rounded-md border-b-[1px] mb-16">
            {featuresArray.map((feature, index) => (
              <button
                key={index}
                className={`text-[17px]  font-[600] relative text-gray-700 rounded-t px-2 py-3 mx-[2px] border-gray-600  border-[1px]  ${
                  toogleIndex === index
                    ? " border-[1px] text-orange bg-white after:w-full after:h-[2px]  after:absolute after:left-0 after:-bottom-0.5 after:bg-white "
                    : " bg-white-100  hover:bg-white-200 border-white-100"
                }`}
                onClick={() => setToogleIndex(index)}
              >
                {feature.heading}
              </button>
            ))}
          </div>

          {/* for smaller screens  */}
          <IndustryFeaturesMobile featuresArray={featuresArray} />

          <div className=" item-center justify-center gap-8 px-12 hidden lg:flex">
            <FeatureDetails
              heading={JEWELLERY.featuresSection.features[toogleIndex].heading}
              subHeading={
                JEWELLERY.featuresSection.features[toogleIndex].subHeading
              }
              description={
                JEWELLERY.featuresSection.features[toogleIndex].description
              }
              imgPath={JEWELLERY.featuresSection.features[toogleIndex].imgPath}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFeatureTabs;
