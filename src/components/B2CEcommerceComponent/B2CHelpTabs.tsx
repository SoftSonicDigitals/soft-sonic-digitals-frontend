"use client";
import React from "react";
import B2CHelpTab from "./B2CHelpTab";
import { HELP_PROVIDED } from "@/prototypes/b2c";
import useDropDown from "@/hooks/useDropDown";
import Reveal from "../Animation/Reveal";

const B2CHelpTabs = () => {
  const { selected, toggle, isOpen } = useDropDown();
  return (
    <div className="basis-full  text-gray-800">
      {HELP_PROVIDED.map((helpItem, index) => (
        <Reveal key={index} index={index}>
          <B2CHelpTab
            indexOfTab={index}
            selectedTab={selected}
            toggleTab={toggle}
            isTabOpen={isOpen}
            key={index}
            title={helpItem.title}
            whatWeDo={helpItem.whatWeDo}
            outcomes={helpItem.outcomes}
            serviceTitle={helpItem?.services?.serviceTitle}
            serviceList={helpItem?.services?.serviceList}
          />
        </Reveal>
      ))}
    </div>
  );
};

export default B2CHelpTabs;
