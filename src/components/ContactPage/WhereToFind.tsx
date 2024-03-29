import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";

const WhereToFind = () => {
  return (
    <section id="where_to_find_us">
      <div className="wrapper_container mb-24">
        <PrimaryStyledHeadings
          mainHeading="Where you'll find us"
          mainHeadingStyles="!font-[600] tracking-wide  "
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div>Image</div>
        <div>info</div>
      </div>
    </section>
  );
};

export default WhereToFind;
