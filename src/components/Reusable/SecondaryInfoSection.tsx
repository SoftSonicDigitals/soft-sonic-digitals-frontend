import Image from "next/image";
import React from "react";
type SecondaryInfoSectionProps = {
  heading: string;
  subHeading: string;
  description: string;
  imgpath: string;
};
const SecondaryInfoSection = ({
  heading,
  subHeading,
  description,
  imgpath,
}: SecondaryInfoSectionProps) => {
  return (
    <section className="bg-rose_white">
      <div className="wrapper_container mb-24 flex-center flex-col gap-4 px-4">
        <div className="mt-16">
          <h1
            className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-8 text-center `}
          >
            {heading}
          </h1>
          <h3
            className={`text-xl md:text-2xl lg:text-xl  font-[500] text-gray-900 text-center  tracking-wider lg:px-10 mb-6`}
          >
            {subHeading}
          </h3>
          <br />
          <p
            className={`text-[1rem] md:text-lg lg:text-xl lg:px-10  font-[500] text-gray-800   tracking-wider text-center whitespace-pre-line`}
          >
            {description}
          </p>
        </div>
        <div className="mb-10">
          <Image
            src={`/industry/${imgpath}`}
            alt={`${heading}`}
            height={710}
            width={1117}
          />
        </div>
      </div>
    </section>
  );
};

export default SecondaryInfoSection;
