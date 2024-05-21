import { RETAILERS_CONCERNS } from "@/prototypes/b2c";
import Image from "next/image";
import React from "react";

const B2ConcernsExpertise = () => {
  return (
    <section id="concerns_and_expertise">
      <div className="wrapper_container mb-24">
        <div className="md:mx-6 lg:mx-10 xl:mx-32 mb-12 flex">
          <div className="max-w-[650px]">
            <div className="border-l-2 border-gray-700 pl-8  py-3 tracking-wide mb-10">
              <h3 className="text-4xl font-[700] text-gray-800">
                {RETAILERS_CONCERNS.title}
              </h3>
              <div className="mt-8">
                {RETAILERS_CONCERNS.list.map(
                  ({ title, description }, index) => (
                    <div key={index} className="mb-3">
                      <p className="text-2xl font-[700] text-gray-800 mb-1">
                        {title}
                      </p>
                      <p>{description}</p>
                    </div>
                  )
                )}
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
