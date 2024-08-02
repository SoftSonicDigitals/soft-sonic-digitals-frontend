import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

type StatsCardProps = { title: string; data: number; change: number };

const StatsCard = ({ title, data, change }: StatsCardProps) => {
  return (
    <div className="last:border-none border-b-2 lg:border-r-2 lg:border-b-0 border-gray-200 px-6 py-4 my-1">
      <div className="flex items-center justify-between mb-2">
        <p className=" font-[600]">{title}</p>
        <BsThreeDotsVertical />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-5xl font-[600]">{data}</p>
        <div className="flex-center gap-1 bg-gray-300 rounded-full px-2.5  py-1.5 text-xs font-[600]">
          <BiUpArrowAlt className="text-lg" />
          <p>{change}%</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
