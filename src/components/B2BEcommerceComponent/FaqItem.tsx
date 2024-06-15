"use client";
import React from "react";
import { Collapse } from "react-collapse";
import { FaMinus, FaPlus } from "react-icons/fa6";

type FaqItemProps = {
  question: string;
  answer: string | string[];
  index: number;
  toggleItem: (index: number) => void;
  isItemOpen: (selected: number | null, index: number) => boolean;
  itemSelected: number | null;
};
const FaqItem = ({
  question,
  answer,
  toggleItem,
  isItemOpen,
  itemSelected,
  index,
}: FaqItemProps) => {
  const renderAnswer = Array.isArray(answer) ? (
    <ul className="text-sm md:text-base ml-8 list-disc">
      {answer.map((item, index) => (
        <li key={index}>{item} </li>
      ))}
    </ul>
  ) : (
    <p className="text-sm md:text-base ml-8">{answer}</p>
  );

  return (
    <div
      className="flex items-center justify-start
 gap-8 pb-4 border-b-[1px] border-gray-200 text-gray-800 mx-4 md:mx-8 lg:mx-12  mb-6"
      onClick={() => toggleItem(index)}
    >
      <div className="flex flex-col ">
        <div className="flex items-center gap-4 mb-2 md:mb-4">
          {!isItemOpen(itemSelected, index) ? <FaPlus /> : <FaMinus />}

          <p className="text-base md:text-xl  font-[700]">{question}</p>
        </div>
        <Collapse isOpened={isItemOpen(itemSelected, index)}>
          {isItemOpen(itemSelected, index) && renderAnswer}
        </Collapse>
      </div>
    </div>
  );
};

export default FaqItem;
