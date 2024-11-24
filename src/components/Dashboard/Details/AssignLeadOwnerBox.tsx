"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { fetcher } from "@/utils";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import useSWR, { mutate } from "swr";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { UserDetails } from "@/models/admin";

const AssignLeadOwnerBox = ({ value }: { value: string }) => {
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<UserDetails[]>("/api/users", fetcher);

  const params = useParams();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [leadOwner, setLeadOwner] = useState(
    value?.length > 0 ? value : "Select"
  );

  const domeNode = useClickOutside(() => setIsDropdownOpen(false));

  const displayNameOrEmail = (user: UserDetails) => {
    return user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.email;
  };

  const assignHandler = async (user: UserDetails) => {
    setLeadOwner(() => displayNameOrEmail(user));
    setIsDropdownOpen(false);

    try {
      const result = await axios.patch(`/api/leads/${params.leadId}`, {
        // name is lead_owner cause the schema is lead_owner
        lead_owner: displayNameOrEmail(user),
      });

      if (result.status === 200) {
        toast.success(`Leadowner is ${displayNameOrEmail(user)}`);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }

    // revalidate
    mutate(`/api/leads/${params.leadId}`);
  };

  return (
    <div className=" p-6 bg-white h-full ">
      <h2 className="font-[600] text-sm text-gray-400 tracking-wide mb-2">
        Assigned to
      </h2>
      <div className="relative">
        <div id="lead owner" className="text-lg font-[600] border-none ">
          <button
            onClick={() => setIsDropdownOpen(true)}
            className="flex-center gap-2 focus:outline-none "
          >
            <div className="py-2  cursor-pointer flex items-center justify-center gap-2">
              {leadOwner !== "Select" && (
                <div className="p-1 bg-gray-600 rounded-full">
                  <FaUser className="text-white text-xs " />
                </div>
              )}
              <span className="capitalize">{leadOwner}</span>
            </div>
            <MdKeyboardArrowDown />
          </button>
        </div>

        {isDropdownOpen && (
          <div
            id="dropdownMenu"
            className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
            ref={domeNode}
          >
            {users &&
              users.map((user, index) => {
                return (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1"
                    onClick={() => assignHandler(user)}
                  >
                    <div className="p-2 bg-gray-600 rounded-full">
                      <FaUser className="text-white" />
                    </div>

                    <span className="capitalize">
                      {displayNameOrEmail(user)}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignLeadOwnerBox;
