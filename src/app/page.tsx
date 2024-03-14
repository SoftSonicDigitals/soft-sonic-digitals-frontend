import { CaseStudies } from "@/components/CaseStudies";
import { Clients } from "@/components/Clients";
import { Commerce } from "@/components/Commerce";
import { Hero } from "@/components/Hero";
import { ResultsDelivered } from "@/components/ResultsDelivered";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Commerce />
      <ResultsDelivered />
      <Clients />
      <CaseStudies />
    </main>
  );
};

export default page;
