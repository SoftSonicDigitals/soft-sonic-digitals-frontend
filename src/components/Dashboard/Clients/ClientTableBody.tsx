"use client";
import React from "react";
import ClientTableRow from "./ClientTableRow";

const ClientTableBody = () => {
  const clients = [
    {
      address: "SC001",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
    {
      address: "SC002",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
    {
      address: "SC003",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
    {
      address: "SC004",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
  ];

  return (
    <tbody>
      {clients.map((client, index) => (
        <ClientTableRow
          key={index}
          name={client.name}
          email={client.email}
          mobile={client.mobile}
          service={client.service}
          address={client.address}
        />
      ))}
    </tbody>
  );
};

export default ClientTableBody;
