import React from "react";
import { PrimaryStyledHeadings } from "../../Reusable";
import { MAIN_HEADING, SUB_HEADING } from "@/constants/home";
import { CONSULTATION } from "@/prototypes/consultation";
import { ConsultationCard } from ".";
import Reveal from "../../Animation/Reveal";

const Consultation = () => {
  return (
    <section id="consultation">
      <div className="wrapper_container flex-center flex-col mb-24">
        <Reveal>
          <PrimaryStyledHeadings
            mainHeading={MAIN_HEADING}
            subHeading={SUB_HEADING}
            mainHeadingStyles="mx-4 "
            containerStyles="mb-16 gap-4 px-5 md:px-8"
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12  xl:mx-4 2xl:mx-12 px-4 ">
          {CONSULTATION.map(({ id, title, description, imageName }, index) => (
            <Reveal key={id} index={index}>
              <ConsultationCard
                title={title}
                description={description}
                imageName={imageName}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
