import { THE_ASK } from "@/constants/case_studies_page";
import React from "react";

const TheAsk = ({}) => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-4 md:px-2">
        <div className="case_study_headings mb-8">{THE_ASK} </div>
        <div className="text-lg font-[500] text-gray-400">
          Camping addresses the escapism to unwind in real nature, but
          serenity-obsessed people couldn’t compromise on comfort and luxury.
          The client had the concept of a Glamping site, a blend of camping and
          glamorous living at the farm site. For this idea, the client wanted to
          develop a portal from where customers can book camps and at the same
          time be able to manage the inventory with enhanced accountability.
        </div>
      </div>
    </section>
  );
};

export default TheAsk;
