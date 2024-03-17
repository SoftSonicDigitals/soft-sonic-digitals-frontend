import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";

const Consultation = () => {
  return (
    <section id="consultation">
      <div className="wrapper_container flex-center flex-col">
        <PrimaryStyledHeadings
          mainHeading="How can we help you?"
          subHeading="Get all digital commerce services under one roof."
          mainHeadingStyles="mx-4 "
        />
        <div>Cards</div>
      </div>
    </section>
  );
};

export default Consultation;
