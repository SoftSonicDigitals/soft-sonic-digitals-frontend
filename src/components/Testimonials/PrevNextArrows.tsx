import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type propsType = {
  onClick: () => void;
};

export const PreviousArrow: React.FC<propsType> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-gradient-to-r from-orange to-pink p-3.5 rounded-full`}
    >
      <FaArrowLeftLong className="text-md text-white " />
    </button>
  );
};
export const NextArrow: React.FC<propsType> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-gradient-to-r from-orange to-pink p-3.5 rounded-full`}
    >
      <FaArrowRightLong className="text-md text-white " />
    </button>
  );
};
