import React from "react";
import Filters from "./Filters";
import Searchbar from "./Searchbar";

const ClientTable = () => {
  return (
    <section id="client_tables">
      <div className="flex flex-col-reverse gap-4 sm:flex-row lg:items-center justify-between mb-4">
        <Filters />
        <Searchbar />
      </div>
    </section>
  );
};

export default ClientTable;
