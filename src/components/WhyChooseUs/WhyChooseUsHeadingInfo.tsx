import React from "react";
import {
  WHY_CHOOSE_US_DESCRIPTION,
  WHY_CHOOSE_US_HEADING,
} from "@/constants/why_choose_us";

const WhyChooseUsHeadingInfo = () => {
  return (
    <div className="flex flex-col gap-6 mb-8 lg:mb-0 px-5 md:px-0 lg:px-6 2xl:px-8 pt-8 lg:pt-16 text-center lg:text-left  ">
      <h1 className="text-2xl md:text-4xl font-[500]  ">
        {WHY_CHOOSE_US_HEADING}
      </h1>
      <p className="text-[1rem] md:text-xl font-[500] text-gray-800 whitespace-pre-line  ">
        {WHY_CHOOSE_US_DESCRIPTION}
      </p>
    </div>
  );
};

export default WhyChooseUsHeadingInfo;
