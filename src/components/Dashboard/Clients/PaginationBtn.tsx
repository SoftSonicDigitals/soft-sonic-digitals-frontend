"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PaginationBtn = ({
  direction,
  prevNextHandler,
  canGoTo,
}: {
  direction: "next" | "prev";
  prevNextHandler: (goTo: "next" | "prev") => string;
  canGoTo: boolean;
}) => {
  const router = useRouter();
  return (
    <button
      className={`border border-gray-500 rounded-md px-3 py-1.5 flex-center gap-2 hover:text-white hover:bg-black-200 transition ${
        !canGoTo ? "pointer-events-none bg-white-100" : ""
      }`}
      onClick={() => router.push(prevNextHandler(direction), { scroll: false })}
    >
      {direction === "next" ? (
        <>
          <span>Next</span>
          <FaArrowRight />
        </>
      ) : (
        <>
          <FaArrowLeft /> <span>Previous</span>
        </>
      )}
    </button>
  );
};

export default PaginationBtn;
