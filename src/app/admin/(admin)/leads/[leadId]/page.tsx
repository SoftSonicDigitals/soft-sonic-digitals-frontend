import { LayoutAnimator } from "@/components/Dashboard/Clients";
import { LeadDetails, Notes } from "@/components/Dashboard/Details";
import React from "react";

const page = ({ params }: { params: { leadId: string } }) => {
  return (
    <main className="md:pl-[5rem] pt-16 md:pt-0">
      <LayoutAnimator>
        <div className="flex justify-between lg:items-center  my-10 gap-6">
          <h1 className="text-3xl font-[700] tracking-wide ">Lead Details</h1>
        </div>
        <LeadDetails leadId={params.leadId} />
        <Notes leadId={params.leadId} />
      </LayoutAnimator>
    </main>
  );
};

export default page;
