import React from "react";
import { FaPlus } from "react-icons/fa6";

const FaqContainer = () => {
  return (
    <div>
      <div
        className="flex items-center justify-start
       gap-8 pb-4 border-b-[1px] border-gray-200 text-gray-800 mx-4 md:mx-12"
      >
        <div className="flex flex-col ">
          <div className="flex items-center gap-4 mb-2 md:mb-4">
            <FaPlus />

            <p className="text-base md:text-xl lg:text-[1.4rem] font-[600]">
              What is B2B eCommerce?
            </p>
          </div>
          <p className="text-sm md:text-base ml-8">
            B2B stands for business-to-business, and B2B commerce refers to
            companies selling items to other companies. Many businesses sell to
            both businesses and consumers via eCommerce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
