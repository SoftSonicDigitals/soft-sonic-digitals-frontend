import { getClientInfo } from "@/actions";
import { ClientDetailsTable, DashboardNav } from "@/components/Dashboard";
import Link from "next/link";

import React from "react";

const page = async ({
  params: { clientId },
}: {
  params: {
    clientId: string;
  };
}) => {
  const clientInfo = await getClientInfo(clientId);

  return (
    <>
      <DashboardNav />
      <div className="wrapper_container pt-32">
        <div className="text-4xl mb-10">Project Details</div>
        <ClientDetailsTable clientInfo={clientInfo} />
      </div>
    </>
  );
};

export default page;
