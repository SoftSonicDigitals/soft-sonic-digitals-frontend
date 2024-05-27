import Image from "next/image";
import Link from "next/link";
import React from "react";

const B2BHero = () => {
  return (
    <section>
      <div className="pt-[48px] lg:pt-[88px] ">
        <div className="relative w-[100vw] h-[40vh] xl:h-[100vh] 3xl:h-[55vh] sm:mb-12 lg:mb-24">
          <Image
            src={`/b2b/hero.png`}
            alt="hero"
            fill
            className="object-cover object-[100%] md:object-top"
          />

          <div className="hidden sm:block absolute  w-full h-full">
            <div className="wrapper_container h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left ">
              <h2 className="text-3xl lg:text-5xl  font-[600] text-gray-800 my-8  max-w-[700px] !leading-snug tracking-tight">
                World’s Best B2B eCommerce Solutions Provider For Manufacturing
                & Distribution Business
              </h2>
              <p className="text-lg font-[500] text-gray-700 mb-6 max-w-[700px]">
                Deliver customised digital commerce services with composable &
                headless B2B ecommerce software solutions and transform your
                ways of interacting with buyers, suppliers, and channel
                partners.
              </p>

              <Link
                href={"/contact"}
                className={`text-white tracking-wider font-[700] rounded px-2 py-3 btn__backgroundcolor  `}
              >
                BOOK A 30 MINS NO-OBLIGATION CONSULTING SESSION
              </Link>
            </div>
          </div>
        </div>

        <div className="wrapper_container h-full flex flex-col justify-center items-center text-center -mt-20 z-999 relative sm:hidden mb-12">
          <h2 className="text-2xl  font-[600] text-gray-800 my-8  max-w-[700px] !leading-snug tracking-tight">
            World’s Best B2B eCommerce Solutions Provider For Manufacturing &
            Distribution Business
          </h2>
          <p className="text-lg font-[500] text-gray-700 mb-6 max-w-[700px]">
            Deliver customised digital commerce services with composable &
            headless B2B ecommerce software solutions and transform your ways of
            interacting with buyers, suppliers, and channel partners.
          </p>

          <Link
            href={"/contact"}
            className={`text-white tracking-wider font-[700] rounded px-2 py-3 btn__backgroundcolor  `}
          >
            BOOK A 30 MINS NO-OBLIGATION CONSULTING SESSION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
