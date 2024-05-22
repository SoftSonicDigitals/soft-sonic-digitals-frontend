import {
  B2CHero,
  B2CWeAreDifferent,
  B2ConcernsExpertise,
  B2CHelp,
} from "@/components/B2CEcommerceComponent";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <B2CHero />
      <B2CWeAreDifferent />
      <B2ConcernsExpertise />
      <B2CHelp />
    </main>
  );
};

export default page;
