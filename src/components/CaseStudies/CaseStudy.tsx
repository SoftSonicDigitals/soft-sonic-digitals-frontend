import Image from "next/image";
import Link from "next/link";
import React from "react";

type CaseStudyType = {
  link: string;
  title: string;
  index: number;
  imageName: string;
};

const CaseStudy = ({ link, title, index, imageName }: CaseStudyType) => {
  return (
    <div className="flex-center px-4 2xl:px-0">
      <Link href={link}>
        <Image
          src={`/case_studies/${imageName}`}
          alt={`${title}- demo`}
          width={604}
          height={358}
          className={`${index % 2 !== 0 ? "md:mt-16" : "md:mb-16"} `}
          style={{ objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};

export default CaseStudy;
