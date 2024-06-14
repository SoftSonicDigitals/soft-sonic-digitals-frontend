import {
  B2BDigitalEcommerce,
  B2BHero,
  B2BPortal,
} from "@/components/B2BEcommerceComponent";
import B2BDigitizationReasons from "@/components/B2BEcommerceComponent/B2BDigitizationReasons";
import { CaseStudies, CaseStudiesLayout } from "@/components/CaseStudies";
import { Clients } from "@/components/Clients";
import { ResultsDelivered } from "@/components/ResultsDelivered";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <B2BHero />
      <B2BDigitalEcommerce />
      <B2BDigitizationReasons />
      <B2BPortal />
      <ResultsDelivered sectionStyles="bg-white-100 py-16" />
      <Clients />

      <CaseStudiesLayout showInfo={false} alignment="horizontal" />
    </main>
  );
};

export default page;
