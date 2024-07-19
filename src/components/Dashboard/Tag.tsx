import React from "react";

const Tag = ({ tagName, color }: { tagName: string; color: string }) => {
  return (
    <div
      className="inline-block px-3 py-2 rounded-xl  
text-sm font-[700] tracking-wider text-white mr-3 capitalize"
      style={{ backgroundColor: `${color}` }}
    >
      {tagName}
    </div>
  );
};

export default Tag;
