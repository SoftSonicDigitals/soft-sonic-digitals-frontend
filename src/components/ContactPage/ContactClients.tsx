import { CLIENTS } from "@/prototypes/clients";
import Image from "next/image";
import React from "react";

const ContactClients = () => {
  return (
    <div className="basis-full">
      <h3 className="text-xl text-center px-20 font-[500] tracking-wider mb-10">
        We love helping start-up become brand names and corporations launch new
        products
      </h3>
      <div className="grid items-center justify-center grid-cols-4 gap-y-8 px-8 2xl:px-16">
        {CLIENTS.map(({ id, imgName }) => (
          <Image
            key={id}
            src={`/clients/${imgName}`}
            alt={"logo"}
            width={188}
            height={50}
            className="py-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ContactClients;
