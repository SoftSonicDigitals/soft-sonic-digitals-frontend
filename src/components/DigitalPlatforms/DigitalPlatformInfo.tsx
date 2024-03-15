import {
  DIGITAL_PLATFORM_DESCRIPTION,
  DIGITAL_PLATFORM_HEADING,
} from "@/constants/digital_platforms";
import React from "react";

const DigitalPlatformInfo = () => {
  return (
    <div className="flex flex-col gap-6 mb-4 px-5 md:px-6 2xl:px-8 pt-8 lg:pt-16">
      <h1 className="text-2xl lg:text-4xl font-[500]  ">
        {DIGITAL_PLATFORM_HEADING}
      </h1>
      <p className="text-[1rem] lg:text-xl font-[500] text-gray-800 whitespace-pre-line ">
        {DIGITAL_PLATFORM_DESCRIPTION}
      </p>
    </div>
  );
};

export default DigitalPlatformInfo;
