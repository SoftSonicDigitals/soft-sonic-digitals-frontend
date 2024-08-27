"use client";
import React from "react";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import ClientTableHead from "./ClientTableHead";
import ClientTableBody from "./ClientTableBody";
import useSWR from "swr";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientTableSection = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { data, isLoading, error } = useSWR(
    `/api/leads?${params.toString()}`,
    fetcher
  );

  return (
    <section id="client_table">
      <div
        className="flex gap-4 sm:flex-row lg:items-center mb-10 
      "
      >
        <Searchbar />
        <Filters />
      </div>
      <div className="overflow-x-auto mb-10">
        <table className="w-full bg-white border-b-[1.5px] border-gray-300 ">
          <ClientTableHead />
          <ClientTableBody isLoading={isLoading} clients={data?.data.clients} />
        </table>
      </div>

      {!isLoading && (
        <Pagination
          currentPage={data?.data.page}
          totalCount={data?.data.totalCount}
        />
      )}
    </section>
  );
};

export default ClientTableSection;
