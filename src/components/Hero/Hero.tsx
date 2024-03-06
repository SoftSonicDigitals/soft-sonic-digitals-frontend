import React from "react";
import { PrimaryButton } from "../Reusable";

const Hero = () => {
  return (
    <div className="wrapper_container flex-center  flex-col h-[57vh] 2xl:h-[45vh]">
      <div className="flex flex-col gap-6 px-4 sm:px-0 xl:mt-20  2x:mt-0">
        <div className="flex-center flex-col gap-6 text-center leading-tight ">
          <h1 className="text-[2.4rem] font-[500] mx-4 ">
            Empowering Digital Commerce Transformation
          </h1>
          <h3 className="text-[.94rem] sm:text-lg md:text-[1.5rem] font-[500] tracking-wide">
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
