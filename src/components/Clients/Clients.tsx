import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section id="clients">
      <div className="wrapper_container">
        <div className="relative w-[288px] h-[88px] m-6">
          <Image fill src="/clients/neom.pngw3.webp" alt="client logo" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
