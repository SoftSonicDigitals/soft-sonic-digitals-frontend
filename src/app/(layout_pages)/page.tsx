import {
  Hero,
  Commerce,
  Reviews,
  GetInTouch,
  ResultsDelivered,
  Clients,
  CaseStudies,
  DigitalPlatforms,
  Awards,
  Consultation,
  WhyChooseUs,
} from "@/components/Home";
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
      <GetInTouch />
    </main>
  );
};

export default page;
