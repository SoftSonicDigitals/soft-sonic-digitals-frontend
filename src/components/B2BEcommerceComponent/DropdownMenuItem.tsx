import React, { Fragment } from "react";
import { FaPlus } from "react-icons/fa6";
type DropdownMenuItemProps = {
  toggleItem: (index: number) => void;
  isItemOpen: (selected: number | null, index: number) => boolean;
  index: number;
  title: string;
  description: string;
  selectedItem: number | null;
};

const DropdownMenuItem = ({
  toggleItem,
  isItemOpen,
  selectedItem,
  index,
  title,
  description,
}: DropdownMenuItemProps) => {
  return (
    <Fragment>
      {!isItemOpen(selectedItem, index) && (
        <div
          className={`flex item-center px-6 lg:pl-12 gap-8 mb-20 last:mb-0  xl:w-[587px] cursor-pointer `}
          onClick={() => toggleItem(index)}
        >
          <div className="flex-center">
            <FaPlus className="text-lg" />
          </div>
          <p className="text-xl font-[700]">{title}</p>
        </div>
      )}

      {isItemOpen(selectedItem, index) && (
        <div
          className="max-w-[527px] xl:max-w-[587px]  mx-5 lg:mx-0 px-12 py-6 lg:px-24 lg:py-12 shadow-lg border-l-4 border-gray-800 mb-8 cursor-pointer "
          onClick={() => toggleItem(index)}
        >
          <p className="text-xl font-[700] mb-3">{title}</p>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      )}
    </Fragment>
  );
};

export default DropdownMenuItem;
