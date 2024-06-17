import { B2B_MACH, B2B_MACH_DESCRIPTION } from "@/constants/b2b_ecommerce";
import React from "react";

const MACH = () => {
  return (
    <section id="mach_b2b" className="bg-white-100 py-16">
      <div className="wrapper_container ">
        <div className="px-3 lg:px-8 xl:px-12  mb-16">
          <h1 className="section_heading  mb-4">{B2B_MACH}</h1>
          <p className="section_description whitespace-pre-wrap">
            {B2B_MACH_DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MACH;
