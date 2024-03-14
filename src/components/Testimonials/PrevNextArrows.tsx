import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type propsType = {
  className?: string;
  style?: string;
  onClick?: () => void;
};

export const PreviousArrow: React.FC<propsType> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} bg-gradient-to-r from-orange to-pink p-3.5 rounded-full`}
    >
      <FaArrowLeftLong className="text-md text-white " />
    </div>
  );
};
export const NextArrow: React.FC<propsType> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} bg-gradient-to-r from-orange to-pink p-3.5 rounded-full`}
    >
      <FaArrowRightLong className="text-md text-white " />
    </div>
  );
};
