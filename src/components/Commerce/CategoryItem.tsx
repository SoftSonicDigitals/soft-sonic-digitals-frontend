import Image from "next/image";
import Link from "next/link";
import React from "react";
type CategoryItemProps = {
  title: string;
  link: string;
  description: string;
  categoryName: string;
};
const CategoryItem = ({
  title,
  link,
  description,
  categoryName,
}: CategoryItemProps) => {
  return (
    <Link key={title} href={link}>
      <div className="flex  flex-col  gap-2 hover:bg-gray-0 p-3 pr-2 ml-4  xl:mx-3">
        <div className="flex gap-2">
          <div className="relative w-4 h-4 mt-1">
            <Image src={"/dropdown-icon.svg"} alt="dropdown-icon" fill />
          </div>
          <h3 className="text-[1rem]">
            {categoryName ===
              "Individually Outstanding, Spectacular in Combination" && title
              ? `(${title.split("-")[0]})`
              : title}
          </h3>
        </div>
        <p className="text-[0.8rem] lg:text-[0.9rem]  ml-6">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
