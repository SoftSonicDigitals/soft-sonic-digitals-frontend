"use client";
import React from "react";
import {
  Profile,
  StatusContainer,
  LeadSource,
  CapturedDate,
  Requirements,
  DetailSkeleton,
} from "./";
import useSWR from "swr";
import { fetcher } from "@/utils";

const LeadDetails = ({ leadId }: { leadId: string }) => {
  const { data, isLoading, error } = useSWR(`/api/leads/${leadId}`, fetcher);

  if (data?.status === "error") {
    return;
  }

  const { lead } = data?.data || {};
  return (
    <>
      {!isLoading && (
        <>
          <Profile
            name={lead.name}
            email={lead.email}
            mobile={lead.mobile}
            postcode={lead.postcode}
            addressLine={lead.address_line}
            state={lead.state}
            budget={lead.budget}
            service={lead.service}
            company={lead.company}
            leadOwner={lead.lead_owner}
          />

          <StatusContainer status={lead.status} />
          <div className="flex flex-col md:flex-row justify-between md:items-center my-4">
            <LeadSource />
            <CapturedDate date={lead.date} />
          </div>
          <hr className="my-8" />
          <Requirements
            estimatedStart={lead.estimated_start_time}
            requirement={lead.requirement}
            projectDetails={lead.project_details}
            priority={lead.priority}
            leadOwner={lead.lead_owner}
          />
        </>
      )}
      {isLoading && (
        <>
          <DetailSkeleton />
        </>
      )}
    </>
  );
};

export default LeadDetails;
