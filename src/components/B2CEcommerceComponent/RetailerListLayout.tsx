import React from "react";
type RetailerListLayoutProps = {
  title: string;
  list: { title: string; description: string }[];
};
const RetailerListLayout = ({ title, list }: RetailerListLayoutProps) => {
  return (
    <div className="border-l-2 border-gray-700 pl-8  py-3 tracking-wide mb-10">
      <h3 className="text-4xl font-[700] text-gray-800">{title}</h3>
      <div className="mt-8">
        {list.map(({ title, description }, index) => (
          <div key={index} className="mb-3">
            <p className="text-2xl font-[700] text-gray-800 mb-1">{title}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetailerListLayout;
