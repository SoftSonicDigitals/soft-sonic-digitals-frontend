import { INDUSTRY_ECOMMERCE_FRAMEWORKS } from "@/constants/industry";
import Image from "next/image";
import React from "react";

const EcommerceFrameworks = () => {
  return (
    <section id="ecommerce_frameworks">
      <div className="wrapper_container mb-24">
        <div className=" flex flex-col gap-4">
          {INDUSTRY_ECOMMERCE_FRAMEWORKS.map(({ name, logo }, index) => (
            <div key={index} className="flex flex-col flex-center">
              <Image src={logo} alt={`${name}-logo`} width={80} height={80} />
              <p className="text-lg font-[500] mt-5">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFrameworks;
