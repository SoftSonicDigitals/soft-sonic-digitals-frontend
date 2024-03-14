import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

type propsType = {
  onClick: () => void;
  direction: string;
};

export const SliderArrow: React.FC<propsType> = ({ onClick, direction }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-gradient-to-r from-orange to-pink p-3.5 rounded-full`}
    >
      <FaArrowUpLong
        className={`text-md text-white ${
          direction.toLowerCase().trim() === "left" ? "-rotate-90" : "rotate-90"
        }`}
      />
    </button>
  );
};
