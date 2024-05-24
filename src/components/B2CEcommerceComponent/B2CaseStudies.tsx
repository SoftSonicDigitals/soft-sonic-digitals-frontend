import { CASE_STUDIES } from "@/prototypes/case_studies";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from "../Reusable";

const B2CaseStudies = () => {
  return (
    <div className="flex-center mb-16  ">
      <div className="grid grid-cols-1  gap-10 items-center justify-center max-w-[1300px] md:px-[2%] lg:mx-4  2xl:gap-y-12">
        {CASE_STUDIES.map(
          ({ title, link, imageName, caseStudyPhrase, description }, index) => (
            <div
              key={index}
              className={`flex-center flex-col   px-0 sm:px-8 
              lg:px-0 gap-6 md:gap-10 ${
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
              <div className="basis-full px-2">
                <h4 className="text-base sm:text-2xl font-[700] text-gray-800 mb-4 tracking-normal">
                  {caseStudyPhrase}
                </h4>
                <p className="mb-6">{description}</p>
                <Link href={link}>
                  <PrimaryButton
                    title="VIEW CASE STUDY"
                    className="px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base "
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
