import Image from "next/image";
import React from "react";

const B2BCommerceBanner = () => {
  return (
    <section id="b2b_commerce_banner" className="bg-orange-100">
      <div className="wrapper_container">
        <div className="flex-center gap-10">
          <Image
            src="/b2b/b2b_commerce.png"
            alt="commerce service banner"
            width={364}
            height={302}
            style={{ objectFit: "contain" }}
            className="relative -top-12 left-8 "
          />
          <div>
            <p className="text-3xl font-[600] text-gray-800">
              Are you ready to take your business to next level? Avail our B2B
              commerce services now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BCommerceBanner;
