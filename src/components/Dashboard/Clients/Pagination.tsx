import React from "react";
import PaginationBtn from "./PaginationBtn";
import { usePathname, useSearchParams } from "next/navigation";
import { CLIENT_TABLE_LIMIT } from "@/constants/dashboard";

const Pagination = ({
  currentPage,
  totalCount,
}: {
  currentPage: number;
  totalCount: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const canNextPage = totalCount > currentPage * CLIENT_TABLE_LIMIT;
  const canPrevPage = currentPage > 1;
  const totalPage = Math.ceil(totalCount / CLIENT_TABLE_LIMIT);

  const onPagePrevNextHandler = (goTo: "next" | "prev") => {
    const params = new URLSearchParams(searchParams);
    params.set(
      "page",
      `${goTo === "next" ? currentPage + 1 : currentPage - 1}`
    );
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center mb-10 justify-between mx-6 font-[600]">
      <div>
        Page {currentPage} of {totalPage}
      </div>
      <div>
        <div className="flex-center gap-2.5 text-sm">
          <PaginationBtn
            direction="prev"
            prevNextHandler={onPagePrevNextHandler}
            canGoTo={canPrevPage}
          />
          <PaginationBtn
            direction="next"
            prevNextHandler={onPagePrevNextHandler}
            canGoTo={canNextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
