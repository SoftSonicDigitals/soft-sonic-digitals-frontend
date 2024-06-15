import Image from "next/image";
import React from "react";

type IndustryItemProps = {
  title: string;
  iconPath: string;
};

const IndustryItem = ({ title, iconPath }: IndustryItemProps) => {
  return (
    <div className="flex-col  flex-center max-w-[175px]  lg:w-[155px] xl:w-[175px] h-[200px] border-[1.5px] border-gray-100">
      <Image
        src={iconPath}
        alt={title}
        width={72}
        height={72}
        className="mb-6"
      />
      <p className="text-center text-lg mb-6 font-[500] text-gray-800">
        {title}
      </p>
    </div>
  );
};

export default IndustryItem;
