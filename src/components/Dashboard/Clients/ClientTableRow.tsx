import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

type ClientTableRowProps = {
  id: string;
  email: string;
  name: string;
  service: string;
  mobile: string;
  address_line: string;
  postcode: string;
  state: string;
  priority: string;
  status: string;
};
const ClientTableRow = ({
  id,
  email,
  name,
  service,
  mobile,
  address_line,
  postcode,
  state,
  priority,
  status,
}: ClientTableRowProps) => {
  const formattedAddress = [address_line, postcode, state]
    .filter(Boolean)
    .join(", ");

  return (
    <tr className="hover:bg-black-200 transition duration-300 hover:text-white border-b ">
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
      <td className="py-2 px-4 text-left text-sm">{mobile}</td>
      <td className="py-2 px-4 text-left  text-sm">{service}</td>
      <td className="py-2 px-4 text-left   text-sm">
        {formattedAddress || "-"}
      </td>
      <td className="py-2 px-4 text-left ">
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
