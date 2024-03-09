import { Commerce } from "@/components/Commerce";
import { Hero } from "@/components/Hero";
import { ResultsDelivered } from "@/components/ResultsDelivered";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Commerce />
      <ResultsDelivered />
    </main>
  );
};

export default page;
