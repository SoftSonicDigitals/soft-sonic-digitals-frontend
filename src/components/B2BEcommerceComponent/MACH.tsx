import { B2B_MACH, B2B_MACH_DESCRIPTION } from "@/constants/b2b_ecommerce";
import React from "react";
import MACHInfo from "./MACHInfo";
import Reveal from "../Animation/Reveal";

const MACH = () => {
  return (
    <section id="mach_b2b" className="bg-white-100 py-16">
      <Reveal>
        <div className="wrapper_container ">
          <div className="px-3 lg:px-8 xl:px-12  mb-8 md:mb-16">
            <h1 className="section_heading  mb-4">{B2B_MACH}</h1>
            <p className="section_description whitespace-pre-wrap">
              {B2B_MACH_DESCRIPTION}
            </p>
          </div>
          <MACHInfo />
        </div>
      </Reveal>
    </section>
  );
};

export default MACH;
