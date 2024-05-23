import { WHAT_WE_DO, THE_OUTCOME } from "@/constants/b2c_ecommerce";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

type B2CHelpTabProps = {
  title: string;
  whatWeDo: string;
  outcomes: string[];
  serviceTitle?: string;
  serviceList?: string[];
  indexOfTab: number;
  toggleTab: (index: number) => void;
  isTabOpen: (selected: number | null, index: number) => boolean;
  selectedTab: number | null;
};

const B2CHelpTab = ({
  title,
  whatWeDo,
  outcomes,
  serviceTitle,
  serviceList,
  indexOfTab,
  toggleTab,
  isTabOpen,
  selectedTab,
}: B2CHelpTabProps) => {
  return (
    <div className="mb-6 sm:mb-12">
      <div
        onClick={() => toggleTab(indexOfTab)}
        className={`flex items-center gap-4 ${
          isTabOpen(selectedTab, indexOfTab) ? "mb-6" : "mb-0"
        }`}
      >
        <div className="bg-gray-100 p-2 rounded-full">
          {!isTabOpen(selectedTab, indexOfTab) ? (
            <FaPlus className="cursor-pointer" />
          ) : (
            <FaMinus className="cursor-pointer" />
          )}
        </div>
        <p className="font-[700] text-base sm:text-xl md:text-2xl">{title}</p>
      </div>
      {isTabOpen(selectedTab, indexOfTab) && (
        <div className="ml-12 pl-0.5 mb-6 mr-3 md:mr-0">
          <h4 className="font-[700]  text-base md:text-xl mb-2">
            {WHAT_WE_DO}
          </h4>
          <p className="mb-6 text-sm md:text-base">{whatWeDo}</p>

          <h4 className="font-[700] text-base md:text-xl mb-2">
            {THE_OUTCOME}
          </h4>

          <ul className="list-decimal list-inside mb-6">
            {outcomes.map((outcome, index) => (
              <li key={index} className="mb-1 text-sm md:text-base">
                {outcome}
              </li>
            ))}
          </ul>

          <h4 className="font-[700] text-base md:text-2xl mb-2">
            {serviceTitle}
          </h4>
          <ul className="list-decimal list-inside text-sm md:text-base">
            {serviceList?.map((service, index) => (
              <li key={index} className="mb-1">
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default B2CHelpTab;
