import React from "react";

type PrimaryStyledHeadingType = {
  mainHeading: string;
  subHeading?: string;
  mainHeadingStyles?: string;
  subHeadingStyles?: string;
  containerStyles?: string;
};

const PrimaryStyledHeadings = ({
  mainHeading,
  subHeading,
  mainHeadingStyles,
  subHeadingStyles,
  containerStyles,
}: PrimaryStyledHeadingType) => {
  return (
    <div
      className={`flex-center flex-col mb-16 gap-4 px-5 md:px-8 ${containerStyles} `}
    >
      <h1
        className={`${mainHeadingStyles} text-2xl md:text-[2.1rem] font-[500] `}
      >
        {mainHeading}
      </h1>
      {subHeading && (
        <p
          className={`${subHeadingStyles} text-[1rem] md:text-xl font-[500] text-gray-800 text-center`}
        >
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default PrimaryStyledHeadings;
