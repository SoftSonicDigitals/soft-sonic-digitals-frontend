import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { WHERE_TO_FIND } from "@/prototypes/contact_page";
import { ContactInfo } from ".";

const WhereToFind = () => {
  return (
    <section id="where_to_find_us">
      <div className="wrapper_container ">
        <PrimaryStyledHeadings
          mainHeading="Where you'll find us"
          mainHeadingStyles="!font-[600] tracking-wide mb-12 sm:mb-24 "
        />
      </div>

      {WHERE_TO_FIND.map(({ country, locations }) =>
        locations.map(({ name, email, address, image, contactNo }, index) => (
          <ContactInfo
            key={index}
            name={name}
            email={email}
            address={address}
            image={image}
            contactNo={contactNo}
          />
        ))
      )}
    </section>
  );
};

export default WhereToFind;
