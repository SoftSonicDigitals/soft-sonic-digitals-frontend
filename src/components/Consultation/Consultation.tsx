import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { MAIN_HEADING, SUB_HEADING } from "@/constants/consultation";
import { CONSULTATION } from "@/prototypes/consultation";
import { ConsultationCard } from ".";

const Consultation = () => {
  return (
    <section id="consultation">
      <div className="wrapper_container flex-center flex-col mb-24">
        <PrimaryStyledHeadings
          mainHeading={MAIN_HEADING}
          subHeading={SUB_HEADING}
          mainHeadingStyles="mx-4 "
        />
        <div
          className="grid  grid-cols-1
          md:grid-cols-2 xl:grid-cols-3 gap-12  xl:mx-4 2xl:mx-12 px-4 "
        >
          {CONSULTATION.map(({ id, title, description, imageName }) => (
            <ConsultationCard
              key={id}
              id={id}
              title={title}
              description={description}
              imageName={imageName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
