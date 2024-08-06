import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

type ClientTableRowProps = {
  email: string;
  name: string;
  service: string;
  mobile: string;
  clientId: string;
};
const ClientTableRow = ({
  email,
  name,
  service,
  mobile,
  clientId,
}: ClientTableRowProps) => {
  return (
    <tr className="hover:bg-black-200 transition duration-300 hover:text-white border-b">
      <td className="py-3.5 px-4  text-left">
        <div className="flex items-center gap-5 ">
          <div className="p-2.5 rounded-full bg-gray-200">
            <FiUser className="h-6 w-6" />
          </div>
          <div>
            <p className="font-[700]">{name}</p>
            <p className="text-sm font-gray-700 font-[600] text-[#E03131]">
              {email}
            </p>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 text-left">{clientId}</td>
      <td className="py-2 px-4 text-left">{service}</td>
      <td className="py-2 px-4 text-left">{mobile}</td>
      <td className="py-2 px-4 text-left">
        <div className="inline-block text-xs px-3 py-1.5 rounded-full bg-[#c3c7f8] font-[700] text-[#4e5dff]">
          Active
        </div>
      </td>
      <td className="py-2 px-4 text-left w-6">
        <BsThreeDotsVertical />
      </td>
    </tr>
  );
};

export default ClientTableRow;
