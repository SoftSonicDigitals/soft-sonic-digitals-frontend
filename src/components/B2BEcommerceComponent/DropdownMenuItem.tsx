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
          className={`flex item-center pl-12 gap-8 mb-20  w-[587px] `}
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
          className="w-[587px] px-24 py-12 shadow-lg border-l-4 border-gray-800 mb-8 "
          onClick={() => toggleItem(index)}
        >
          <p className="text-xl font-[700] mb-3">{title}</p>
          {description}
        </div>
      )}
    </Fragment>
  );
};

export default DropdownMenuItem;
