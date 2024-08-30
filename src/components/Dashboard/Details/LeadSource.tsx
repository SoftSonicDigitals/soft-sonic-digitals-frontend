import { LEAD_SORUCE_TXT } from "@/constants/admin";
import React from "react";

const LeadSource = () => {
  const customerSources = [
    "Social Media",
    "Search",
    "Referral",
    "Ads",
    "Email",
    "Events",
    "Content",
    "Mail",
    "TV/Radio",
    "Other",
  ];
  return (
    <div className=" items-center gap-2 hidden md:flex">
      <p id="lead_source" className="font-[500] text-gray-400 text-sm">
        {LEAD_SORUCE_TXT}
      </p>
      <p className="font-[500] text-gray-800">{"Online Store"}</p>
    </div>
  );
};

export default LeadSource;
