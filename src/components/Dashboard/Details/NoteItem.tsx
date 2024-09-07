import React from "react";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { format } from "date-fns";
import { CaptureDateFormats } from "@/constants/admin";

type NoteItemProps = {
  createdBy: string;
  noteText: string;
  createdAt: string;
};
const NoteItem = ({ createdBy, noteText, createdAt }: NoteItemProps) => {
  const formattedDate = format(new Date(createdAt), CaptureDateFormats.date);
  const formattedTime = format(new Date(createdAt), CaptureDateFormats.time);

  const today = new Date().toISOString().split("T")[0];
  const noteCreationDate = new Date(createdAt).toISOString().split("T")[0];

  const displayDateTime = `${
    today === noteCreationDate ? "Today" : formattedDate
  } at ${formattedTime}`;
  return (
    <div className="border mb-4 ">
      <div className="border-b p-5 flex items-center justify-between">
        <div className="flex-center gap-3">
          <div className="p-2 bg-gray-100 rounded-full">
            <MdOutlineStickyNote2 className="text-[#5e89e6]" />
          </div>
          <p className="text-sm">
            <span className="font-[700] text-gray-700">Note</span> by{" "}
            <span className="font-[700] text-gray-700">{createdBy}</span>
          </p>
        </div>

        <div className="flex-center gap-3">
          <div className="flex-center gap-2">
            <HiOutlineCalendar className="text-gray-400" />
            <p className="text-sm font-[700] text-gray-700">
              {displayDateTime}
            </p>
          </div>

          <BsThreeDots className="cursor-pointer text-gray-400" />
        </div>
      </div>
      <div className="p-5 text-gray-500 font-[600] text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cumque
        excepturi, tenetur quasi rerum magni! Exercitationem ipsum, corporis
        debitis ratione, officiis veritatis, dignissimos sequi quis aut harum id
        mollitia! Suscipit iure ad magni molestias laudantium a ex voluptatibus
        minima sint!
      </div>
    </div>
  );
};

export default NoteItem;
