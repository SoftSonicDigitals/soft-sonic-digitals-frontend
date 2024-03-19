import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { REVIEWS_MAIN_HEADING, REVIEWS_SUB_HEADING } from "@/constants/reviews";
import { REVIEWS } from "@/prototypes/reviews";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Reviews = () => {
  return (
    <section id="reviews" className="bg-gray-0">
      <div className="wrapper_container py-24 mb-24">
        <PrimaryStyledHeadings
          mainHeading={REVIEWS_MAIN_HEADING}
          subHeading={REVIEWS_SUB_HEADING}
          mainHeadingStyles="mb-10 text-center"
          subHeadingStyles="!font-[400]"
          containerStyles="mb-10"
        />
        <div className="flex-center flex-col gap-8">
          {REVIEWS.map((review) => (
            <Link
              href={review.link}
              key={review.id}
              className="bg-white flex-center flex-col p-4"
            >
              <Image
                src={`/reviews/${review.logoName}`}
                alt={`${review.title}-logo`}
                width={184}
                height={64}
                style={{ objectFit: "contain" }}
                className="mb-4"
              />
              <div className="flex-center gap-3 mb-4">
                <p className="text-xl font-[600]">{review.rating} </p>
                <div className="flex text-orange gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="text-gray-700">{review.noOfReviews} Reviews</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
