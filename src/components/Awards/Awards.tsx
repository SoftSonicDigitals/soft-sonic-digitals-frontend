import { AWARDS } from "@/prototypes/awards";
import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <section id="awards">
      <div className="wrapper_container pt-4 mb-24">
        <h1 className="text-2xl lg:text-4xl font-[700] text-center mb-10 md:mb-16">
          Awards & Recognitions
        </h1>

        <div>
          <div className="grid grid-cols-2 lg:grid-cols-3  flex-wrap gap-4 sm:gap-x-16 sm:gap-y-4 px-6 sm:px-3 lg:px-16 ">
            {AWARDS.map(({ id, title, imageName }) => (
              <div key={id} className="flex-center m-2  md:mx-16 md:my-6">
                <Image
                  src={`/awards/${imageName}`}
                  alt={`${title}`}
                  width={245}
                  height={232}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
