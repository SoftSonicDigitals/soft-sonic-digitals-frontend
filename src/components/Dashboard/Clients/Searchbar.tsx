"use client";

import React, { RefObject, useRef } from "react";
import { IoSearch } from "react-icons/io5";
const Searchbar = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const onSearchSubmit = () => {
    console.log(searchRef.current?.value);
  };

  return (
    <div className="py-2.5 px-4 border-[1.5px] border-gray-200 flex sm:items-center sm:justify-center gap-3 max-w-full sm:max-w-68">
      <IoSearch
        className="text-lg cursor-pointer
      "
        onClick={() => onSearchSubmit()}
      />
      <input
        ref={searchRef}
        placeholder="Search"
        className="w-64  outline-none border-gray-300 text-sm font-[600] text-gray-700"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          e.key == "Enter" ? onSearchSubmit() : null;
        }}
      />
    </div>
  );
};

export default Searchbar;
