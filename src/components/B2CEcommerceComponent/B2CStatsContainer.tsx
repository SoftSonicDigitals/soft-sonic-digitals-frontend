import React from "react";
import { B2C_ECOMMERCE_STATS } from "@/prototypes/b2c";

const B2CStatsContainer = () => {
  return (
    <div className="  md:hidden grid grid-cols-2  gap-4 lg:gap-0 item-center justify-center">
      {B2C_ECOMMERCE_STATS.map(({ title, value }) => (
        <div key={title} className="flex flex-col justify-center items-center ">
          <div className="flex flex-center">
            <h2 className="text-4xl  sm:text-[2.8rem] font-[500] text-gray-800">
              {value}
            </h2>
            <div className="text-6xl lg:text-5xl  xl:text-7xl font-[400] text-red ">
              +
            </div>
          </div>
          <div className="text-xs sm:text-lg lg:text-[1.2rem] xl:text-[1.5rem] font-[600] text-gray-800 text-center">
            {title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default B2CStatsContainer;
