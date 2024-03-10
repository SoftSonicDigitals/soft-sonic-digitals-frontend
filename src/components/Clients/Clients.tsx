import { CLIENTS } from "@/prototypes/clients";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section id="clients">
      <div className="wrapper_container mb-24">
        <div className="rule_grid">
          {CLIENTS.map(({ id, imgPath }) => (
            <div key={id} className="p-6 card">
              <div className="relative w-[288px] h-[88px] ">
                <Image fill src={`/clients/${imgPath}`} alt="client logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
