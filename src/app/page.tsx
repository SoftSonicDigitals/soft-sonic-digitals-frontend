import { Awards } from "@/components/Awards";
import { CaseStudies } from "@/components/CaseStudies";
import { Clients } from "@/components/Clients";
import { Commerce } from "@/components/Commerce";
import { Consultation } from "@/components/Consultation";
import { DigitalPlatforms } from "@/components/DigitalPlatforms";
import { Hero } from "@/components/Hero";
import { ResultsDelivered } from "@/components/ResultsDelivered";
import { Reviews } from "@/components/Reviews";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Commerce />
      <ResultsDelivered />
      <Clients />
      <CaseStudies />
      <DigitalPlatforms />
      <Awards />
      <Consultation />
      <Reviews />
      <WhyChooseUs />
    </main>
  );
};

export default page;
