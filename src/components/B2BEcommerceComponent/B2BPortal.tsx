import Image from "next/image";
import React from "react";

const B2BPortal = () => {
  return (
    <section id="b2b_portal">
      <div className="wrapper_container mb-24">
        <div className="px-24">
          <h1 className="section_heading text-center mb-4">
            B2B portal development for a digital first world
          </h1>
          <p className="section_description text-center">
            We develop bespoke B2B portals that promote business partnerships
            between partners, assist in connecting vendors and clients, enable
            efficient self-service, and give users full assistance.
          </p>
        </div>
        <div className="flex-center">
          <div>list</div>
          <div>
            <Image
              src="/b2b/list.png"
              alt="list image"
              width={560}
              height={793}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BPortal;
