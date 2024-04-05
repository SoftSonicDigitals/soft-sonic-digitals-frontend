import Image from "next/image";
import React from "react";

const RandomCaseStudies = () => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24">
        <div className="flex flex-col lg:flex-row">
          <div>
            <Image
              src={`/case_study_pages/feather_down/poster.webp`}
              height={400}
              width={576}
              alt="poster"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default RandomCaseStudies;
