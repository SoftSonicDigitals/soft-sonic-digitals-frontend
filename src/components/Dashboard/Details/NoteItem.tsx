import React from "react";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const NoteItem = () => {
  return (
    <div className="border mb-4 ">
      <div className="border-b p-5 flex items-center justify-between">
        <div className="flex-center gap-3">
          <div className="p-2 bg-gray-100 rounded-full">
            <MdOutlineStickyNote2 className="text-[#5e89e6]" />
          </div>
          <p className="text-sm">
            <span className="font-[700] text-gray-700">Note</span> by{" "}
            <span className="font-[700] text-gray-700">Esther Howard</span>
          </p>
        </div>

        <div className="flex-center gap-3">
          <div className="flex-center gap-2">
            <HiOutlineCalendar className="text-gray-400" />
            <p className="text-sm font-[700] text-gray-700"> Today, 10:00 AM</p>
          </div>

          <BsThreeDots className="cursor-pointer text-gray-400" />
        </div>
      </div>
      <div className="p-5 text-gray-500 font-[600] text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        perspiciatis ipsum corporis reiciendis deserunt! Reiciendis deserunt
        obcaecati rem vitae tempora? Velit dignissimos voluptatibus, cum
        voluptate laborum suscipit. Minus, inventore velit enim dolorum, ratione
        maiores tenetur id optio quia qui et!
      </div>
    </div>
  );
};

export default NoteItem;
