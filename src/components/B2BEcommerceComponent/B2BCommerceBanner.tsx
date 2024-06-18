import Image from "next/image";
import React from "react";

const B2BCommerceBanner = () => {
  return (
    <section id="b2b_commerce_banner">
      <Image
        src="/b2b/b2b_commerce.png"
        alt="commerce service banner"
        width={364}
        height={302}
        style={{ objectFit: "contain" }}
        className="-mt-14"
      />
    </section>
  );
};

export default B2BCommerceBanner;
