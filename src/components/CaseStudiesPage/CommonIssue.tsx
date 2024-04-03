import { COMMON_ISSUES_FACED } from "@/constants/case_studies_page";
import React from "react";

const CommonIssue = () => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24  px-4 md:px-2">
        <div className="case_study_headings">{COMMON_ISSUES_FACED}</div>
        <ul className="text-lg text-gray-400 mb-2 font-[500] list-disc list-outside pl-6 marker:text-orange marker:text-3xl ">
          <li className="mb-1">
            The client was facing problems managing the customer’s requests from
            the different regions.
          </li>
          <li className="mb-1 ">
            It has become tough for his team to deal with customers on the phone
            about the inquiry and give them updates.
          </li>
          <li className="mb-1">
            Dealing with clients from the different European countries was
            becoming tough, and managing their details simultaneously was
            inconsistent and needed more manpower.
          </li>
          <li className="mb-1">
            Checking the camping site based on the request from the customers
            was taking a lot of time to give them an update about it.
          </li>
          <li className="mb-1">
            Based on the Customers’ inquiries about the camping site for
            different locations, Giving them status about the availability of
            camps was a lot of time-consuming.
          </li>
          <li>
            Clients were facing the issue of managing the payments from the
            customers.
          </li>
          <li className="mb-1">
            Manual handling of inventory and records updation has become a
            surpassing issue.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CommonIssue;
