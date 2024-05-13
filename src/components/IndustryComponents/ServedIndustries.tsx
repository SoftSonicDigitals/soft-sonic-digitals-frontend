import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";

const ServedIndustries = () => {
  return (
    <section>
      <div className="wrapper_container mb-24 flex ">
        <div className="max-w-[510px]">
          {/* <PrimaryStyledHeadings
            mainHeading="Other industries that we serve"
            subHeading="Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day."
            mainHeadingStyles="mb-6 text-left!"
          /> */}
          <h1 className={` text-2xl md:text-[2.1rem] font-[500] mb-6 `}>
            Other industries that we serve
          </h1>
          <p className={`text-[1rem] md:text-xl font-[500] text-gray-800 `}>
            Create an ecommerce website backed by powerful tools that help you
            find customers, drive sales, and manage your day-to-day.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ServedIndustries;
