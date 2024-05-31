"use client";
import useDropDown from "@/hooks/useDropDown";
import { B2B_DIGITIZATION_LIST } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";
import { Collapse } from "react-collapse";
import { FaMinus, FaPlus } from "react-icons/fa6";

type DigitizationMobileLayoutProps = {
  reasons: {
    title: string;
    list: string[];
  }[];
  imagePath: string;
};

const DigitizationMobileLayout = ({
  reasons,
  imagePath,
}: DigitizationMobileLayoutProps) => {
  const { selected, isOpen, toggle } = useDropDown();
  return (
    <>
      <Image
        src={imagePath}
        alt="title"
        width={336}
        height={342}
        className="mb-10 lg:hidden"
      />
      <div className="max-w-[700px] w-full lg:hidden">
        {reasons.map(({ title, list }, index) => (
          <div
            onClick={() => toggle(index)}
            key={index}
            className=" bg-white sm:bg-white-100 p-8 sm:p-10 rounded-[1rem] sm:shadow-xl sm:mb-6"
          >
            <div className="flex item-center justify-between ">
              <p className="text-xl sm:text-2xl font-[600] text-gray-800 uppercase">
                {title}
              </p>
              {!isOpen(selected, index) ? <FaPlus /> : <FaMinus />}
            </div>
            <Collapse isOpened={isOpen(selected, index)}>
              {isOpen(selected, index) && (
                <ul className=" mt-8 list-disc text-sm xl:text-sm text-gray-700">
                  {list.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Collapse>
          </div>
        ))}
      </div>
    </>
  );
};

export default DigitizationMobileLayout;
