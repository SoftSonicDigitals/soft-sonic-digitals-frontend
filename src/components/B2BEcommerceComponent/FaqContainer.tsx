"use client";
import { B2B_FAQ_LIST } from "@/prototypes/b2b";
import React from "react";
import FaqItem from "./FaqItem";
import useDropDown from "@/hooks/useDropDown";
import Reveal from "../Animation/Reveal";

const FaqContainer = () => {
  const { toggle, isOpen, selected } = useDropDown();
  return (
    <div className=" sm:px-8 lg:px-20">
      {B2B_FAQ_LIST.map(({ answer, question }, index) => (
        <Reveal key={index} index={index}>
          <FaqItem
            answer={answer}
            question={question}
            key={index}
            index={index}
            toggleItem={toggle}
            isItemOpen={isOpen}
            itemSelected={selected}
          />
        </Reveal>
      ))}
    </div>
  );
};

export default FaqContainer;
