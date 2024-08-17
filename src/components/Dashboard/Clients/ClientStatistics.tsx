import React from "react";
import StatsCard from "./StatsCard";
const ClientStatistics = () => {
  return (
    <section id="client_statistics" className="hidden md:block">
      <div className="grid grid-cols-1  lg:grid-cols-3 lg:gap-4 border-y-2 lg:border-y-0 mb-16">
        <StatsCard title={"Total Customers"} data={2140} change={20} />
        <StatsCard title={"Active Now"} data={300} change={20} />
        <StatsCard title={"Completed"} data={700} change={20} />
      </div>
    </section>
  );
};

export default ClientStatistics;
