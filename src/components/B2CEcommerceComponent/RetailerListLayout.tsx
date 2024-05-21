import React from "react";

type RetailerListLayoutProps = {
  title: string;
  list: { title: string; description: string }[];
  selected: number | null;
  toogle: (index: number) => void;
  isOpen: (selected: number | null, index: number) => boolean;
  index: number;
};
const RetailerListLayout = ({
  title,
  list,
  toogle: toogleMenu,
  selected: selectedMenu,
  isOpen: isMenuOpen,
  index,
}: RetailerListLayoutProps) => {
  return (
    <div
      className="border-l-2 border-gray-700 pl-8  py-1  md:py-3 tracking-wide mb-6 md:mb-10 ml-1"
      onClick={() => toogleMenu(index)}
    >
      <h3
        className={`text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-[700] ${
          isMenuOpen(selectedMenu, index) ? "text-gray-800" : "text-gray-700"
        }`}
      >
        {title}
      </h3>
      {isMenuOpen(selectedMenu, index) && (
        <div className="mt-8">
          {list.map(({ title, description }, index) => (
            <div key={index} className="mb-3">
              <p className="text-base md:text-xl lg:text-2xl font-[700] text-gray-800 mb-1">
                {title}
              </p>
              <p className="text-sm md:text-base">{description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RetailerListLayout;
