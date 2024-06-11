import {
  B2BDigitalEcommerce,
  B2BHero,
  B2BPortal,
} from "@/components/B2BEcommerceComponent";
import B2BDigitizationReasons from "@/components/B2BEcommerceComponent/B2BDigitizationReasons";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <B2BHero />
      <B2BDigitalEcommerce />
      <B2BDigitizationReasons />
      <B2BPortal />
    </main>
  );
};

export default page;
