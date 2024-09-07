import React from "react";

type DetailBulletsProps = {
  title: string;
  value?: string;
};
const DetailBullets = ({ title, value }: DetailBulletsProps) => {
  if (value?.length === 0) {
    return;
  }
  return (
    <div className="flex items-center gap-5 mb-6">
      <div className="min-w-6 h-6 rounded-full bg-gray-100 border-[1px] border-gray-200 self-start" />

      <div className=" flex flex-col gap-2 ">
        <p className="font-[700] text-black-200 tracking-wide  capitalize">
          {title}
        </p>
        <p className="text-sm font-[600] text-gray-400">{value}</p>
      </div>
    </div>
  );
};

export default DetailBullets;
