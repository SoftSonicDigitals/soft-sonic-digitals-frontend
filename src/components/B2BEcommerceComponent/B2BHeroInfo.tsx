import Link from "next/link";
import React from "react";

const B2BHeroInfo = () => {
  return (
    <div className="wrapper_container h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-12">
      <h2 className=" text-2xl sm:text-3xl lg:text-5xl  font-[600] text-gray-800 my-8  max-w-[700px] !leading-snug tracking-tight">
        World’s Best B2B eCommerce Solutions Provider For Manufacturing &
        Distribution Business
      </h2>
      <p className="text-lg font-[500] text-gray-700 mb-6 max-w-[700px]">
        Deliver customised digital commerce services with composable & headless
        B2B ecommerce software solutions and transform your ways of interacting
        with buyers, suppliers, and channel partners.
      </p>

      <Link
        href={"/contact"}
        className={`text-white tracking-wider font-[700] rounded px-2 py-3 btn__backgroundcolor  `}
      >
        BOOK A 30 MINS NO-OBLIGATION CONSULTING SESSION
      </Link>
    </div>
  );
};

export default B2BHeroInfo;
