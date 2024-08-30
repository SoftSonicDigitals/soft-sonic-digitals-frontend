import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Tag from "./Tag";
import {
  PRIORITY_TAGS_COLORS,
  STATUS_TAGS_COLORS,
} from "@/prototypes/dashboard";
import { PriorityKey } from "@/models/admin";
import { useRouter } from "next/navigation";
import { ValueOf } from "next/dist/shared/lib/constants";
import { StatusTags } from "@/constants/admin";

type ClientTableRowProps = {
  id: string;
  email: string;
  name: string;
  service: string;
  mobile: string;
  address_line: string;
  postcode: string;
  state: string;
  priority: PriorityKey;
  status: ValueOf<typeof StatusTags>;
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
  const router = useRouter();
  const formattedAddress = [address_line, postcode, state]
    .filter(Boolean)
    .join(", ");

  return (
    <tr
      className="hover:bg-black-200 transition duration-300 hover:text-white border-b "
      onClick={() => {
        router.push(`/admin/leads/${id}`);
      }}
    >
      <td className="py-3.5 px-4  text-left">
        <div className="flex items-center gap-5 ">
          <div className="p-2.5 rounded-full bg-gray-200">
            <FiUser className="h-6 w-6" />
          </div>
          <div>
            <p className="font-[700]">{name}</p>
            <p className="text-sm font-gray-700 font-[600] text-red-300">
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
        <div className="flex items-center gap-2 ">
          <Tag
            tagName={priority}
            tagColor={PRIORITY_TAGS_COLORS[`${priority}`]?.tagColor}
            tagTextColor={PRIORITY_TAGS_COLORS[`${priority}`]?.tagTextColor}
          />
          <Tag
            tagName={status}
            tagColor={STATUS_TAGS_COLORS[`${status}`]?.tagColor}
            tagTextColor={STATUS_TAGS_COLORS[`${status}`]?.tagTextColor}
          />
        </div>
      </td>
      <td className="py-2 px-4 text-left w-6">
        <BsThreeDotsVertical />
      </td>
    </tr>
  );
};

export default ClientTableRow;
