import { SOLUTION } from "@/constants/case_studies_page";
import React from "react";

const TheSolution = () => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-4 md:px-2">
        <div className="case_study_headings "> {SOLUTION}</div>
        <div className="text-lg font-[500] text-gray-400">
          We conducted research, studied, and understood core areas of the
          glamping industry. We prepared a list of features that could be ideal
          for the client glamping website based on our research. This case study
          portrays the contribution of Magneto development services in
          delivering reliable solutions to the client
        </div>
      </div>
    </section>
  );
};

export default TheSolution;
