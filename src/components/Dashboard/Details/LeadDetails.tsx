"use client";
import React, { Fragment } from "react";
import {
  Profile,
  StatusContainer,
  LeadSource,
  CapturedDate,
  Requirements,
  Notes,
  SkeletonLoader,
} from "./";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LeadDetails = ({ leadId }: { leadId: string }) => {
  const { data, isLoading, error } = useSWR(`/api/leads/${leadId}`, fetcher);

  // Adding Notes
  //   const addNote = async () => {
  //     await fetch(`/api/leads/${leadId}`, { method: "POST" });
  //   };

  console.log(data);

  if (data?.status === "error") {
    return;
  }

  const { lead, notes } = data?.data || {};

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
          />

          <StatusContainer />
          <div className="flex flex-col md:flex-row justify-between md:items-center my-4">
            <LeadSource />
            <CapturedDate date={"2024-08-25T09:57:14.244+00:00"} />
          </div>
          <hr className="my-8" />
          <Requirements />
          <Notes />
        </>
      )}
      {isLoading && (
        <>
          <SkeletonLoader />
        </>
      )}
    </>
  );
};

export default LeadDetails;
