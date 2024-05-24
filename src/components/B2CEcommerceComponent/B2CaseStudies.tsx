import { CASE_STUDIES } from "@/prototypes/case_studies";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from "../Reusable";

const B2CaseStudies = () => {
  return (
    <div className="flex-center mb-16 ">
      <div className="grid grid-cols-1  gap-8 md:gap-4 items-center justify-center max-w-[1300px] md:px-[2%] lg:px-10 xl:px-6 2xl:p-0  2xl:gap-y-8">
        {CASE_STUDIES.map(
          ({ title, link, imageName, caseStudyPhrase, description }, index) => (
            <div
              key={index}
              className={`flex-center flex-col   px-4 2xl:px-0 gap-10 ${
                index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <Link href={link} className="basis-full">
                <Image
                  src={`/case_studies/${imageName}`}
                  alt={`${title}- demo`}
                  width={604}
                  height={358}
                  className={` `}
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <div className="basis-full">
                <h4 className="text-2xl font-[600] text-gray-900 mb-4">
                  {caseStudyPhrase}
                </h4>
                <p className="mb-6">{description}</p>
                <Link href={link}>
                  <PrimaryButton
                    title="VIEW CASE STUDY"
                    className="px-6 py-3 "
                  />
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default B2CaseStudies;
