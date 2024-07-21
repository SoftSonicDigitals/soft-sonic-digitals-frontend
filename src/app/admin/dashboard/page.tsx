import { ClientTables, SideNavbar } from "@/components/Dashboard";
import React from "react";

const page = () => {
  return (
    <>
      <SideNavbar />
      <div className="ml-20">
        <ClientTables />
      </div>
    </>
  );
};

export default page;
