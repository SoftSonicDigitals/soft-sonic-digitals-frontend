import { CLIENTS_PROMO_HEADING } from "@/constants/contact_page";
import { CLIENTS } from "@/prototypes/clients";
import Image from "next/image";
import React from "react";

const ContactClients = () => {
  return (
    <div className=" max-w-[555px]  px-4 md:px-[10%]  lg:pl-8 lg:pr-0 basis-full">
      <h3 className="text-xl text-center font-[500] tracking-wider mb-10">
        {CLIENTS_PROMO_HEADING}
      </h3>
      <div className="grid items-center justify-center grid-cols-4 gap-y-8  ">
        {CLIENTS.map(({ id, imgName }) => (
          <Image
            key={id}
            src={`/clients/${imgName}`}
            alt={"client-logo"}
            width={188}
            height={50}
            className="py-2 hidden md:block"
          />
        ))}
      </div>
    </div>
  );
};

export default ContactClients;
