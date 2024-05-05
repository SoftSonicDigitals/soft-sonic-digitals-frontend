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
  const { hero, section1 } = JEWELLERY;

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
        heading={section1.heading}
        subHeading={section1.subHeading}
        description={section1.description}
        imgpath={section1.imgPath}
      />
    </>
  );
};

export default page;
