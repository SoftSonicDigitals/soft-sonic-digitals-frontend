"use client";
import React, { useState } from "react";
import { IoIosRemove } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import FeatureDetails from "./FeatureDetails";
type IndustryFeaturesMobileProps = {
  featuresArray: {
    heading: string;
    subHeading: string;
    description: string;
    imgPath: string;
  }[];
};

const IndustryFeaturesMobile = ({
  featuresArray,
}: IndustryFeaturesMobileProps) => {
  const [selectedDropDownMenu, setSelectedDropDownMenu] = useState<
    number | null
  >(null);

  const toggleDropDown = (index: number) => {
    if (selectedDropDownMenu === index) {
      return setSelectedDropDownMenu(null);
    }
    setSelectedDropDownMenu(index);
  };

  const isMenuOpen = (selected: number | null, index: number) => {
    return selected === index;
  };

  return (
    <div className="flex gap-16 lg:hidden item-center justify-center flex-col mx-3">
      {featuresArray.map((feature, index) => (
        <>
          <button
            key={index}
            className="flex items-center justify-center  gap-6"
            onClick={() => toggleDropDown(index)}
          >
            {!isMenuOpen(selectedDropDownMenu, index) ? (
              <IoAddOutline className="cursor-pointer" />
            ) : (
              <IoIosRemove className="cursor-pointer" />
            )}
            <p className="text-gray-800 font-[700] text-2xl tracking-wide capitalize">
              {feature.heading}
            </p>
          </button>
          {isMenuOpen(selectedDropDownMenu, index) && (
            <div className="flex-center flex-col">
              <FeatureDetails
                subHeading={feature.subHeading}
                description={feature.description}
                imgPath={feature.imgPath}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default IndustryFeaturesMobile;
