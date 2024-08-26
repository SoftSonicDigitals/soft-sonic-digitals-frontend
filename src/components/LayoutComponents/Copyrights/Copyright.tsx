import { COPYRIGHTS_INFO } from "@/constants/home";
import React from "react";
import Reveal from "../../Animation/Reveal";

const Copyright = () => {
  return (
    <Reveal>
      <div className="wrapper_container flex-center border-t-[1px] border-gray-600 max-w-[1270px] mb-6">
        <p className="tracking-wider text-gray-700 mt-4 text-sm  ">
          {COPYRIGHTS_INFO}
        </p>
      </div>
    </Reveal>
  );
};

export default Copyright;
