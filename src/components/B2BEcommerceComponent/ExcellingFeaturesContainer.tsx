"use client";

import React from "react";
import FeatureItem from "./FeatureItem";
import { B2B_EXCELLING_FEATURES } from "@/prototypes/b2b";

const ExcellingFeaturesContainer = () => {
  return (
    <div className="basis-3/5 bg-white p-6 md:p-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {B2B_EXCELLING_FEATURES.map(({ title, description }, index) => (
          <FeatureItem key={index} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default ExcellingFeaturesContainer;
