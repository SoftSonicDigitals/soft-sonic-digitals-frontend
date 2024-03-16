import { AWARDS } from "@/prototypes/awards";
import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <section id="awards">
      <div className="wrapper_container">
        <h1>Awards & Recognitions</h1>

        <div>
          <div className="flex-center flex-wrap">
            {AWARDS.map(({ id, title, imageName }) => (
              <div key={id}>
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
