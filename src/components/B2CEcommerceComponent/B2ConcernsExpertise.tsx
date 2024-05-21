import Image from "next/image";
import React from "react";

const B2ConcernsExpertise = () => {
  return (
    <section id="concerns_and_expertise">
      <div className="wrapper_container mb-24">
        <div className="md:mx-6 lg:mx-10 xl:mx-32 mb-12 flex">
          <div className="max-w-[650px]">
            <div className="border-l-2 border-gray-700 pl-8  py-3 tracking-wide mb-10">
              <h3 className="text-4xl font-[700] text-gray-900">
                Retailer’s Immediate Concerns while going digital
              </h3>
              <div className="mt-8">
                <div className="mb-3">
                  <p className="text-2xl font-[700] text-gray-900 mb-1">
                    Quick time-to-market
                  </p>
                  <p>We've got your back.</p>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-[700] text-gray-900 mb-1">
                    No more complex backend systems
                  </p>
                  <p>We simplify them for you.</p>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-gray-700 pl-8  py-3 tracking-wide ">
              <h3 className="text-4xl font-[700] text-gray-800">
                Retailer’s Long-Term Goals, Our Expertise
              </h3>
              <div></div>
            </div>
          </div>
          <div className="">
            <Image
              src="/b2c/shape.png"
              alt="shape"
              width={496}
              height={600}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2ConcernsExpertise;
