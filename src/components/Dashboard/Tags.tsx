import React from "react";

const Tags = () => {
  return (
    <div className="mb-8">
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
  );
};

export default Tags;
