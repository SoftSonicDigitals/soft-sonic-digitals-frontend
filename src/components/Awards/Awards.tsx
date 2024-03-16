import { AWARDS } from "@/prototypes/awards";
import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <section id="awards">
      <div className="wrapper_container pt-4">
        <h1 className="text-4xl font-[700] text-center mb-16">
          Awards & Recognitions
        </h1>

        <div>
          <div className="flex item justify-between flex-wrap  gap-y-4  px-16 ">
            {AWARDS.map(({ id, title, imageName }) => (
              <div key={id} className=" mx-16 my-6">
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
