import { Clients } from "@/components/Clients";
import {
  EcommerceFrameworks,
  IndustryFeatureTabs,
  IndustryHero,
  ServedIndustries,
  SpecializationTiles,
  IndustryBanner,
} from "@/components/IndustryComponents";
import EcommerceProjectBanner from "@/components/Reusable/EcommerceProjectBanner";
import { ResultsDelivered } from "@/components/ResultsDelivered";
import {
  PrimaryInfoSection,
  SecondaryInfoSection,
} from "@/components/Reusable";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SPECIALIZATION_TILES_DATA } from "@/constants/industry";
import { INDUSTRY_ARRAY } from "@/prototypes/industries";

import { redirect } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { industry_name: string } }) => {
  const industryIndex = INDUSTRY_ARRAY.findIndex(
    (industryName) =>
      industryName.routeParams.replace("/", "").toLowerCase() ===
      params.industry_name
  );
  const industryDetails = INDUSTRY_ARRAY[industryIndex];

  if (!industryDetails) {
    redirect("/");
  }

  return (
    <>
      <IndustryHero
        imgPath={industryDetails.hero.imgPath}
        heading={industryDetails.hero.heading}
        description={industryDetails.hero.description}
        btnText={industryDetails.hero.btnText}
      />
      <SpecializationTiles tilesDataArr={SPECIALIZATION_TILES_DATA} />

      {industryDetails?.sectionOne && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionOne.heading}
          subHeading={industryDetails?.sectionOne.subHeading}
          description={industryDetails?.sectionOne.description}
          imgpath={industryDetails?.sectionOne.imgPath}
        />
      )}

      {industryDetails?.sectionTwo && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionTwo.heading}
          subHeading={industryDetails?.sectionTwo.subHeading}
          description={industryDetails?.sectionTwo.description}
          imgpath={industryDetails?.sectionTwo.imgPath}
          reverseLayout={true}
          listArray={industryDetails?.sectionTwo.listArray}
        />
      )}

      {industryDetails?.sectionThree && (
        <SecondaryInfoSection
          heading={industryDetails?.sectionThree.heading}
          subHeading={industryDetails?.sectionThree.subHeading}
          description={industryDetails?.sectionThree.description}
          imgpath={industryDetails?.sectionThree.imgPath}
          imgHeight={industryDetails?.sectionThree.imgHeight as number}
          imgWidth={industryDetails?.sectionThree.imgWidth as number}
        />
      )}

      {industryDetails?.sectionFour && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionFour.heading}
          subHeading={industryDetails?.sectionFour.subHeading}
          description={industryDetails?.sectionFour.description}
          imgpath={industryDetails?.sectionFour.imgPath}
          reverseLayout={true}
          listArray={industryDetails?.sectionFour.listArray}
        />
      )}

      {industryDetails?.sectionFive && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionFive.heading}
          subHeading={industryDetails?.sectionFive.subHeading}
          description={industryDetails?.sectionFive.description}
          imgpath={industryDetails?.sectionFive.imgPath}
        />
      )}

      {industryDetails?.sectionSix && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionSix.heading}
          subHeading={industryDetails?.sectionSix.subHeading}
          description={industryDetails?.sectionSix.description}
          imgpath={industryDetails?.sectionSix.imgPath}
          reverseLayout={true}
        />
      )}

      {industryDetails?.sectionSeven && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionSeven.heading}
          subHeading={industryDetails?.sectionSeven.subHeading}
          description={industryDetails?.sectionSeven.description}
          imgpath={industryDetails?.sectionSeven.imgPath}
        />
      )}

      {industryDetails?.sectionEight && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionEight.heading}
          subHeading={industryDetails?.sectionEight.subHeading}
          description={industryDetails?.sectionEight.description}
          imgpath={industryDetails?.sectionEight.imgPath}
          reverseLayout={true}
          requireSectionOverlay={true}
          overlayStyles="before:bg-rose_white"
          overlayPosition="before:right-0"
        />
      )}

      {industryDetails?.sectionNine && (
        <PrimaryInfoSection
          heading={industryDetails?.sectionNine.heading}
          subHeading={industryDetails?.sectionNine.subHeading}
          description={industryDetails?.sectionNine.description}
          imgpath={industryDetails?.sectionNine.imgPath}
          requireSectionOverlay={true}
          overlayStyles="before:bg-green"
          overlayPosition="before:left-0"
        />
      )}

      {industryDetails?.sectionTen && (
        <SecondaryInfoSection
          heading={industryDetails?.sectionTen.heading}
          subHeading={industryDetails?.sectionTen.subHeading}
          description={industryDetails?.sectionTen.description}
          imgpath={industryDetails?.sectionTen.imgPath}
          imgHeight={industryDetails?.sectionTen.imgHeight as number}
          imgWidth={industryDetails?.sectionTen.imgWidth as number}
        />
      )}

      {industryDetails?.featuresSection && (
        <IndustryFeatureTabs
          sectionHeading={industryDetails?.featuresSection.sectionHeading}
          featuresArray={industryDetails?.featuresSection.features}
        />
      )}

      <ResultsDelivered />
      <Clients />
      <WhyChooseUs />
      {industryDetails?.bannerSection && (
        <IndustryBanner
          title={industryDetails?.bannerSection.title}
          description={industryDetails?.bannerSection.description}
          btnText={industryDetails?.bannerSection.btnText}
        />
      )}
      <ServedIndustries />
      <EcommerceFrameworks />
      <EcommerceProjectBanner />
    </>
  );
};

export default page;
