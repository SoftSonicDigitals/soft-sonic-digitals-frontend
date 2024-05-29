import { B2B_DIGITAL_ECOMMERCE_INFO } from "@/prototypes/b2b";
import React from "react";

const B2BDigitalEcommerceDetails = () => {
  return (
    <div className="flex-center lg:flex-row flex-col gap-8 lg:gap-12">
      <div className="w-full max-w-[700px] lg:max-w-[550px] ">
        <iframe
          src={B2B_DIGITAL_ECOMMERCE_INFO.videoLink}
          title={B2B_DIGITAL_ECOMMERCE_INFO.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className=" w-full  h-[310px] mx-auto"
        />
      </div>

      <div className="max-w-[700px] lg:max-w-[550px] ">
        {B2B_DIGITAL_ECOMMERCE_INFO.infoArray.map(
          ({ title, description }, index) => (
            <div key={index} className=" last:mb-0 mb-6">
              <p className="font-[700] text-xl text-gray-800 mb-2">{title} </p>
              <p>{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default B2BDigitalEcommerceDetails;
