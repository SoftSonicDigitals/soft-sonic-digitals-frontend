import { OurWork, ProjectTile } from "@/components/OurWork";
import React from "react";

const page = () => {
  return (
    <main>
      <OurWork />
      <section id="projects">
        <div className="wrapper_container flex-center sm:mt-4 mb-12 lg:mb-24">
          <ProjectTile />
        </div>
      </section>
    </main>
  );
};

export default page;
