import { LayoutAnimator } from "@/components/Dashboard/Clients";
import { InfoBox, Profile } from "@/components/Dashboard/Details";
import React from "react";

const page = () => {
  return (
    <main className="md:pl-[5rem] pt-16 md:pt-0">
      <LayoutAnimator>
        <div className="flex justify-between lg:items-center  my-10 gap-6">
          <h1 className="text-3xl font-[700] tracking-wide ">Lead Details</h1>
        </div>

        <Profile />
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  border gap-[1px] bg-gray-200  ">
          {[1, 1, 1, 1].map((item, index) => (
            <InfoBox key={index} />
          ))}
        </div>
      </LayoutAnimator>
    </main>
  );
};

export default page;
