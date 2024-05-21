import Image from "next/image";
import React from "react";

const B2CWeAreDifferent = () => {
  return (
    <section id="we_are_different">
      <div className="wrapper_container mb-24">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-[700] text-gray-800 !leading-[1.25]  text-center md:mx-6 lg:mx-10 xl:mx-32 mb-12">
            <span className="border-b-[1px] border-gray-800">
              {" "}
              For over a decade,
            </span>{" "}
            we've been working with online retailers, learning their business
            and challenges. We don't believe in cookie-cutter approaches or
            empty promises
          </h1>
        </div>
        <div className="flex-center flex-col">
          <div className="hidden sm:block sm:mx-16 md:mx-8 lg:mx-10 xl:mx-32 ">
            <Image
              src="/b2c/we_are_different.png"
              alt="we are different"
              width={700}
              height={707}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div>Key</div>
        </div>
      </div>
    </section>
  );
};

export default B2CWeAreDifferent;
