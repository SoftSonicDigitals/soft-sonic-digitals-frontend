import { TESTIMONIALS } from "@/prototypes/testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TestimonyPropsType = {
  id: string;
  name: string;
  position: string;
  thumbnail: string;
  videoLink: string;
};

const Testimony = ({
  id,
  name,
  position,
  thumbnail,
  videoLink,
}: TestimonyPropsType) => {
  return (
    <div className="embla__slide" key={id}>
      <div className="embla__slide__container flex-center">
        <div className="flex-col flex">
          <Link href={videoLink}>
            <Image
              src={`/testimonials/${thumbnail}`}
              alt="img"
              width={752}
              height={416}
              style={{ objectFit: "contain" }}
            />
          </Link>

          <div className="mt-8">
            <h1 className="text-2xl font-[600] tracking-wider">{name}</h1>
            <p className="text-md text-gray-700 mt-1">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
