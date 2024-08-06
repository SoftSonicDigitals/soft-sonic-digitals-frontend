"use client";
import React from "react";
import ClientTableRow from "./ClientTableRow";
import useSWR from "swr";
import { getClients } from "@/actions";

const ClientTableBody = () => {
  const clients = [
    {
      clientId: "SC001",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
    {
      clientId: "SC002",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
    {
      clientId: "SC003",
      name: "Olivia Rhye",
      email: "olivia@untitleui.com",
      plan: "Plan A",
      service: "2024-08-01",
      mobile: "Tag 1",

      status: "Active",
    },
    {
      clientId: "SC004",
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
          clientId={client.clientId}
        />
      ))}
    </tbody>
  );
};

export default ClientTableBody;
