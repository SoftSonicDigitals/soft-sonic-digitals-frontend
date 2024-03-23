import { COPYRIGHTS_INFO } from "@/constants/copyrights";
import React from "react";

const Copyright = () => {
  return (
    <div className="wrapper_container flex-center border-t-[1px] border-gray-600 max-w-[1270px] mb-6">
      <p className="tracking-wide text-gray-700 mt-4 text-sm md:text-base ">
        {COPYRIGHTS_INFO}
      </p>
    </div>
  );
};

export default Copyright;
