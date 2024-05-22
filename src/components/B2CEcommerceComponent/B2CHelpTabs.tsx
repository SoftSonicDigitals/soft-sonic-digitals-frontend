import React from "react";
import B2CHelpTab from "./B2CHelpTab";
import { HELP_PROVIDED } from "@/prototypes/b2c";

const B2CHelpTabs = () => {
  return (
    <div className="basis-full  text-gray-800">
      {HELP_PROVIDED.map((helpItem, index) => (
        <B2CHelpTab
          key={index}
          title={helpItem.title}
          whatWeDo={helpItem.whatWeDo}
        />
      ))}
    </div>
  );
};

export default B2CHelpTabs;
