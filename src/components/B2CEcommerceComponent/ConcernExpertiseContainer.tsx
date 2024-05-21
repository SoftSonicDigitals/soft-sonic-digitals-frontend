"use client";
import { CONCERNS_AND_GOALS } from "@/prototypes/b2c";
import React from "react";
import RetailerListLayout from "./RetailerListLayout";
import useDropDown from "@/hooks/useDropDown";

const ConcernExpertiseContainer = () => {
  const { selected, toggle, isOpen } = useDropDown();
  return (
    <>
      {CONCERNS_AND_GOALS.map((listItem, index) => (
        <RetailerListLayout
          key={index}
          title={listItem.title}
          list={listItem.list}
        />
      ))}
    </>
  );
};

export default ConcernExpertiseContainer;
