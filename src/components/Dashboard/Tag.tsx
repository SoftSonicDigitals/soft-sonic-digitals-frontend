import React from "react";

const Tag = ({
  tagName,
  color,
  variant = "large",
}: {
  tagName: string;
  color: string;
  variant?: "small" | "large";
}) => {
  const styles = variant === "small" ? " text-xs  mr-2" : "text-sm  mr-3";
  return (
    <div
      className={`inline-block rounded-xl  
 font-[700] tracking-wider text-white capitalize last:mr-0 px-3 py-2 ${styles}`}
      style={{ backgroundColor: `${color}` }}
    >
      {tagName}
    </div>
  );
};

export default Tag;
