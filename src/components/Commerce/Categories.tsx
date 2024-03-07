import { COMMERCE_CATEGORIES } from "@/prototypes/commerce";
import React from "react";

const Categories = () => {
  return (
    <div className="flex-center gap-6 px-8 2xl:px-0 2xl:mt-60 3xl:mt-0">
      {COMMERCE_CATEGORIES.map((category) => (
        <h1 key={category.category_title}>{category.category_title}</h1>
      ))}
    </div>
  );
};

export default Categories;
