import React from "react";

type FeatureItemProps = {
  title: string;
  description: string;
};
const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className="mb-3 last:mb-0 ">
      <p className="text-lg font-[700] mb-1 tracking-wide">{title}</p>
      <p className="leading-2 trackig-wide">{description}</p>
    </div>
  );
};

export default FeatureItem;
