import { ADDRESS, CALL_US, CONTACT_US } from "@/constants/contact_page";
import Image from "next/image";
import React from "react";
type ContactInfoType = {
  image: string;
  name: string;
  email: string;
  contactNo: string;
  address: string;
};
const ContactInfo = ({
  image,
  name,
  email,
  contactNo,
  address,
}: ContactInfoType) => {
  return (
    <div className="flex items-center justify-center lg:items-start flex-col md:flex-row gap-8 text-gray-900 px-6 sm:px-16  mb-24">
      <Image
        src={`/contact_page/${image}`}
        alt={`${name}`}
        width={540}
        height={540}
        style={{ objectFit: "contain" }}
      />

      <div className="flex flex-col gap-8 max-w-[540px] mt-4">
        <div className="relative">
          <h3 className="text-xl sm:text-2xl lg:text-3xl capitalize font-[600] tracking-wide pb-3 ">
            {name}
          </h3>
          <div className="absolute h-[3px] w-[40px] bg-gradient-to-r from-orange to-pink bottom-0" />
        </div>
        <div>
          <p className="contact_headings">{CONTACT_US}</p>
          <p className="contact_info">{email}</p>
        </div>
        <div>
          <p className="contact_headings">{CALL_US}</p>
          <p className="contact_info">{contactNo}</p>
        </div>
        <div>
          <p className="contact_headings">{ADDRESS}</p>
          <p className="contact_info">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
