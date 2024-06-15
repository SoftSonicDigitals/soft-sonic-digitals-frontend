import {
  B2B_BENEFIT_DESCRIPTION,
  B2B_BENEFIT_HEADING,
} from "@/constants/b2b_ecommerce";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";
import { B2B_BENEFIT_LIST } from "@/prototypes/b2b";

const B2Benefit = () => {
  return (
    <section id="b2b_benefit">
      <div className="wrapper_container mb-24">
        <div className="px-3 lg:px-12 mb-16">
          <h1 className="section_heading text-center mb-4">
            {B2B_BENEFIT_HEADING}
          </h1>
          <p className="section_description text-center whitespace-pre-wrap">
            {B2B_BENEFIT_DESCRIPTION}
          </p>
        </div>

        <div className="flex-col md:flex-row flex items-start justify-center gap-10 lg:gap-16">
          <DropdownMenu dropDownList={B2B_BENEFIT_LIST} />
          <div className="basis-full mx-auto">
            <Image
              src="/b2b/list2.png"
              alt="list image"
              width={560}
              height={793}
              className="px-2.5 md:px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2Benefit;
