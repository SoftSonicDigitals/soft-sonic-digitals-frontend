import React from "react";
import { CategoryItem } from ".";

type categoryItemsArray = {
  link: string;
  title: string;
  description?: string;
};
type CategoryItemsProps = {
  catergoryItemsArray: categoryItemsArray[];
  categoryName: string;
};

const CategoryItems = ({
  catergoryItemsArray,
  categoryName,
}: CategoryItemsProps) => {
  return (
    <div
      className={`${
        catergoryItemsArray?.length >= 5
          ? "grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-y-2 lg:gap-x-1"
          : "flex flex-col gap-4"
      }`}
    >
      {catergoryItemsArray.map((item) => (
        <CategoryItem
          key={item.link}
          categoryName={categoryName}
          title={item.title}
          description={String(item.description)}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default CategoryItems;
