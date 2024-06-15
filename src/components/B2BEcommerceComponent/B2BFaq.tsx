import React from "react";
import FaqContainer from "./FaqContainer";

const B2BFaq = () => {
  return (
    <section id="b2b_faq">
      <div className="wrapper_container mb-24">
        <h1 className="section_heading text-center mb-10">
          {"Frequently asked questions"}
        </h1>

        <FaqContainer />
      </div>
    </section>
  );
};

export default B2BFaq;
