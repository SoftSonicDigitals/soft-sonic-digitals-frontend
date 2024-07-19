import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onPagePrevNextHandler = (goTO: "next" | "prev") => {
    const params = new URLSearchParams(searchParams);
    params.set(
      "page",
      `${goTO === "next" ? currentPage + 1 : currentPage - 1}`
    );
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          {canPrevPage ? (
            <PaginationPrevious
              href={onPagePrevNextHandler("prev")}
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
              href={onPagePrevNextHandler("next")}
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
