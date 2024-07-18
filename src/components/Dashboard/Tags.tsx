import React from "react";
import EditTagMenu from "./EditTagMenu";
import { Tags as TagsType } from "@/models/dashboard";

const Tags = ({ priority, status, id }: TagsType) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div>
        <div
          className="inline-block px-3 py-2 rounded-xl  
      text-sm font-[700] tracking-wider text-white bg-[#F57C00] mr-3 capitalize"
        >
          {priority}
        </div>

        <div className="inline-block px-3 py-2 rounded-xl text-sm  font-[700] tracking-wider text-white bg-[#D32F2F] capitalize">
          {status}
        </div>
      </div>
      <EditTagMenu priority={priority} status={status} id={id} />
    </div>
  );
};

export default Tags;
