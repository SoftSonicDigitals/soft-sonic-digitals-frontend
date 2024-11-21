"use client";

import React, { useEffect } from "react";
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
import { useLeadDetailsContext } from "@/context/LeadDetailsContext";
import { LeadDetails as LeadDetailsType } from "@/models/admin";

const LeadDetails = ({ leadId }: { leadId: string }) => {
  const {
    data: response,
    isLoading,
    error,
  } = useSWR<{
    status: number | "error";
    message: string;
    data?: { lead: LeadDetailsType };
    error?: string;
  }>(`/api/leads/${leadId}`, fetcher);

  const { setLeadDetails } = useLeadDetailsContext();

  useEffect(() => {
    if (response?.data?.lead) {
      setLeadDetails(response.data.lead);
    }
  }, [response?.data]);

  if (response?.status === "error") {
    console.error(response.message);
    return;
  }

  const { lead } = response?.data || {};

  const shouldProfileLoad = !isLoading && lead;

  return (
    <>
      {shouldProfileLoad && (
        <>
          <Profile
            name={lead.name}
            email={lead.email}
            mobile={lead.mobile}
            postcode={lead.postcode!}
            addressLine={lead.address_line!}
            state={lead.state!}
            budget={lead.budget}
            service={lead.service}
            company={lead.company!}
            leadOwner={lead.lead_owner!}
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
            leadOwner={lead.lead_owner!}
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
