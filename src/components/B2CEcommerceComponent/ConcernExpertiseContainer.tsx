"use client";
import { CONCERNS_AND_GOALS } from "@/prototypes/b2c";
import React from "react";
import RetailerListLayout from "./RetailerListLayout";
import useDropDown from "@/hooks/useDropDown";
import Reveal from "../Animation/Reveal";

const ConcernExpertiseContainer = () => {
  const { selected, toggle, isOpen } = useDropDown();

  return (
    <>
      {CONCERNS_AND_GOALS.map((listItem, index) => (
        <Reveal key={index} index={index}>
          <RetailerListLayout
            toogle={toggle}
            selected={selected}
            key={index}
            title={listItem.title}
            list={listItem.list}
            isOpen={isOpen}
            index={index}
          />
        </Reveal>
      ))}
    </>
  );
};

export default ConcernExpertiseContainer;
