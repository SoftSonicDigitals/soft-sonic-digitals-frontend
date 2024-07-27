import { getClientInfo } from "@/actions";
import { ClientDetailsTable, TagsContainer } from "@/components/Dashboard";
import { PriorityKey, StatusKey } from "@/models/dashboard";

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
      <div className="wrapper_container pt-32">
        <div className="text-4xl mb-10">Project Details</div>
        {clientInfo && (
          <TagsContainer
            priority={clientInfo.priority as PriorityKey}
            status={clientInfo.status as StatusKey}
            id={clientInfo.id}
          />
        )}
        <ClientDetailsTable clientInfo={clientInfo} />
      </div>
    </>
  );
};

export default page;
