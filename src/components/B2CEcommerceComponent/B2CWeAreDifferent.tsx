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
            and challenges. We don't believe in cookie-cutter approaches or em
            pty promises
          </h1>
        </div>
        <div className="flex-center flex-col lg:flex-row gap-10  md:mx-6 lg:mx-10 xl:mx-32 mb-12 ">
          <div className="hidden sm:block basis-full">
            <Image
              src="/b2c/we_are_different.png"
              alt="we are different"
              width={700}
              height={707}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className=" basis-full pl-2 lg:pl-12 ">
            <h3 className="text-2xl font-[700] font-gray-800 text-left mb-10 ">
              Here's how we're different
            </h3>
            <div className="mb-8">
              <p className="text-xl font-[700] mb-2">We listen</p>
              <p>
                We've interviewed over 100 retail store owners and experts to
                understand their unique challenges
              </p>
            </div>
            <div className="mb-8">
              <p className="text-xl font-[700] mb-2">
                We focus on your needs, not ours
              </p>
              <p>
                We've interviewed over 100 retail store owners and experts to
                understand their unique challenges
              </p>
            </div>
            <div className="mb-8">
              <p className="text-xl font-[700] mb-2">
                We don't follow trends,we set them
              </p>
              <p>
                Our proven methods and creative approach can help you stand out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2CWeAreDifferent;
