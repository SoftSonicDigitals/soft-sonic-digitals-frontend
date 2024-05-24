import React from "react";
type B2CStatsTileProps = {
  title: string;
  value: string;
};
const B2CStatsTile = ({ title, value }: B2CStatsTileProps) => {
  return (
    <div key={title} className="flex flex-col justify-center items-center ">
      <div className="flex flex-center">
        <h2 className="text-4xl  sm:text-[2.8rem] font-[500] text-gray-800">
          {value}
        </h2>
        <div className="text-6xl lg:text-5xl  xl:text-7xl font-[400] text-red ">
          +
        </div>
      </div>
      <div className="text-xs sm:text-lg md:text-base font-[600] text-gray-800 text-center">
        {title}
      </div>
    </div>
  );
};

export default B2CStatsTile;
