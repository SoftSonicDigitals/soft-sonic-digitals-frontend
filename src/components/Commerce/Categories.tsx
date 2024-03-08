import { COMMERCE_CATEGORIES } from "@/prototypes/commerce";
import React from "react";

const Categories = () => {
  return (
    <div className="flex justify-center gap-8  ">
      {COMMERCE_CATEGORIES.map((category) => (
        <div
          key={category.category_title}
          className=" border-r-[1px] border-gray-200 last:border-none"
        >
          <h1 className=" text-xl font-[700] text-gray-800 mb-6">
            {category.category_title}
          </h1>
          <div
            className={`${
              category.category_items.length >= 5
                ? "grid grid-cols-2 gap-4"
                : "flex flex-col gap-4"
            }`}
          >
            {category.category_items.map((item) => (
              <div key={item.title} className="flex items-center  gap-2">
                <div>
                  <img src={"/dropdown-icon.svg"} />
                </div>
                <div>
                  <h3 className="text-lg">
                    {item.title.includes("-")
                      ? `(${item.title.split("-")[0]})`
                      : item.title}
                  </h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
