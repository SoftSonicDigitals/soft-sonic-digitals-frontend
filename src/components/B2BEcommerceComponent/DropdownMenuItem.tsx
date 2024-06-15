import Image from "next/image";
import React, { Fragment } from "react";
import { FaPlus } from "react-icons/fa6";
type DropdownMenuItemProps = {
  toggleItem: (index: number) => void;
  isItemOpen: (selected: number | null, index: number) => boolean;
  index: number;
  title: string;
  description: string;
  selectedItem: number | null;
  iconPath?: string;
};

const DropdownMenuItem = ({
  toggleItem,
  isItemOpen,
  selectedItem,
  index,
  title,
  description,
  iconPath,
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
          className="relative max-w-[527px] xl:max-w-[587px]  mx-5 lg:mx-0 px-12 py-6 lg:px-24 lg:py-12 shadow-lg border-l-4 border-gray-800 mb-8 cursor-pointer "
          onClick={() => toggleItem(index)}
        >
          {iconPath && (
            <div className="absolute top-6 left-3 sm:top-5 sm:left-3 lg:top-10 lg:left-10">
              <div className="relative w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] lg:w-[40px] lg:h-[40px]">
                <Image src={iconPath} alt="title" fill />
              </div>
            </div>
          )}

          <p className="text-xl font-[700] mb-3">{title}</p>

          <p className="text-sm lg:text-base">{description}</p>
        </div>
      )}
    </Fragment>
  );
};

export default DropdownMenuItem;
