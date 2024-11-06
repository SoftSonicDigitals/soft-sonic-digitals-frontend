"use client";
import { StatusTags } from "@/constants/admin";
import { ValueOf } from "next/dist/shared/lib/constants";
import React, { useMemo, useState } from "react";

const status = {
  status: "new",
};
const StatusContainer = () => {
  const statusTagValue = Object.values(StatusTags);
  const [selected, setSelected] = useState<ValueOf<typeof StatusTags>>(
    status.status
  );

  const statusSelectHandler = (item: ValueOf<typeof StatusTags>) => {
    if (item !== StatusTags.NEW || selected === StatusTags.NEW) {
      setSelected(item);
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
                selected === item
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
