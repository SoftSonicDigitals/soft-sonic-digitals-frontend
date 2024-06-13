import Image from "next/image";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import {
  B2B_PORTAL_HEADING,
  B2B_PORTAL_SUBHEADING,
} from "@/constants/b2b_ecommerce";

const B2BPortal = () => {
  return (
    <section id="b2b_portal">
      <div className="wrapper_container mb-24">
        <div>
          <div className="px-3 lg:px-24 mb-16">
            <h1 className="section_heading text-center mb-4">
              {B2B_PORTAL_HEADING}
            </h1>
            <p className="section_description text-center">
              {B2B_PORTAL_SUBHEADING}
            </p>
          </div>
          <div className="flex-col md:flex-row flex  items-start justify-center gap-10 lg:gap-16">
            <DropdownMenu />
            <div className="basis-full mx-auto">
              <Image
                src="/b2b/list.png"
                alt="list image"
                width={560}
                height={793}
                className="px-4 md:px-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BPortal;
