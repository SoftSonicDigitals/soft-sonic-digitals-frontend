import {
  IndustryHero,
  SpecializationTiles,
} from "@/components/IndustryComponents";
import {
  JEWELLERY,
  SPECIALIZATION_TILES_DATA,
} from "@/prototypes/industries/jewellery";
import React from "react";

const page = () => {
  return (
    <>
      <IndustryHero
        imgPath={JEWELLERY.imgPath}
        heading={JEWELLERY.heading}
        description={JEWELLERY.description}
        btnText={JEWELLERY.btnText}
      />
      <SpecializationTiles tilesDataArr={SPECIALIZATION_TILES_DATA} />
    </>
  );
};

export default page;
