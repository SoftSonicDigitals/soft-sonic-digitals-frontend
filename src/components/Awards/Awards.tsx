import { AWARDS_HEADING } from "@/constants/awards";
import { AWARDS } from "@/prototypes/awards";
import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <section id="awards">
      <div className="wrapper_container pt-4 mb-24 flex-center flex-col">
        <h1 className="text-2xl lg:text-4xl font-[700] text-center mb-10 md:mb-16">
          {AWARDS_HEADING}
        </h1>

        <div className="max-w-[700px] lg:max-w-max">
          <div className="grid grid-cols-2 lg:grid-cols-3  flex-wrap gap-4  sm:gap-x-16 sm:gap-y-4 px-5 sm:px-3 lg:px-16 xl:px-12">
            {AWARDS.map(({ id, title, imageName }) => (
              <div
                key={id}
                className="flex-center m-2  md:mx-[3.4rem] lg:mx-12 md:my-6 xl:p-2.5"
              >
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
