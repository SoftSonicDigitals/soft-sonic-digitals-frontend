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
  const { hero, sectionOne, sectionTwo } = JEWELLERY;

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
      />
    </>
  );
};

export default page;
