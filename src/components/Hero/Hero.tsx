import React from "react";
import { PrimaryButton } from "../Reusable";

const Hero = () => {
  return (
    <div className="wrapper_container flex-center  flex-col h-[78vh]">
      <div className="flex flex-col gap-6">
        <div className="flex-center flex-col gap-4">
          <h1 className="text-[2.4rem] font-[500] tracking-wide">
            Empowering Digital Commerce Transformation
          </h1>
          <h3 className="text-[1.5rem] font-[500] tracking-wide">
            Retailers &nbsp; | &nbsp; Distributors &nbsp; | &nbsp; Manufacturers
          </h3>
        </div>
        <div className="flex-center">
          <PrimaryButton title={"GET A FREE QUOTE"} className="px-10 py-3" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
