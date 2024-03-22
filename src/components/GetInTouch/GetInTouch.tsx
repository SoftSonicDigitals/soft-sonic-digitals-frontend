import React from "react";
import { PrimaryButton, PrimaryStyledHeadings } from "../Reusable";
import { CONTACTS } from "@/prototypes/get_in_touch";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section id="get_in_touch" className="bg-black">
      <div className="wrapper_container py-12 mb-24">
        <div className="mt-12 mb-16">
          <PrimaryStyledHeadings
            mainHeading="GET IN TOUCH"
            subHeading="We can only comprehend each other if we communicate well. Allow us to get a better understanding of your needs or queries. Present us the chance to assist you."
            mainHeadingStyles="mb-4 text-white"
            subHeadingStyles="text-white"
            containerStyles="mb-12 px-8 lg:px-32"
          />
          <div className="flex-center w-full">
            <PrimaryButton title="LET'S TAlK" className="px-12 py-3" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-6 ">
          {CONTACTS.map((contact) => (
            <div
              key={contact.id}
              className="flex justify-start items-center gap-4 "
            >
              <Image
                src={`/get_in_touch/${contact.locationImage}`}
                alt={`${contact.location}-img`}
                width={88}
                height={88}
              />
              <div className="text-white flex item-start justify-center flex-col tracking-wide font-[700] gap-2 ">
                <p>{contact.contactNumber}</p>
                <p>{contact.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
