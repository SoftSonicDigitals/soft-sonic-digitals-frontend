"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({
  searchQueryHandler,
}: {
  searchQueryHandler: (query: string) => void;
}) => {
  const searchref = useRef<HTMLInputElement | null>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onSearchSubmit = () => {
    const params = new URLSearchParams(searchParams);
    params.set("query", searchref.current?.value!);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex mb-4 ">
      <div className="flex-center border-[1px] cursor-pointer py-2 px-3">
        <input
          placeholder="Search"
          className="  w-64  outline-0"
          ref={searchref}
          defaultValue={searchParams.get("query")?.toString()}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key == "Enter" ? onSearchSubmit() : null;
          }}
        />
        <button onClick={() => onSearchSubmit()}>
          <IoIosSearch className="w-[24px] h-[24px] text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
