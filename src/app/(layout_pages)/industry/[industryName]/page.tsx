import {
  IndustryHero,
  SpecializationTiles,
} from "@/components/IndustryComponents";
import { JEWELLERY } from "@/prototypes/industries/jewellery";
import React from "react";

const page = () => {
  return (
    <>
      <IndustryHero
        imgPath={JEWELLERY.imgPath}
        heading="Transform your Jewellry Business Online!"
        description="We are the One Stop Shop for all your Jewellry website design & development needs."
        btnText="REQUEST A PROPOSAL"
      />
      <SpecializationTiles />
    </>
  );
};

export default page;
