import React from "react";

const page = ({
  params: { clientId },
}: {
  params: {
    clientId: string;
  };
}) => {
  return <div>{clientId}</div>;
};

export default page;
