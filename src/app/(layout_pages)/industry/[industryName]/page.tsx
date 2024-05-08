import {
  IndustryFeatureTabs,
  IndustryHero,
  SpecializationTiles,
} from "@/components/IndustryComponents";
import {
  PrimaryInfoSection,
  SecondaryInfoSection,
} from "@/components/Reusable";
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
    sectionNine,
    sectionTen,
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

      <SecondaryInfoSection
        heading={sectionThree!.heading}
        subHeading={sectionThree!.subHeading}
        description={sectionThree!.description}
        imgpath={sectionThree!.imgPath}
        imgHeight={sectionThree!.imgHeight as number}
        imgWidth={sectionThree!.imgWidth as number}
      />

      <PrimaryInfoSection
        heading={sectionFour!.heading}
        subHeading={sectionFour!.subHeading}
        description={sectionFour!.description}
        imgpath={sectionFour!.imgPath}
        reverseLayout={true}
        listArray={sectionFour!.listArray}
      />

      <PrimaryInfoSection
        heading={sectionFive!.heading}
        subHeading={sectionFive!.subHeading}
        description={sectionFive!.description}
        imgpath={sectionFive!.imgPath}
      />
      <PrimaryInfoSection
        heading={sectionSix!.heading}
        subHeading={sectionSix!.subHeading}
        description={sectionSix!.description}
        imgpath={sectionSix!.imgPath}
        reverseLayout={true}
      />

      <PrimaryInfoSection
        heading={sectionSeven!.heading}
        subHeading={sectionSeven!.subHeading}
        description={sectionSeven!.description}
        imgpath={sectionSeven!.imgPath}
      />
      <PrimaryInfoSection
        heading={sectionEight!.heading}
        subHeading={sectionEight!.subHeading}
        description={sectionEight!.description}
        imgpath={sectionEight!.imgPath}
        reverseLayout={true}
        requireSectionOverlay={true}
        overlayStyles="before:bg-rose_white"
        overlayPosition="before:right-0"
      />

      <PrimaryInfoSection
        heading={sectionNine!.heading}
        subHeading={sectionNine!.subHeading}
        description={sectionNine!.description}
        imgpath={sectionNine!.imgPath}
        requireSectionOverlay={true}
        overlayStyles="before:bg-green"
        overlayPosition="before:left-0"
      />

      <SecondaryInfoSection
        heading={sectionTen!.heading}
        subHeading={sectionTen!.subHeading}
        description={sectionTen!.description}
        imgpath={sectionTen!.imgPath}
        imgHeight={sectionTen!.imgHeight as number}
        imgWidth={sectionTen!.imgWidth as number}
      />

      <IndustryFeatureTabs
        sectionHeading={JEWELLERY.featuresSection.sectionHeading}
        featuresArray={JEWELLERY.featuresSection.features}
      />
    </>
  );
};

export default page;
