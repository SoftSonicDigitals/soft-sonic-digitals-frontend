import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  return (
    <TestimonialVideoModal videoKey={videoKey}>
      <div key={id}>
        <div className="embla__slide__container flex-center">
          <div className="flex-col flex">
            <Image
              src={`/testimonials/${thumbnail}`}
              alt="img"
              width={752}
              height={416}
              style={{ objectFit: "contain" }}
            />

            <div className="mt-8">
              <h1 className="text-2xl font-[600] tracking-wider">{name}</h1>
              <p className="text-md text-gray-700 mt-1">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </TestimonialVideoModal>
  );
};

export default Testimony;
