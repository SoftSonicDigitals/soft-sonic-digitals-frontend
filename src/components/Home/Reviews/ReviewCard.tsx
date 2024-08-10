import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

type ReviewCardType = {
  link: string;
  logoName: string;
  title: string;
  rating: number;
  noOfReviews?: number;
};

const ReviewCard = ({
  link,
  logoName,
  title,
  rating,
  noOfReviews,
}: ReviewCardType) => {
  return (
    <Link href={link} className="flex-center bg-white ">
      <div className=" flex-center flex-col  py-10 ">
        <div
          className="relative  w-[184px]
   h-[64px] mb-2 md:mb-3"
        >
          <Image src={`/reviews/${logoName}`} alt={`${title}-logo`} fill />
        </div>
        <div className="flex-center flex-col">
          <div className="flex-center gap-3 mb-2">
            <p className="text-xl font-[600]">
              {rating.toString().includes(".")
                ? rating.toString()
                : `${rating}.0`}
            </p>
            <div className="flex  text-orange gap-0.5 text-xl">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
          </div>
          {noOfReviews && (
            <div className="text-gray-700 text-[17px]">
              {noOfReviews} Reviews
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
