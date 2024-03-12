import { TESTIMONIALS } from "@/prototypes/testimonials";
import Image from "next/image";
import React from "react";
const Testimony = () => {
  return (
    <div>
      <div>
        <Image
          src={`/testimonials/${TESTIMONIALS[0].thumbnail}`}
          alt="testimony"
          width={752}
          height={416}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <h1>{TESTIMONIALS[0].name}</h1>
        <p>{TESTIMONIALS[0].position}</p>
      </div>
    </div>
  );
};

export default Testimony;
