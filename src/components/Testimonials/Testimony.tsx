"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TestimonialVideoModal } from ".";

type TestimonyPropsType = {
  id: string;
  name: string;
  position: string;
  thumbnail: string;
  videoKey: string;
};

const Testimony = ({
  id,
  name,
  position,
  thumbnail,
  videoKey,
}: TestimonyPropsType) => {
  let [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex-center sm:px-8 md:px-[13%] lg:px-8 ">
        <div className="flex-col flex">
          <div onClick={clickHandler}>
            <Image
              src={`/testimonials/${thumbnail}`}
              alt="img"
              width={752}
              height={416}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="mt-8">
            <h1 className="text-xl sm:text-2xl font-[600] tracking-wider">
              {name}
            </h1>
            <p className="text-sm sm:text-md text-gray-700 mt-1">{position}</p>
          </div>
        </div>
      </div>
      <TestimonialVideoModal
        videoKey={videoKey}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Testimony;
