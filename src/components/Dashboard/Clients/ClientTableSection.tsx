import React from "react";
import Filters from "./Filters";
import Searchbar from "./Searchbar";
import ClientTableHead from "./ClientTableHead";
import ClientTableBody from "./ClientTableBody";

const ClientTableSection = () => {
  return (
    <section id="client_table">
      <div className="flex flex-col-reverse gap-4 sm:flex-row lg:items-center justify-between mb-10">
        <Filters />
        <Searchbar />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border-b-[1.5px] border-gray-300 ">
          <ClientTableHead />
          <ClientTableBody />
        </table>
      </div>
    </section>
  );
};

export default ClientTableSection;
