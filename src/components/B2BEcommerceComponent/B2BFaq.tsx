import React from "react";
import FaqContainer from "./FaqContainer";
import { B2B_FAQ_HEADING } from "@/constants/b2b_ecommerce";

const B2BFaq = () => {
  return (
    <section id="b2b_faq">
      <div className="wrapper_container mb-24">
        <h1 className="section_heading text-center mb-10">{B2B_FAQ_HEADING}</h1>

        <FaqContainer />
      </div>
    </section>
  );
};

export default B2BFaq;
