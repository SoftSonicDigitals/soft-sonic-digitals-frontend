import React from "react";

const OurWork = () => {
  return (
    <section id="our_work">
      <div className=" h-[calc(80vh-48px)]  xl:h-[100vh] flex-center bg-gray-950">
        <div className="flex flex-col max-w-[600px] lg:max-w-[720px]  text-white items-center justify-center text-center mx-6 md:mx-10 pt-[48px] lg:pt-[88px]">
          <h1 className="text-3xl md:text-6xl  mb-3 tracking-wide">Our Work</h1>
          <p className="font-[500] tracking-wider text-base">
            Our years of expertise in the industry helped us to deliver bespoke
            smartphone, tablet, and web-based development services within
            allotted time and budget without compromising on quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
