import { B2B_DIGITIZATION_LIST } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";
const DigitizationMobileLayout = () => {
  return (
    <>
      <Image
        src={"/b2b/mobile_diagram.png"}
        alt="title"
        width={336}
        height={342}
        className="mb-10"
      />
      <div className="max-w-[700px] w-full">
        <div className=" bg-white-100 p-12 rounded-[1rem] shadow-xl">
          <div className="mb-4 flex item-center justify-between ">
            <p className="text-2xl font-[600] text-gray-800"> WANTS</p>
            <FaPlus />
          </div>
          <ul className="list-disc text-sm xl:text-sm text-gray-700">
            {B2B_DIGITIZATION_LIST[0].list.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DigitizationMobileLayout;
