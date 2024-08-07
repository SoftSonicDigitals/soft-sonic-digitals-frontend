import React from "react";

const ClientTableHead = () => {
  return (
    <thead className="w-full border-b">
      <tr className="text-sm font-[700]">
        <th className="py-2 px-4 min-w-72  text-left tracking-wide">
          Customers
        </th>

        <th className="py-2 px-4 min-w-36  text-left tracking-wide">Mobile</th>
        <th className="py-2 px-4 min-w-36  text-left tracking-wide">Service</th>
        <th className="py-2 px-4 min-w-36  text-left tracking-wide hidden md:block">
          Address
        </th>
        <th className="py-2 px-4  min-w-36  text-left tracking-wide">Tags</th>
      </tr>
    </thead>
  );
};

export default ClientTableHead;
