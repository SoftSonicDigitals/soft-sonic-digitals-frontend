import { CLIENTS } from "@/prototypes/clients";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section id="clients">
      <div className="wrapper_container">
        <div className="grid grid-cols-4">
          {CLIENTS.map(({ id, imgPath }) => (
            <div key={id} className="relative w-[288px] h-[88px] m-6">
              <Image fill src={`/clients/${imgPath}`} alt="client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
