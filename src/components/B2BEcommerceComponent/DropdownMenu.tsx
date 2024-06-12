import { B2B_PORTAL_LIST } from "@/prototypes/b2b";
import React from "react";
import { FaPlus } from "react-icons/fa6";
B2B_PORTAL_LIST;
const DropdownMenu = () => {
  return (
    <div>
      <div className="flex item-center justify-start pl-12 gap-8">
        <FaPlus />
        <p className="text-xl font-[700]">{B2B_PORTAL_LIST[0].title}</p>
      </div>
      <div className="w-[587px] px-24 py-12 shadow-md border-l-4 border-gray-800">
        <p className="text-xl font-[700]">{B2B_PORTAL_LIST[0].title}</p>
        We can create a sophisticated B2B portal for you that includes pre-built
        capabilities like the ability for users to make purchase orders, access
        and subscribe to your services, submit service requests, exchange
        feedback, manage corporate accounts, and access catalogues and
        account-based pricing.
      </div>
    </div>
  );
};

export default DropdownMenu;
