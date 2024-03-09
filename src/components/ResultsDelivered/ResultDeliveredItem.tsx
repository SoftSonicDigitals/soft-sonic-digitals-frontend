import React from "react";

const ResultDeliveredItem = () => {
  return (
    <div
      key={title}
      className=" first:pl-0 last:pr-0 px-8 border-r-[1px] border-gray-200 last:border-none"
    >
      <div className="flex flex-center">
        <h2 className="text-6xl font-[500] text-gray-800">{value}</h2>
        <div className="text-7xl font-[400] text-red ">+</div>
      </div>
      <div className="text-[1.5rem] font-[600] text-gray-800">{title}</div>
    </div>
  );
};

export default ResultDeliveredItem;
