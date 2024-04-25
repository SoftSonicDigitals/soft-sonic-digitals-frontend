import { OurWork, ProjectTile } from "@/components/OurWork";
import React from "react";

const page = () => {
  return (
    <main>
      <OurWork />
      <section id="projects">
        <div className="wrapper_container grid md:grid-cols-2 lg:grid-cols-3 sm:mt-4 mb-12 lg:mb-24 max-w-[1190px]">
          <ProjectTile />
          <ProjectTile />
          <ProjectTile />
        </div>
      </section>
    </main>
  );
};

export default page;
