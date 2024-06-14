import Image from "next/image";
import Link from "next/link";
import React from "react";

type CaseStudyType = {
  link: string;
  title: string;
  index: number;
  imageName: string;
  description?: string;
};

const CaseStudy = ({
  link,
  title,
  index,
  imageName,
  description,
}: CaseStudyType) => {
  return (
    <div className="flex-center px-4 2xl:px-0">
      <Link href={link}>
        <div className={`${index % 2 !== 0 ? "md:mt-16" : "md:mb-16"} `}>
          <Image
            src={`/case_studies/${imageName}`}
            alt={`${title}- demo`}
            width={604}
            height={358}
            className="mb-3"
            style={{ objectFit: "contain" }}
          />
          <div className="px-3 tracking-wide">
            <p className="text-xl font-[700] mb-3 text-gray-900">{title}</p>
            <p className="">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CaseStudy;
