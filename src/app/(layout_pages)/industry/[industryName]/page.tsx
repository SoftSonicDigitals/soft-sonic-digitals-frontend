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
  return (
    <>
      <IndustryHero
        imgPath={JEWELLERY.hero.imgPath}
        heading={JEWELLERY.hero.heading}
        description={JEWELLERY.hero.description}
        btnText={JEWELLERY.hero.btnText}
      />
      <SpecializationTiles tilesDataArr={SPECIALIZATION_TILES_DATA} />

      <InfoSection
        heading={JEWELLERY.sections.digitalAssetManagement.heading}
        subHeading={JEWELLERY.sections.digitalAssetManagement.subHeading}
        description={JEWELLERY.sections.digitalAssetManagement.description}
        imgpath={JEWELLERY.sections.digitalAssetManagement.imgPath}
      />
    </>
  );
};

export default page;
