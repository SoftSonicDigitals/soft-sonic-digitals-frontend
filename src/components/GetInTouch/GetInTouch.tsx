import React from "react";
import { PrimaryButton, PrimaryStyledHeadings } from "../Reusable";
import { CONTACTS } from "@/prototypes/get_in_touch";
import {
  GET_IN_TOUCH_MAIN_HEADING,
  GET_IN_TOUCH_SUB_HEADING,
} from "@/constants/get_in_touch";
import { LocationCard } from ".";

const GetInTouch = () => {
  return (
    <section id="get_in_touch" className="bg-black">
      <div className="wrapper_container py-12 mb-24">
        <div className="mt-12 mb-16 md:mb-20">
          <PrimaryStyledHeadings
            mainHeading={GET_IN_TOUCH_MAIN_HEADING}
            subHeading={GET_IN_TOUCH_SUB_HEADING}
            mainHeadingStyles="mb-4 text-white"
            subHeadingStyles="text-white 2xl:px-20"
            containerStyles="mb-12 px-8  md:px-12 lg:px-8 xl:px-12 "
          />
          <div className="flex-center w-full">
            <PrimaryButton title="LET'S TAlK" className="px-12 py-3" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 md:gap-y-16 px-6 md:px-16 lg:px-8 max-w-[1270px] mx-auto ">
          {CONTACTS.map(({ id, contactNumber, location, locationImage }) => (
            <LocationCard
              key={id}
              contactNumber={contactNumber}
              location={location}
              locationImage={locationImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
