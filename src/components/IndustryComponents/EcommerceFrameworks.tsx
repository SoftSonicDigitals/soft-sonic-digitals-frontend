import { ECOMMERCE_FRAMEWORK_HEADING } from "@/constants/industry";
import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import FrameworkSlider from "./FrameworkSlider";
import Reveal from "../Animation/Reveal";

const EcommerceFrameworks = () => {
  return (
    <section id="ecommerce_frameworks">
      <Reveal>
        <div className="wrapper_container mb-24 ">
          <PrimaryStyledHeadings
            mainHeading={ECOMMERCE_FRAMEWORK_HEADING}
            containerStyles="mb-16 lg:mb-24"
            mainHeadingStyles="text-center"
          />
          <div className=" xl:mx-20">
            <FrameworkSlider />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default EcommerceFrameworks;
