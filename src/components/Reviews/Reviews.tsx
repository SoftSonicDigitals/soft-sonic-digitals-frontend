import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { REVIEWS_MAIN_HEADING, REVIEWS_SUB_HEADING } from "@/constants/reviews";
import { REVIEWS } from "@/prototypes/reviews";
import Image from "next/image";
import { MdStar } from "react-icons/md";
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
          containerStyles="mb-10 px-12"
        />
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-16  lg:px-8 2xl:px-[2%] max-w-[1280px] mx-auto">
          {REVIEWS.map((review) => (
            <div key={review.id} className="flex-center bg-white ">
              <Link
                href={review.link}
                className=" flex-center flex-col  py-10 "
              >
                <div
                  className="relative  w-[184px]
               h-[64px] mb-2 md:mb-3"
                >
                  <Image
                    src={`/reviews/${review.logoName}`}
                    alt={`${review.title}-logo`}
                    fill
                  />
                </div>
                <div className="flex-center flex-col">
                  <div className="flex-center gap-3 mb-2">
                    <p className="text-xl font-[600]">
                      {review.rating.toString().includes(".")
                        ? review.rating.toString()
                        : `${review.rating}.0`}
                    </p>
                    <div className="flex  text-orange gap-0.5 text-xl">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                      <MdStar />
                    </div>
                  </div>
                  <div className="text-gray-700 text-[17px]">
                    {review.noOfReviews} Reviews
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
