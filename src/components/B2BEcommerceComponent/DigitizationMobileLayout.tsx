"use client";
import useDropDown from "@/hooks/useDropDown";
import { B2B_DIGITIZATION_LIST } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
const DigitizationMobileLayout = () => {
  const { selected, isOpen, toggle } = useDropDown();
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
        {B2B_DIGITIZATION_LIST.map(({ title, list }, index) => (
          <div
            onClick={() => toggle(index)}
            key={index}
            className=" bg-white sm:bg-white-100 p-8 sm:p-12 rounded-[1rem] sm:shadow-xl mb-6"
          >
            <div className="mb-8 flex item-center justify-between ">
              <p className="text-2xl font-[600] text-gray-800 uppercase">
                {title}
              </p>
              {!isOpen(selected, index) ? <FaPlus /> : <FaMinus />}
            </div>
            {isOpen(selected, index) && (
              <ul className="list-disc text-sm xl:text-sm text-gray-700">
                {B2B_DIGITIZATION_LIST[0].list.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DigitizationMobileLayout;
