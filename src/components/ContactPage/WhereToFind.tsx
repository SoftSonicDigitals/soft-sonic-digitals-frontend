import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import Image from "next/image";
import { WHERE_TO_FIND } from "@/prototypes/contact_page";

const WhereToFind = () => {
  const { locations } = WHERE_TO_FIND[0];
  return (
    <section id="where_to_find_us">
      <div className="wrapper_container mb-24">
        <PrimaryStyledHeadings
          mainHeading="Where you'll find us"
          mainHeadingStyles="!font-[600] tracking-wide mb-24  "
        />
        <div className="flex items-center justify-center lg:items-start flex-col lg:flex-row gap-8 text-gray-900">
          <Image
            src={`/contact_page/${locations[0].image}`}
            alt={`${locations[0].name}`}
            width={540}
            height={540}
            style={{ objectFit: "contain" }}
          />

          <div className="flex flex-col gap-8 max-w-[540px] mt-4">
            <div className="relative">
              <h3 className="text-3xl capitalize font-[600] tracking-wide pb-3 ">
                {locations[0].name}
              </h3>
              <div className="absolute h-[3px] w-[40px] bg-gradient-to-r from-orange to-pink bottom-0" />
            </div>
            <div>
              <p className="text-[25px] mb-2 font-[500]"> Contact us</p>
              <p className="text-lg tracking-wider font-[500]">
                {locations[0].email}
              </p>
            </div>
            <div>
              <p className="text-[25px] mb-2 font-[500]"> Call us</p>
              <p className="text-lg  tracking-wider font-[500]">
                {locations[0].contactNo}
              </p>
            </div>
            <div>
              <p className="text-[25px] mb-2 font-[500]">Address </p>
              <p className="text-lg  tracking-wider font-[500]">
                {locations[0].address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToFind;
