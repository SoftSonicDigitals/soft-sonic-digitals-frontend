import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { REVIEWS_MAIN_HEADING, REVIEWS_SUB_HEADING } from "@/constants/reviews";

const Reviews = () => {
  return (
    <section id="reviews" className="bg-gray-0">
      <div className="wrapper_container py-24 mb-24">
        <PrimaryStyledHeadings
          mainHeading={REVIEWS_MAIN_HEADING}
          subHeading={REVIEWS_SUB_HEADING}
          mainHeadingStyles="mb-10"
          subHeadingStyles="!font-[400]"
          containerStyles="mb-10"
        />
      </div>
    </section>
  );
};

export default Reviews;
