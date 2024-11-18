"use client";
import { StatusTags } from "@/constants/admin";
import axios from "axios";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { mutate } from "swr";

const StatusContainer = ({ status }: { status: string }) => {
  const statusTagValue = Object.values(StatusTags);
  const [selectedStatus, setSelectedStatus] =
    useState<ValueOf<typeof StatusTags>>(status);
  const params = useParams();

  const statusSelectHandler = async (item: ValueOf<typeof StatusTags>) => {
    if (item === selectedStatus) {
      toast.error(`Status already ${item}`);
      return;
    }

    if (item !== StatusTags.NEW || selectedStatus === StatusTags.NEW) {
      setSelectedStatus(item);

      try {
        const result = await axios.patch(`/api/leads/${params.leadId}`, {
          status: item,
        });

        if (result.status === 200) {
          toast.success(`Status changed to ${item}`);
        }
      } catch (err: any) {
        console.log(err);
        toast.error(err.message);
      }

      // revalidate
      mutate(`/api/leads/${params.leadId}`);
    }
  };

  return (
    <section id="status" className="mb-6">
      <div className=" flex gap-1  items-center">
        {statusTagValue.map((item, index) => (
          <div
            key={index}
            onClick={() => statusSelectHandler(item)}
            className={`flex-center capitalize w-full py-2 max-w-[400px]  font-[500] tracking-wide min-w-fit
              hover:bg-green-700 hover:text-white ${
                selectedStatus === item
                  ? "bg-green-700 text-white "
                  : "bg-green-200 text-green-700"
              } transition  text-sm cursor-pointer `}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatusContainer;
