"use client";
import React, { Fragment } from "react";
import { IoIosRemove } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import FeatureDetails from "./FeatureDetails";
import useDropDown from "@/hooks/useDropDown";
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
  const {
    selected: selectedMenu,
    toggle: toogleMenu,
    isOpen: isMenuOpen,
  } = useDropDown();

  return (
    <div className="flex gap-16 lg:hidden item-center justify-center flex-col mx-3">
      {featuresArray.map((feature, index) => (
        <Fragment key={index}>
          <button
            className="flex items-center justify-center  gap-6"
            onClick={() => toogleMenu(index)}
          >
            {!isMenuOpen(selectedMenu, index) ? (
              <IoAddOutline className="cursor-pointer" />
            ) : (
              <IoIosRemove className="cursor-pointer" />
            )}
            <p className="text-gray-800 font-[700] text-2xl tracking-wide capitalize">
              {feature.heading}
            </p>
          </button>
          {isMenuOpen(selectedMenu, index) && (
            <div className="flex-center flex-col">
              <FeatureDetails
                key={index}
                subHeading={feature.subHeading}
                description={feature.description}
                imgPath={feature.imgPath}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default IndustryFeaturesMobile;
