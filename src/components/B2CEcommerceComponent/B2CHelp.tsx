import React from "react";
import B2CHelpTabs from "./B2CHelpTabs";

const B2CHelp = () => {
  return (
    <section id="help_every_step">
      <div className="wrapper_container mb-24 flex-center">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700] text-gray-800 !leading-[1.25]   ">
            We help you on every step of your B2C eCommerce journey, so you can
            always focus on what truly matters.
          </h1>
        </div>

        <B2CHelpTabs />
      </div>
    </section>
  );
};

export default B2CHelp;
