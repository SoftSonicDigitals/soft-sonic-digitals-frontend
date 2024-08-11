"use client";
import React from "react";
import ClientTableRow from "./ClientTableRow";
import { Clients } from "@/models/admin";

const ClientTableBody = ({
  isLoading,
  clients,
}: {
  isLoading: boolean;
  clients: Clients[];
}) => {
  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan={5}>
            <div className="flex-center m-10">
              <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-black" />
            </div>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {!isLoading &&
        clients.map((client) => (
          <ClientTableRow
            key={client.id}
            id={client.id}
            email={client.email}
            name={client.name}
            service={client.service}
            mobile={client.mobile}
            address_line={client.address_line}
            postcode={client.postcode}
            state={client.state}
            priority={client.priority}
            status={client.status}
          />
        ))}
    </tbody>
  );
};

export default ClientTableBody;
