"use client";
import React from "react";
import { PrimaryButton } from "../Reusable";

const RequestProposalBtn = () => {
  return (
    <button
      className="hidden md:block fixed right-0 top-1/2 translate-x-1/2 -rotate-90 mr-5 px-5 py-2.5 hover:border-orange hover:border-[2px]  text-white tracking-wider  font-[700] rounded   hover:text-orange hover:bg-none   hover:bg-white bg-gradient-to-r from-orange to-pink
    "
    >
      REQUEST FOR PROPOSAL
    </button>
  );
};

export default RequestProposalBtn;
