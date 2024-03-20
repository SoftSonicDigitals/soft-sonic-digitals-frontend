import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { REVIEWS_MAIN_HEADING, REVIEWS_SUB_HEADING } from "@/constants/reviews";
import { REVIEWS } from "@/prototypes/reviews";
import { ReviewCard } from ".";

const Reviews = () => {
  return (
    <section id="reviews" className="bg-gray-0">
      <div className="wrapper_container pt-28 pb-24 mb-24">
        <PrimaryStyledHeadings
          mainHeading={REVIEWS_MAIN_HEADING}
          subHeading={REVIEWS_SUB_HEADING}
          mainHeadingStyles="mb-10 text-center"
          subHeadingStyles="!font-[400]"
          containerStyles="mb-10 px-12"
        />
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-16  lg:px-8 2xl:px-[2%] max-w-[1280px] mx-auto">
          {REVIEWS.map(({ link, id, logoName, title, rating, noOfReviews }) => (
            <ReviewCard
              key={id}
              link={link}
              logoName={logoName}
              title={title}
              rating={rating}
              noOfReviews={noOfReviews}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
