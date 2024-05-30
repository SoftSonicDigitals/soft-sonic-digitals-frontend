import {
  B2B_DIGITIZATION_REASON_DESCRIPTION,
  B2B_DIGITIZATION_REASON_HEADING,
} from "@/constants/b2b_ecommerce";
import { B2B_DIGITIZATION_LIST } from "@/prototypes/b2b";
import Image from "next/image";
import React from "react";

const B2BDigitizationReasons = () => {
  return (
    <section id="b2b_digitization_reason">
      <div className="wrapper_container mb-24 flex-center flex-col">
        <div className="mb-12 text-center ">
          <h1 className="section_heading mb-6">
            {B2B_DIGITIZATION_REASON_HEADING}
          </h1>
          <p className="section_description ">
            {B2B_DIGITIZATION_REASON_DESCRIPTION}
          </p>
        </div>

        <div className="relative">
          <Image
            src="/b2b/Diagram.png"
            alt="diagram"
            width={1224}
            height={652}
            style={{ objectFit: "cover" }}
            className="relative"
          />

          {B2B_DIGITIZATION_LIST.map(({ title, list }, index) => (
            <div
              key={index}
              className={`absolute  ${
                index % 2 == 0 ? "left-10" : "right-10 "
              }  ${index < 2 ? "top-8 " : "bottom-16 "}   max-w-[400px] `}
            >
              <h3 className="text-3xl font-[700] text-orange mb-4">{title}</h3>
              <ul className="list-disc text-sm">
                {list.map((item, index) => (
                  <li key={index} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BDigitizationReasons;
