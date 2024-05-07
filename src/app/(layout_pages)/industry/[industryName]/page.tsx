import {
  IndustryHero,
  SpecializationTiles,
} from "@/components/IndustryComponents";
import { PrimaryInfoSection } from "@/components/Reusable";
import {
  JEWELLERY,
  SPECIALIZATION_TILES_DATA,
} from "@/prototypes/industries/jewellery";
import React from "react";

const page = () => {
  const {
    hero,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
    sectionSeven,
    sectionEight,
  } = JEWELLERY;

  return (
    <>
      <IndustryHero
        imgPath={hero.imgPath}
        heading={hero.heading}
        description={hero.description}
        btnText={hero.btnText}
      />
      <SpecializationTiles tilesDataArr={SPECIALIZATION_TILES_DATA} />
      <PrimaryInfoSection
        heading={sectionOne!.heading}
        subHeading={sectionOne!.subHeading}
        description={sectionOne!.description}
        imgpath={sectionOne!.imgPath}
      />

      <PrimaryInfoSection
        heading={sectionTwo!.heading}
        subHeading={sectionTwo!.subHeading}
        description={sectionTwo!.description}
        imgpath={sectionTwo!.imgPath}
        reverseLayout={true}
        listArray={sectionTwo!.listArray}
      />

      <PrimaryInfoSection
        heading={sectionThree!.heading}
        subHeading={sectionThree!.subHeading}
        description={sectionThree!.description}
        imgpath={sectionThree!.imgPath}
        reverseLayout={true}
        listArray={sectionThree!.listArray}
      />

      <PrimaryInfoSection
        heading={sectionFour!.heading}
        subHeading={sectionFour!.subHeading}
        description={sectionFour!.description}
        imgpath={sectionFour!.imgPath}
      />
      <PrimaryInfoSection
        heading={sectionFive!.heading}
        subHeading={sectionFive!.subHeading}
        description={sectionFive!.description}
        imgpath={sectionFive!.imgPath}
        reverseLayout={true}
      />

      <PrimaryInfoSection
        heading={sectionSix!.heading}
        subHeading={sectionSix!.subHeading}
        description={sectionSix!.description}
        imgpath={sectionSix!.imgPath}
      />
      <PrimaryInfoSection
        heading={sectionSeven!.heading}
        subHeading={sectionSeven!.subHeading}
        description={sectionSeven!.description}
        imgpath={sectionSeven!.imgPath}
        reverseLayout={true}
        requireSectionOverlay={true}
        overlayStyles="bg-rose_white"
        overlayPosition="right-0"
      />
      <PrimaryInfoSection
        heading={sectionEight!.heading}
        subHeading={sectionEight!.subHeading}
        description={sectionEight!.description}
        imgpath={sectionEight!.imgPath}
        requireSectionOverlay={true}
        overlayStyles="bg-green"
        overlayPosition="left-0"
      />
    </>
  );
};

export default page;
