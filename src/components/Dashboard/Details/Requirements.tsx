import React from "react";
import { LeadDetails } from "@/constants/admin";
import { PriorityInfoBox, InfoBox, DetailBullets } from ".";

type RequirementsProps = {
  requirement: string;
  estimatedStart: string;
  projectDetails?: string;
  priority: string;
};
const Requirements = ({
  requirement,
  estimatedStart,
  projectDetails,
  priority,
}: RequirementsProps) => {
  return (
    <section className="mb-12" id="requirement">
      <h1 className="text-2xl font-[600] tracking-wide text-gray-800 mb-5">
        Requirements
      </h1>

      <div className="border w-full p-6">
        <DetailBullets
          title={LeadDetails.PROJECT_REQUIREMENT}
          value={requirement}
        />
        <DetailBullets title={LeadDetails.START_TIME} value={estimatedStart} />
        <DetailBullets
          title={LeadDetails.PROJECT_DETAILS}
          value={projectDetails}
        />

        <div className="grid  grid-cols-1  lg:grid-cols-3 items-center justify-center  border gap-[1px] bg-gray-200   ">
          <InfoBox title={"Reminder"} value="No reminder" />
          <PriorityInfoBox title={"Task Priority"} value={priority} />
        </div>
      </div>
    </section>
  );
};

export default Requirements;
