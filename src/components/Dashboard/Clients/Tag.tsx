import React from "react";
type TagProps = {
  tagName: string;
  tagColor: string;
  tagTextColor: string;
};
const Tag = ({ tagName, tagColor, tagTextColor }: TagProps) => {
  return (
    <div
      className="inline-block text-xs px-3 py-1.5 rounded-full  font-[700]  capitalize min-w-fit"
      style={{ backgroundColor: `${tagColor}`, color: `${tagTextColor}` }}
    >
      {tagName}
    </div>
  );
};

export default Tag;
