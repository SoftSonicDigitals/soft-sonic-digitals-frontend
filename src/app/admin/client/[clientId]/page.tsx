import { getClientInfo } from "@/actions";
import {
  ClientDetailsTable,
  DashboardNav,
  TagsContainer,
} from "@/components/Dashboard";

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
        {clientInfo && (
          <TagsContainer
            priority={clientInfo.priority}
            status={clientInfo.status}
            id={clientInfo.id}
          />
        )}
        <ClientDetailsTable clientInfo={clientInfo} />
      </div>
    </>
  );
};

export default page;
