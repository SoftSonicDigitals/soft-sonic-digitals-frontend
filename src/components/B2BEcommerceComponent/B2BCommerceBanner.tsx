import Image from "next/image";
import React from "react";
import { ContactUs } from "../Navbar";

const B2BCommerceBanner = () => {
  return (
    <section id="b2b_commerce_banner" className="bg-orange-100 mb-24">
      <div className="wrapper_container ">
        <div className="flex-center flex-col md:flex-row gap-6 lg:gap-10 py-10 lg:py-0">
          <Image
            src="/b2b/b2b_commerce.png"
            alt="commerce service banner"
            width={364}
            height={302}
            className="relative lg:-top-12 lg:left-8 md:basis-full max-w-[364px] "
          />
          <div className="px-4 lg:px-16 text-center lg:text-left">
            <p className="text-[1.65rem] md:text-[2rem] font-[600] text-gray-800  !leading-normal mb-3">
              Are you ready to take your business to next level? Avail our B2B
              commerce services now!
            </p>
            <ContactUs buttonStyles="px-7 py-2.5 text-base" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BCommerceBanner;
