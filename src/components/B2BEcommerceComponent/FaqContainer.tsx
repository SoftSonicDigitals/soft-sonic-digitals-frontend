import { B2B_FAQ_LIST } from "@/prototypes/b2b";
import React from "react";
import FaqItem from "./FaqItem";

const FaqContainer = () => {
  return (
    <div>
      {B2B_FAQ_LIST.map(({ answer, question }, index) => (
        <FaqItem answer={answer} question={question} key={index} />
      ))}
    </div>
  );
};

export default FaqContainer;
