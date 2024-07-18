import React from "react";
import { BsTags } from "react-icons/bs";

import { Button } from "../ui/button";

import { FormDropDownOption } from "../ContactPage";
import { DialogDescription } from "@radix-ui/react-dialog";
import { PRIORITY_TAGS, STATUS_TAGS } from "@/prototypes/dashboard";
import EditTagMenu from "./EditTagMenu";

const Tags = () => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div>
        <div
          className="inline-block px-3 py-2 rounded-xl  
      text-sm font-[700] tracking-wider text-white bg-[#F57C00] mr-3"
        >
          Critical
        </div>

        <div className="inline-block px-3 py-2 rounded-xl text-sm  font-[700] tracking-wider text-white bg-[#D32F2F]">
          Urgent
        </div>
      </div>
      <EditTagMenu />
    </div>
  );
};

export default Tags;
