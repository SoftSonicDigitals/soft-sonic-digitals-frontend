import React from "react";
import { PrimaryButton, PrimaryStyledHeadings } from "../Reusable";

const GetInTouch = () => {
  return (
    <section id="get_in_touch" className="bg-black">
      <div className="wrapper_container py-12 ">
        <div className="mb-12">
          <PrimaryStyledHeadings
            mainHeading="GET IN TOUCH"
            subHeading="We can only comprehend each other if we communicate well. Allow us to get a better understanding of your needs or queries. Present us the chance to assist you."
            mainHeadingStyles="mb-4 text-white"
            subHeadingStyles="text-white"
            containerStyles="mb-12 px-32"
          />
          <div className="flex-center w-full">
            <PrimaryButton title="LET'S TAlK" className="px-12 py-3" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"></div>
      </div>
    </section>
  );
};

export default GetInTouch;
