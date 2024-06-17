import { B2B_MACH_FEATURES } from "@/prototypes/b2b";
import React from "react";

const MACHInfo = () => {
  return (
    <div className="pl-64">
      {B2B_MACH_FEATURES.map(({ title, description }, index) => (
        <div key={index} className="flex-center gap-12 mb-16 text-gray-900">
          <div className="text-[4rem] font-[700] w-[52.5px] text-orange-600 ">
            {title.slice(0, 1)}
          </div>
          <div>
            <h4 className="text-xl font-[700] mb-2">{title}</h4>
            <p className="tracking-wide">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MACHInfo;
