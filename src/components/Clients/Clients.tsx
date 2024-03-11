import { CLIENTS } from "@/prototypes/clients";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section id="clients">
      <div className="wrapper_container mb-24 md:px-16 lg:px-0 2xl:px-16 3xl:px-[2.8rem]">
        <div className="rule_grid grid grid-cols-4 overflow-hidden">
          {CLIENTS.map(({ id, imgPath }) => (
            <div key={id} className="card py-3 md:py-4">
              <Image
                width={288}
                height={88}
                src={`/clients/${imgPath}`}
                alt="client logo"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
