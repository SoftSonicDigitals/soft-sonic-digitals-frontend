import { COMMERCE_CATEGORIES } from "@/prototypes/commerce";
import React from "react";
import { CategoryItems } from ".";
import { FaPlus } from "react-icons/fa6";

const Categories = () => {
  return (
    <>
      <div className="hidden md:flex justify-center mx-8 px-8 lg:px-2  xl:px-0 xl:mx-0">
        {COMMERCE_CATEGORIES.map((category) => (
          <div
            key={category.category_title}
            className=" lg:border-r-[1px] border-gray-200 last:border-none  lg:px-0 first:pl-0 last:pr-0 basis-full lg:basis-none lg:basis-1/4 lg:last:basis-1/2 xl:basis-none"
          >
            <div className="md:h-[105px] lg:h-auto mb-6 ml-12 mr-3 xl:ml-[2.7rem] xl:mr-4  ">
              <h1 className=" text-xl font-[700] text-gray-800 ">
                {category.category_title}
              </h1>
            </div>
            <CategoryItems
              catergoryItemsArray={category.category_items}
              categoryName={category.category_title}
            />
          </div>
        ))}
      </div>
      <div className="mb-10">
        {COMMERCE_CATEGORIES.map((category) => (
          <div
            key={category.category_title}
            className="  first:border-t-[1px] border-b-[1px] border-gray-200 text-gray-800 mx-4 py-4 flex item-center justify-between "
          >
            <div>
              <h4 className="font-[600] text-lg">{category.category_title}</h4>
            </div>
            <div className="flex-center mx-2">
              <FaPlus className="cursor-pointer text-lg" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
