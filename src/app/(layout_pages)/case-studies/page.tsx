import { OurWork, ProjectTile } from "@/components/OurWork";
import React from "react";

const page = () => {
  return (
    <main>
      <OurWork />
      <section id="projects">
        <div className="wrapper_container">
          <ProjectTile />
        </div>
      </section>
    </main>
  );
};

export default page;
