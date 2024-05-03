import Image from "next/image";
import React from "react";

const SpecializationTiles = () => {
  return (
    <section>
      <div className="wrapper_container flex-center gap-10 mb-24">
        <div className="flex flex-center  flex-col px-2.5 py-10 border-[1px] border-gray-600">
          <Image
            src="/industry/b2c.png"
            alt=""
            width={62}
            height={57}
            className="mb-4"
          />
          <p
            className="font-[600] text-base
           text-gray-800"
          >
            For B2C Business Model
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecializationTiles;
