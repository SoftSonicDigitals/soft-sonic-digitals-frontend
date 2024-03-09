import React from "react";
type ResultDeliveredItemProps = {
  title: string;
  value: string;
};
const ResultsDeliveredItem = ({ title, value }: ResultDeliveredItemProps) => {
  return (
    <div
      key={title}
      className=" last:hidden md:last:block flex flex-col justify-center items-center  lg:first:pl-0 lg:last:pr-0 md:px-8 lg:px-6 2xl:px-8  lg:border-r-[1px] lg:border-gray-200 last:border-none"
    >
      <div className="flex flex-center">
        <h2 className="text-5xl lg:text-4xl  xl:text-6xl font-[500] text-gray-800">
          {value}
        </h2>
        <div className="text-6xl lg:text-5xl  xl:text-7xl font-[400] text-red ">
          +
        </div>
      </div>
      <div className="text-sm sm:text-lg lg:text-[1.2rem] xl:text-[1.5rem] font-[600] text-gray-800">
        {title}
      </div>
    </div>
  );
};

export default ResultsDeliveredItem;
