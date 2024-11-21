import React from "react";
import { format, formatDate } from "date-fns";
import { GoDotFill } from "react-icons/go";
import { LEAD_CAPTURED_DATE_TXT, CaptureDateFormats } from "@/constants/admin";
const CapturedDate = ({ date }: { date: Date }) => {
  const formattedDate = format(new Date(date), CaptureDateFormats.date);
  const formattedTime = format(new Date(date), CaptureDateFormats.time);

  const displayDateTime = `${formattedDate} at ${formattedTime}`;

  return (
    <div className="flex items-center gap-3">
      <GoDotFill className="text-green-700 text-sm" />
      <p className="text-gray-800 font-[500]">
        {LEAD_CAPTURED_DATE_TXT} : {displayDateTime}
      </p>
    </div>
  );
};

export default CapturedDate;
