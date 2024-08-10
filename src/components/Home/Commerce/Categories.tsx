import { COMMERCE_CATEGORIES } from "@/prototypes/commerce";
import React from "react";
import { CategoriesMobileLayout, CategoryItems } from ".";
import Reveal from "@/components/Animation/Reveal";

const Categories = () => {
  return (
    <>
      <div className="hidden md:flex justify-center mx-8 px-8 lg:px-2  xl:px-0 xl:mx-0">
        {COMMERCE_CATEGORIES.map((category, index) => (
          <Reveal key={index} index={index}>
            <div
              key={index}
              className=" lg:border-r-[1px] border-gray-200 lg:px-0 group-last:border-none first:pl-0 last:pr-0 basis-full lg:basis-none lg:basis-1/4 lg:last:basis-1/2 xl:basis-none"
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
          </Reveal>
        ))}
      </div>

      <CategoriesMobileLayout />
    </>
  );
};

export default Categories;
