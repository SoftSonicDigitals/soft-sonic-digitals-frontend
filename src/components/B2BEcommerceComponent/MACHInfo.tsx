import { B2B_MACH_FEATURES } from "@/prototypes/b2b";
import React from "react";
import MACHItem from "./MACHItem";
import Reveal from "../Animation/Reveal";

const MACHInfo = () => {
  return (
    <div className="px-3 lg:pl-64">
      {B2B_MACH_FEATURES.map(({ title, description }, index) => (
        <Reveal key={index} index={index}>
          <MACHItem title={title} description={description} />
        </Reveal>
      ))}
    </div>
  );
};

export default MACHInfo;
