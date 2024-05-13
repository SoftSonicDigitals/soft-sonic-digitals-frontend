import Image from "next/image";
import React from "react";

const IndustriesCard = ({}) => {
  return (
    <div
      key={index}
      className=" px-10 py-3.5 rounded shadow-lg max-w-[156px] max-h-[152px]"
    >
      <div className="flex-center flex-col ">
        <Image
          src={img}
          alt="industry"
          width={72}
          height={72}
          className="mb-6"
        />
        <p className="text-center text-lg font-[500]">{name}</p>
      </div>
    </div>
  );
};

export default IndustriesCard;
