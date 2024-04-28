import { OurWork, CaseStudyTiles } from "@/components/OurWork";
import { RequestProposalBtn } from "@/components/Reusable";
import React from "react";

const page = () => {
  return (
    <main>
      <OurWork />
      <CaseStudyTiles />
      <RequestProposalBtn />
    </main>
  );
};

export default page;
