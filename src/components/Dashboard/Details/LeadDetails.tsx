"use client";
import React from "react";
import {
  Profile,
  StatusContainer,
  LeadSource,
  CapturedDate,
  Requirements,
  Notes,
} from "./";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LeadDetails = ({ leadId }: { leadId: string }) => {
  const { data, isLoading, error } = useSWR(`/api/leads/${leadId}`, fetcher);

  return (
    <>
      <Profile />
      <StatusContainer />
      <div className="flex flex-col md:flex-row justify-between md:items-center my-4">
        <LeadSource />
        <CapturedDate date={"2024-08-25T09:57:14.244+00:00"} />
      </div>
      <hr className="my-8" />
      <Requirements />
      <Notes />
    </>
  );
};

export default LeadDetails;
