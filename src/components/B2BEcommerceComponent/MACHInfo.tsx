import { B2B_MACH_FEATURES } from "@/prototypes/b2b";
import React from "react";

const MACHInfo = () => {
  return (
    <div className="ml-24">
      {B2B_MACH_FEATURES.map(({ title, description }, index) => (
        <div key={index} className="flex-center gap-12">
          <p className="text-6xl font-[600] ">{title.slice(0, 1)}</p>
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MACHInfo;
