import React from "react";
type InfoBoxProps = {
  title: string;
  value: string;
};
const InfoBox = ({ title, value }: InfoBoxProps) => {
  return (
    <div className=" p-6 bg-white h-full ">
      <h2 className="font-[600] text-sm text-gray-400 tracking-wide mb-2">
        {title}
      </h2>
      <p className="text-lg font-[600] capitalize ">{value}</p>
    </div>
  );
};

export default InfoBox;
