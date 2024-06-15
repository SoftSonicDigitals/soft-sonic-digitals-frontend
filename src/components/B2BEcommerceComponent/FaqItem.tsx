import React from "react";
import { FaPlus } from "react-icons/fa6";

type FaqItemProps = {
  question: string;
  answer: string;
};
const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div
      className="flex items-center justify-start
 gap-8 pb-4 border-b-[1px] border-gray-200 text-gray-800 mx-4 md:mx-8 lg:mx-12"
    >
      <div className="flex flex-col ">
        <div className="flex items-center gap-4 mb-2 md:mb-4">
          <FaPlus />

          <p className="text-base md:text-xl lg:text-[1.4rem] font-[600]">
            {question}
          </p>
        </div>
        <p className="text-sm md:text-base ml-8">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
