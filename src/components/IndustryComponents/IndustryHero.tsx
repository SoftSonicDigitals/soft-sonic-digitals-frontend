import Image from "next/image";
import React from "react";
import Link from "next/link";
import Reveal from "../Animation/Reveal";

type IndustryHeroProps = {
  imgPath: string;
  heading: string;
  description: string;
  btnText: string;
};

const IndustryHero = ({
  imgPath,
  heading,
  description,
  btnText,
}: IndustryHeroProps) => {
  return (
    <section>
      <Reveal>
        <div className="pt-[48px] lg:pt-[88px] ">
          <div className="relative w-[100vw] h-[60vh] xl:h-[100vh] 3xl:h-[55vh]">
            <Image
              src={`${imgPath}`}
              alt="hero"
              fill
              className="object-cover object-[85%] md:object-top"
            />
            <div className="md:hidden absolute industry_overlay_gradient w-full h-[61vh] " />

            <div className="absolute w-full h-full ">
              <div className="wrapper_container h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-">
                <h2 className="text-3xl lg:text-[2.5rem]  font-[600] text-gray-800 mb-8 tracking-tight ">
                  {heading}
                </h2>
                <p className="text-lg font-[500] text-gray-700 mb-6 max-w-[500px] ">
                  {description}
                </p>
                <div>
                  <Link
                    href={"/contact"}
                    className={`text-white tracking-wider font-[700] rounded px-2 py-3 btn__backgroundcolor  `}
                  >
                    {btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default IndustryHero;
