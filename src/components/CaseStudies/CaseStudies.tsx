import { CASE_STUDIES } from "@/prototypes/case_studies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudies = () => {
  return (
    <section id="case_studies">
      <div className="wrapper_container mb-24">
        <div className="flex-center flex-col mb-16 gap-4 ">
          <h1 className="text-2xl md:text-[2.1rem] font-[500] mx-4 ">
            Case studies & stories
          </h1>
          <p className="text-xl font-[500] text-gray-800">
            As a digital commerce development agency, we work together across
            the globe to make a difference
          </p>
        </div>
        <div className="flex-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center justify-center max-w-[1300px] md:px-[2%] lg:px-10 xl:px-6 2xl:p-0 2xl:gap-x-8 2xl:gap-y-0">
            {CASE_STUDIES.map((caseStudy, index) => (
              <div key={caseStudy.id} className="flex-center px-4 2xl:px-0">
                <Link href={caseStudy.link}>
                  <Image
                    src={`/case_studies/${caseStudy.imageName}`}
                    alt={`${caseStudy.title}- demo`}
                    width={604}
                    height={358}
                    className={`${index % 2 !== 0 ? "md:mt-16" : "md:mb-16"} `}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
