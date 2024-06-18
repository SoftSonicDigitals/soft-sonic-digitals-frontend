import {
  B2BCommerceBanner,
  B2BDigitalEcommerce,
  B2BFaq,
  B2BHero,
  B2BIndustries,
  B2BPortal,
  B2BPortfolio,
  B2Benefit,
  MACH,
} from "@/components/B2BEcommerceComponent";
import B2BDigitizationReasons from "@/components/B2BEcommerceComponent/B2BDigitizationReasons";
import { Clients } from "@/components/Clients";
import { ResultsDelivered } from "@/components/ResultsDelivered";
import { EcommerceProjectBanner } from "@/components/Reusable";
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
      <B2BPortfolio />
      <B2BIndustries />
      <B2Benefit />
      <MACH />
      <B2BCommerceBanner />
      <B2BFaq />
      <EcommerceProjectBanner />
    </main>
  );
};

export default page;
