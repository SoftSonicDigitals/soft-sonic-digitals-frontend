import {
  IndustryHero,
  SpecializationTiles,
} from "@/components/IndustryComponents";
import { InfoSection } from "@/components/Reusable";
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
      <InfoSection
        heading={sectionOne!.heading}
        subHeading={sectionOne!.subHeading}
        description={sectionOne!.description}
        imgpath={sectionOne!.imgPath}
      />

      <InfoSection
        heading={sectionTwo!.heading}
        subHeading={sectionTwo!.subHeading}
        description={sectionTwo!.description}
        imgpath={sectionTwo!.imgPath}
        reverseLayout={true}
        listArray={sectionTwo!.listArray}
      />

      <InfoSection
        heading={sectionThree!.heading}
        subHeading={sectionThree!.subHeading}
        description={sectionThree!.description}
        imgpath={sectionThree!.imgPath}
        reverseLayout={true}
        listArray={sectionThree!.listArray}
      />

      <InfoSection
        heading={sectionFour!.heading}
        subHeading={sectionFour!.subHeading}
        description={sectionFour!.description}
        imgpath={sectionFour!.imgPath}
      />
      <InfoSection
        heading={sectionFive!.heading}
        subHeading={sectionFive!.subHeading}
        description={sectionFive!.description}
        imgpath={sectionFive!.imgPath}
        reverseLayout={true}
      />

      <InfoSection
        heading={sectionSix!.heading}
        subHeading={sectionSix!.subHeading}
        description={sectionSix!.description}
        imgpath={sectionSix!.imgPath}
      />
      <InfoSection
        heading={sectionSeven!.heading}
        subHeading={sectionSeven!.subHeading}
        description={sectionSeven!.description}
        imgpath={sectionSeven!.imgPath}
        reverseLayout={true}
        requireSectionOverlay={true}
        overlayStyles="bg-rose_white"
      />
    </>
  );
};

export default page;
