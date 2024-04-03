import { THE_ASK } from "@/constants/case_studies_page";
import React from "react";
type TheAskPropsType = {
  theAskDescription: string;
};

const TheAsk = ({ theAskDescription }: TheAskPropsType) => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-4 md:px-2">
        <div className="case_study_headings ">{THE_ASK} </div>
        <div className="text-lg font-[500] text-gray-400">
          {theAskDescription}
        </div>
      </div>
    </section>
  );
};

export default TheAsk;
