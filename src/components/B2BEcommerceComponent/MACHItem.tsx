import React from "react";
type MACHItemProps = {
  title: string;
  description: string;
};
const MACHItem = ({ title, description }: MACHItemProps) => {
  return (
    <div className="flex-center flex-col sm:flex-row  sm:gap-12 mb-6 md:mb-16 text-gray-900 md:last:mb-5">
      <div className="text-[4rem] font-[700] w-[52.5px] text-orange-600 ">
        {title.slice(0, 1)}
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl font-[700] mb-2 self-center sm:self-start">
          {title}
        </h4>
        <p className="tracking-wide">{description}</p>
      </div>
    </div>
  );
};

export default MACHItem;
