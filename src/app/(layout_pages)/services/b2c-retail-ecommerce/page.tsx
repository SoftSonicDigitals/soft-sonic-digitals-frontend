import {
  B2CHero,
  B2CWeAreDifferent,
  B2ConcernsExpertise,
  B2CHelp,
  B2CStats,
} from "@/components/B2CEcommerceComponent";
import B2CaseStudy from "@/components/B2CEcommerceComponent/B2CaseStudy";
import { Clients } from "@/components/Clients";
import { EcommerceProjectBanner } from "@/components/Reusable";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <B2CHero />
      <B2CWeAreDifferent />
      <B2ConcernsExpertise />
      <B2CHelp />
      <B2CStats />
      <Clients />
      <B2CaseStudy />
      <EcommerceProjectBanner verticalPadding="py-8 lg:py-12" />
    </main>
  );
};

export default page;
