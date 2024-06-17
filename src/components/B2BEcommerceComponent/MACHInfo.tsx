import { B2B_MACH_FEATURES } from "@/prototypes/b2b";
import React from "react";
import MACHItem from "./MACHItem";

const MACHInfo = () => {
  return (
    <div className="sm:px-3 lg:pl-64">
      {B2B_MACH_FEATURES.map(({ title, description }, index) => (
        <MACHItem key={index} title={title} description={description} />
      ))}
    </div>
  );
};

export default MACHInfo;
