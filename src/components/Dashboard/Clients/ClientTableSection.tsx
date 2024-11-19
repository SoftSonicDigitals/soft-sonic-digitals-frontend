"use client";
import React from "react";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import ClientTableHead from "./ClientTableHead";
import ClientTableBody from "./ClientTableBody";
import useSWR from "swr";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";
import { fetcher } from "@/utils";
import { CLIENT_TABLE_LIMIT } from "@/constants/dashboard";

const ClientTableSection = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(Array.from(searchParams.entries()));

  const {
    data: leads,
    isLoading,
    error,
  } = useSWR(`/api/leads?${params.toString()}`, fetcher);

  return (
    <section id="client_table">
      <div
        className="flex gap-4 flex-col sm:flex-row lg:items-center mb-10 
      "
      >
        <Searchbar />
        <Filters />
      </div>
      <div className="overflow-x-auto mb-10">
        <table className="w-full bg-white border-b-[1.5px] border-gray-300 ">
          <ClientTableHead />
          <ClientTableBody
            isLoading={isLoading}
            clients={leads?.data.clients}
          />
        </table>
      </div>

      {!isLoading && (
        <Pagination
          limit={CLIENT_TABLE_LIMIT}
          currentPage={leads?.data.page}
          totalCount={leads?.data.totalCount}
        />
      )}
    </section>
  );
};

export default ClientTableSection;
