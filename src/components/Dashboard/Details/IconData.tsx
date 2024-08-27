import { ProfileInfoIcons } from "@/constants/admin";
import { ValueOf } from "next/dist/shared/lib/constants";
import React from "react";

type IconDataProps = {
  icon: ValueOf<typeof ProfileInfoIcons>;
  data?: string;
  styles?: string;
};
const IconData = ({ icon: Icon, data, styles }: IconDataProps) => {
  return (
    data &&
    data.length > 0 && (
      <div className={`${styles} flex md:justify-center  items-center gap-2`}>
        <Icon className="h-5 w-5 text-gray-700 font-[700]" />
        <p className="text-gray-700 font-[600] text-sm tracking-wide">
          {data}{" "}
        </p>
      </div>
    )
  );
};

export default IconData;
