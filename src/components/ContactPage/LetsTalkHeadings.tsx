import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";

const LetsTalkHeadings = () => {
  return (
    <div className="wrapper_container">
      <PrimaryStyledHeadings
        mainHeading="Let’s talk"
        subHeading="Just fill out this simple form and we will contact you promptly to discuss your requirement."
        containerStyles="mt-20"
        mainHeadingStyles="!text-3xl sm:!text-4xl lg:!text-[40px] xl:!text-5xl  mb-2 xl:mb-5 text-gray-800"
        subHeadingStyles="hidden md:block !text-xl lg:!text-2xl xl:!text-[29px] xl:!leading-9 tracking-wide px-20"
      />
    </div>
  );
};

export default LetsTalkHeadings;
