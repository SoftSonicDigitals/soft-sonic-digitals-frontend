import {
  B2B_HERO_BTN_TEXT,
  B2B_HERO_DESCRIPTION,
  B2B_HERO_HEADING,
} from "@/constants/b2b_ecommerce";
import Link from "next/link";
import React from "react";

const B2BHeroInfo = () => {
  return (
    <div className="wrapper_container h-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-12">
      <h2 className=" text-2xl sm:text-3xl lg:text-5xl  font-[600] text-gray-800 my-8 md:max-w-[450px] lg:max-w-[700px] !leading-snug tracking-tight">
        {B2B_HERO_HEADING}
      </h2>

      <p className="text-lg font-[500] text-gray-700 mb-6 md:max-w-[450px] lg:max-w-[700px]">
        {B2B_HERO_DESCRIPTION}
      </p>

      <Link
        href={"/contact"}
        className={`text-white tracking-wider font-[700] rounded px-2 py-3 btn__backgroundcolor  `}
      >
        {B2B_HERO_BTN_TEXT}
      </Link>
    </div>
  );
};

export default B2BHeroInfo;
