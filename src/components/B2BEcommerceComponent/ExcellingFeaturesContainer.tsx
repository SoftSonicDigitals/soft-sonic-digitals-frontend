import { B2B_EXCELLING_FEATURES } from "@/prototypes/b2b";
import React from "react";

const ExcellingFeaturesContainer = () => {
  return (
    <div className="basis-3/5 bg-white p-14">
      {B2B_EXCELLING_FEATURES.map(({ title, description }, index) => (
        <div key={index} className="mb-3 last:mb-0 ">
          <p className="font-[700] mb-1 tracking-wide">{title}</p>
          <p className="leading-2 trackig-wide">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExcellingFeaturesContainer;
