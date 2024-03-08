import { COMMERCE_CATEGORIES } from "@/prototypes/commerce";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
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
          <div
            className={`${
              category.category_items.length >= 5
                ? "grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-y-2 lg:gap-x-1"
                : "flex flex-col gap-4"
            }`}
          >
            {category.category_items.map((item) => (
              <Link key={item.title} href={item.link}>
                <div className="flex  flex-col  gap-2 hover:bg-gray-0 p-3 pr-2 ml-4  xl:mx-3">
                  <div className="flex gap-2">
                    <div className="relative w-4 h-4 mt-1">
                      <Image
                        src={"/dropdown-icon.svg"}
                        alt="dropdown-icon"
                        fill
                      />
                    </div>
                    <h3 className="text-[1rem]">
                      {category.category_title ===
                        "Individually Outstanding, Spectacular in Combination" &&
                      item.title
                        ? `(${item.title.split("-")[0]})`
                        : item.title}
                    </h3>
                  </div>
                  <p className="text-[0.8rem] lg:text-[0.9rem]  ml-6">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
