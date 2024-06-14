import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PrimaryButton } from "../Reusable";

type CaseStudyType = {
  link: string;
  title: string;
  index: number;
  imageName: string;
  description?: string;
  showInfo?: boolean;
  caseStudyPhrase: string;
  alignment: "vertical" | "horizontal";
};

const CaseStudy = ({
  link,
  title,
  index,
  imageName,
  description,
  showInfo = false,
  caseStudyPhrase,
  alignment,
}: CaseStudyType) => {
  const caseItemMargin = index % 2 !== 0 ? "md:mt-16" : "md:mb-16";
  const flexHorizontalLayout =
    index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse";
  const caseItemVerticalAlignPadding = "px-4 2xl:px-0";
  const caseItemHorizontalAlignPadding = "px-0 sm:px-8 lg:px-0";
  const caseItemHorizonalFlexGap = " gap-6 md:gap-10";
  return (
    <div
      className={`flex  flex-col ${
        alignment === "horizontal"
          ? `${flexHorizontalLayout} 
            ${caseItemHorizontalAlignPadding}
            ${caseItemHorizonalFlexGap}`
          : caseItemVerticalAlignPadding
      }`}
    >
      <Link
        href={link}
        className={` basis-full ${
          alignment !== "horizontal" ? caseItemMargin : ""
        } `}
      >
        <Image
          src={`/case_studies/${imageName}`}
          alt={`${title}- demo`}
          width={604}
          height={358}
          className="mb-3"
          style={{ objectFit: "contain" }}
        />
        {showInfo && (
          <div className="px-3 tracking-wide max-w-[605px]">
            <p className="text-xl font-[700] mb-3 text-gray-900">{title}</p>
            <p className="">{description}</p>
          </div>
        )}
      </Link>

      {alignment === "horizontal" && (
        <div className="basis-full px-2 mt-4">
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
      )}
    </div>
  );
};

export default CaseStudy;
