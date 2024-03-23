import { COPYRIGHTS_INFO } from "@/constants/copyrights";
import React from "react";

const Copyright = () => {
  return (
    <div className="wrapper_container flex-center ">
      <p className="tracking-wide">{COPYRIGHTS_INFO}</p>
    </div>
  );
};

export default Copyright;
