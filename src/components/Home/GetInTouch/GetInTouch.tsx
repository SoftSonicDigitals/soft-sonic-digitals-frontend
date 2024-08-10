import React from "react";
import { CONTACTS } from "@/prototypes/get_in_touch";
import {
  GET_IN_TOUCH_MAIN_HEADING,
  GET_IN_TOUCH_SUB_HEADING,
} from "@/constants/get_in_touch";
import { GetInTouchContactBtn, LocationCard } from ".";
import Reveal from "@/components/Animation/Reveal";
import { PrimaryStyledHeadings } from "@/components/Reusable";

const GetInTouch = () => {
  return (
    <section id="get_in_touch" className="bg-black">
      <div className="wrapper_container py-8 mb-12 md:mb-24">
        <Reveal>
          <div className="mt-12 mb-16 md:mb-20">
            <PrimaryStyledHeadings
              mainHeading={GET_IN_TOUCH_MAIN_HEADING}
              subHeading={GET_IN_TOUCH_SUB_HEADING}
              mainHeadingStyles="mb-4 text-white"
              subHeadingStyles="text-white 2xl:px-20"
              containerStyles="mb-12 px-8  md:px-12 lg:px-8 xl:px-12 "
            />
            <div className="flex-center w-full">
              <GetInTouchContactBtn>LET&apos;s TALK</GetInTouchContactBtn>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 md:gap-y-16 px-6 md:px-16 lg:px-8 max-w-[1270px] mx-auto ">
          {CONTACTS.map(
            ({ id, contactNumber, location, locationImage }, index) => (
              <Reveal key={id} index={index}>
                <LocationCard
                  contactNumber={contactNumber}
                  location={location}
                  locationImage={locationImage}
                />
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
