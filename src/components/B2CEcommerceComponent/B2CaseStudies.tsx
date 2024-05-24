import { CASE_STUDIES } from "@/prototypes/case_studies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const B2CaseStudies = () => {
  return (
    <div className="flex-center mb-16 ">
      <div className="grid grid-cols-1  gap-8 md:gap-4 items-center justify-center max-w-[1300px] md:px-[2%] lg:px-10 xl:px-6 2xl:p-0 2xl:gap-x-8 2xl:gap-y-0">
        {CASE_STUDIES.map(({ title, link, imageName, id }, index) => (
          <div
            key={index}
            className="flex-center flex-col lg:flex-row  px-4 2xl:px-0 gap-10"
          >
            <Link href={link}>
              <Image
                src={`/case_studies/${imageName}`}
                alt={`${title}- demo`}
                width={604}
                height={358}
                className={` `}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <div>
              <p className="text-2xl font-[600] text-gray-900">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default B2CaseStudies;
