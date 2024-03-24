import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import {
  LETS_TALK_MAIN_HEADING,
  LETS_TALK_SUB_HEADING,
} from "@/constants/contact_page";

LETS_TALK_SUB_HEADING;
const LetsTalkHeadings = () => {
  return (
    <section id="lets_talk">
      <div className="wrapper_container mb-24">
        <PrimaryStyledHeadings
          mainHeading={LETS_TALK_MAIN_HEADING}
          subHeading={LETS_TALK_SUB_HEADING}
          containerStyles="mt-20"
          mainHeadingStyles="!text-3xl sm:!text-4xl lg:!text-[40px] xl:!text-5xl  mb-2 xl:mb-5 text-gray-800"
          subHeadingStyles="hidden md:block !text-xl lg:!text-2xl xl:!text-[29px] xl:!leading-9 tracking-wide px-20"
        />
      </div>
    </section>
  );
};

export default LetsTalkHeadings;
