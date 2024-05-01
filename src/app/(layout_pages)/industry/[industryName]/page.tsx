import { IndustryHero } from "@/components/IndustryComponents";
import React from "react";

const page = () => {
  return (
    <IndustryHero
      imgPath="/prototype_page/hero.webp"
      heading="Transform your Jewelry Business Online!"
      description="We are the One Stop Shop for all your Jewelry website design & development needs."
      btnText="REQUEST A PROPOSAL"
      btnStyles="bg-gradient-to-l from-orange to-pink hover:bg-gradient-to-r from-pink to-orange"
    />
  );
};

export default page;
