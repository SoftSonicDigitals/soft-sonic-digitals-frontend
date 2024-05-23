import {
  B2CHero,
  B2CWeAreDifferent,
  B2ConcernsExpertise,
  B2CHelp,
  B2CStats,
} from "@/components/B2CEcommerceComponent";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <B2CHero />
      <B2CWeAreDifferent />
      <B2ConcernsExpertise />
      <B2CHelp />
      <B2CStats />
    </main>
  );
};

export default page;
