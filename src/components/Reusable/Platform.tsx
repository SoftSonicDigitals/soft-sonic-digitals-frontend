import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
type PlatformType = {
  link: string;
  title: string;
  iconWidth: string;
  iconPath: string;
  description: string;
  showArrow: boolean;
  containerStyles?: string;
  infoContainerStyles?: string;
  descriptionStyles?: string;
  headingStyles?: string;
  imageContainerStyles?: string;
};
const Platform = ({
  link,
  title,
  iconWidth,
  iconPath,
  description,
  showArrow,
  containerStyles,
  infoContainerStyles,
  descriptionStyles,
  headingStyles,
  imageContainerStyles,
}: PlatformType) => {
  return (
    <Link href={link} key={title}>
      <div className={`${containerStyles} group`}>
        <div
          className={`relative w-full h-8  ${imageContainerStyles}`}
          style={{ width: iconWidth }}
        >
          <Image src={iconPath} alt={`${title}-logo`} fill />
        </div>
        <div className={`${infoContainerStyles}`}>
          <h4 className={`${headingStyles}`}>{title}</h4>
          <p className={`${descriptionStyles}`}> {description}</p>
        </div>

        {showArrow && (
          <FaArrowRightLong className="hidden lg:block text-lg text-gray-800 group-hover:translate-x-1 transition duration-200 ease-in" />
        )}
      </div>
    </Link>
  );
};

export default Platform;
