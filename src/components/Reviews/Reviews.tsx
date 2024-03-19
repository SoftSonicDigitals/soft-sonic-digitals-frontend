import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { REVIEWS_MAIN_HEADING, REVIEWS_SUB_HEADING } from "@/constants/reviews";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="wrapper_container">
        <PrimaryStyledHeadings
          mainHeading={REVIEWS_MAIN_HEADING}
          subHeading={REVIEWS_SUB_HEADING}
        />
      </div>
    </section>
  );
};

export default Reviews;
