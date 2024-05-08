import Image from "next/image";
import React from "react";
type FeatureDetailsProps = {
  heading?: string;
  subHeading: string;
  description: string;
  imgPath: string;
};

const FeatureDetails = ({
  heading,
  subHeading,
  description,
  imgPath,
}: FeatureDetailsProps) => {
  return (
    <>
      <div className="basis-full flex-center">
        <Image src={imgPath} alt="assets" width={587} height={362} />
      </div>
      <div className={`basis-full  max-w-[700px]   `}>
        <h1
          className={` text-[1.7rem] md:text-[2.1rem] font-[500] mb-8 text-center md:text-left capitalize`}
        >
          {heading}
        </h1>

        <h3
          className={`text-xl md:text-2xl lg:text-xl  font-[500] text-gray-900 text-center lg:text-left  tracking-wider`}
        >
          {subHeading}
        </h3>
        <br />
        <p
          className={`text-[1rem] md:text-lg lg:text-xl font-[500] text-gray-800  lg:text-left  tracking-wider text-center whitespace-pre-line`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default FeatureDetails;
