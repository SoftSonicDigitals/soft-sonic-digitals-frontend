import { LayoutAnimator } from "@/components/Dashboard/Clients";
import {
  CapturedDate,
  LeadSource,
  Profile,
  StatusContainer,
} from "@/components/Dashboard/Details";
import React from "react";

const page = () => {
  return (
    <main className="md:pl-[5rem] pt-16 md:pt-0">
      <LayoutAnimator>
        <div className="flex justify-between lg:items-center  my-10 gap-6">
          <h1 className="text-3xl font-[700] tracking-wide ">Lead Details</h1>
        </div>
        <Profile />
        <StatusContainer />
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <LeadSource />
          <CapturedDate date={"2024-08-25T09:57:14.244+00:00"} />
        </div>
      </LayoutAnimator>
    </main>
  );
};

export default page;
