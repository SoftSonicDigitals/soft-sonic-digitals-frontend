import { WHAT_WE_DO, THE_OUTCOME } from "@/constants/b2c_ecommerce";
import React from "react";
import { FaPlus } from "react-icons/fa6";
type B2CHelpTabProps = {
  title: string;
  whatWeDo: string;
  outcomes: string[];
};

const B2CHelpTab = ({ title, whatWeDo, outcomes }: B2CHelpTabProps) => {
  return (
    <>
      <div className="flex gap-4 mb-6">
        <div className="bg-gray-100 p-2 rounded-full">
          <FaPlus className="cursor-pointer" />
        </div>
        <p className="font-[700] text-2xl">{title}</p>
      </div>
      <div className="ml-12 pl-0.5 mb-6">
        <h4 className="font-[700] text-xl mb-2">{WHAT_WE_DO}</h4>
        <p className="mb-6">{whatWeDo}</p>

        <h4 className="font-[700] text-xl mb-2">{THE_OUTCOME}</h4>

        <ul className="list-decimal list-inside mb-6">
          {outcomes.map((outcome, index) => (
            <li key={index} className="mb-1">
              {outcome}
            </li>
          ))}
        </ul>

        <h4 className="font-[700] text-xl mb-2">KEY SERVICES INCLUDE</h4>
        <ul className="list-decimal list-inside">
          <li className="mb-1">In-depth user research and profiling.</li>
          <li>Seamless user journey mapping and prototyping.</li>
          <li>eamless user journey mapping and prototyping.</li>
        </ul>
      </div>
    </>
  );
};

export default B2CHelpTab;
