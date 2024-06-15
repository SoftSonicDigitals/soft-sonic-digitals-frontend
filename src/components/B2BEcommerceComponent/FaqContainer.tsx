"use client";
import { B2B_FAQ_LIST } from "@/prototypes/b2b";
import React from "react";
import FaqItem from "./FaqItem";
import useDropDown from "@/hooks/useDropDown";

const FaqContainer = () => {
  const { toggle, isOpen, selected } = useDropDown();
  return (
    <div>
      {B2B_FAQ_LIST.map(({ answer, question }, index) => (
        <FaqItem
          answer={answer}
          question={question}
          key={index}
          index={index}
          toggleItem={toggle}
          isItemOpen={isOpen}
          itemSelected={selected}
        />
      ))}
    </div>
  );
};

export default FaqContainer;
