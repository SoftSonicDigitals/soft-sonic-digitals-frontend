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

const AssignLeadOwnerBox = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<
    {
      firstName: string | null;
      lastName: string | null;
      email: string | null;
    }[]
  >("/api/users", fetcher);

  const params = useParams();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [leadOwner, setLeadOwner] = useState();

  const domeNode = useClickOutside(() => setIsDropdownOpen(false));

  const assignHandler = async (user: any) => {
    setLeadOwner(() => user);
    setIsDropdownOpen(false);
    try {
      const result = await axios.patch(`/api/leads/${params.leadId}`, {
        leadOwner: user,
      });

      if (result.status === 200) {
        toast.success(`Leadowner is  ${user.firstName} ${user.lastName}`);
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
            <div className="py-2  cursor-pointer flex items-center gap-1">
              <span className="capitalize">{"Esther Howard"}</span>
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
              users.map((item, index) => {
                console.log(item);
                return (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1"
                    onClick={() => assignHandler(item)}
                  >
                    <div className="p-2 bg-gray-600 rounded-full">
                      <FaUser className="text-white" />
                    </div>

                    <span className="capitalize">
                      {item.firstName && item.lastName
                        ? `${item.firstName} ${item.lastName}`
                        : item.email}
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
