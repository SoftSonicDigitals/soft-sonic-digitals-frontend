"use client";
import React, { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const searchref = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex mb-4 ">
      <div className="flex-center border-[1px] cursor-pointer py-2 px-3">
        <input
          placeholder="Search"
          className="  w-64  outline-0"
          ref={searchref}
          onChange={() => console.log(searchref.current?.value)}
        />
        <IoIosSearch className="w-[24px] h-[24px] text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
