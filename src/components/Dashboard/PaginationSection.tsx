import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationSectionProps = {
  canPrevPage: boolean;
  canNextPage: boolean;
  totalPage: number;
  currentPage: number;
};
const PaginationSection = ({
  canPrevPage,
  canNextPage,
  totalPage,
  currentPage,
}: PaginationSectionProps) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {canPrevPage ? (
            <PaginationPrevious
              href={`/admin/dashboard?page=${currentPage - 1}`}
              className="bg-gray-200 text-black pointer-events-auto"
            />
          ) : (
            <PaginationPrevious className="bg-gray-200 text-black pointer-events-none opacity-60 " />
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className=" mx-10"
            href={`/admin/dashboard?page=${currentPage}`}
          >
            Page {currentPage} of {totalPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          {canNextPage ? (
            <PaginationNext
              href={`/admin/dashboard?page=${currentPage + 1}`}
              className="bg-gray-200 text-black pointer-events-auto"
            />
          ) : (
            <PaginationNext className="bg-gray-200 text-black pointer-events-none opacity-60 " />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
