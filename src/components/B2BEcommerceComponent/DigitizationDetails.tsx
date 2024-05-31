import Image from "next/image";
import React from "react";

type DigitizationDetailsProps = {
  imagePath: string;
  reasons: { title: string; list: string[] }[];
};

const DigitizationDetails = ({
  imagePath,
  reasons,
}: DigitizationDetailsProps) => {
  return (
    <div className="hidden lg:block relative">
      <Image
        src={imagePath}
        alt="diagram"
        width={1224}
        height={652}
        style={{ objectFit: "cover" }}
        className="relative"
      />

      {reasons.map(({ title, list }, index) => (
        <div
          key={index}
          className={`absolute  ${index % 2 == 0 ? "left-10" : "right-10 "}  ${
            index < 2 ? "top-8 " : "bottom-8 xl:bottom-16 "
          }   max-w-[400px] `}
        >
          <h3 className="text-xl xl:text-2xl font-[700] text-orange mb-4">
            {title}
          </h3>
          <ul className="list-disc text-xs xl:text-sm text-gray-700">
            {list.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DigitizationDetails;
