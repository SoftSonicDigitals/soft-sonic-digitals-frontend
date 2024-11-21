"use client";

import { PriorityTags } from "@/constants/admin";
import { useClickOutside } from "@/hooks/useClickOutside";
import { PRIORITY_TAGS_COLORS } from "@/prototypes/dashboard";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSWRConfig } from "swr";

const priorityOptions = [
  {
    label: PriorityTags.LOW,
    color: PRIORITY_TAGS_COLORS[PriorityTags.LOW].tagColor,
  },
  {
    label: PriorityTags.MEDIUM,
    color: PRIORITY_TAGS_COLORS[PriorityTags.MEDIUM].tagColor,
  },
  {
    label: PriorityTags.HIGH,
    color: PRIORITY_TAGS_COLORS[PriorityTags.HIGH].tagColor,
  },
];

const PriorityInfoBox = ({ value }: { value: string }) => {
  const [selectedPriority, setSelectedPriority] = useState<{
    label: string;
    color: null | string;
  }>({
    label: value.length > 0 ? value.trim() : "Select",
    color:
      value.length > 0 ? PRIORITY_TAGS_COLORS[value.trim()]?.tagColor : null,
  });

  const { mutate } = useSWRConfig();
  const params = useParams();

  // states
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // for closing menu when clicked outside
  const domeNode = useClickOutside(() => setIsDropdownOpen(false));

  // handler for selecetion
  const selectPriorityHandler = async (priority: {
    label: string;
    color: string;
  }) => {
    setSelectedPriority(() => priority);
    setIsDropdownOpen(false);
    try {
      const result = await axios.patch(`/api/leads/${params.leadId}`, {
        priority: priority.label,
      });

      if (result.status === 200) {
        toast.success(`Priority  ${priority.label}.`);
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
        Task Priority
      </h2>
      <div className="relative">
        <div id="priority" className="text-lg font-[600] border-none ">
          <button
            onClick={() => setIsDropdownOpen(true)}
            className="flex-center gap-2 focus:outline-none "
          >
            <div className="py-2  cursor-pointer flex items-center gap-1">
              {selectedPriority.color && (
                <span
                  className="w-5 h-5 rounded-sm mr-2"
                  style={{ backgroundColor: `${selectedPriority.color}` }}
                ></span>
              )}
              <span className="capitalize">{selectedPriority.label}</span>
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
            {priorityOptions
              .filter(
                (item) => item.label !== selectedPriority.label.toLowerCase()
              )
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-1"
                    onClick={() => selectPriorityHandler(item)}
                  >
                    <span
                      className="w-5 h-5 rounded-sm mr-2"
                      style={{ backgroundColor: `${item.color}` }}
                    ></span>
                    <span className="capitalize">{item.label}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PriorityInfoBox;
