import { ClientTables } from "@/components/Dashboard";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <>
      <ClientTables />
    </>
  );
};

export default page;
