import Image from "next/image";
import React from "react";
import Link from "next/link";

type HeroTemplateProps = {
  imgPath: string;
  heading: string;
  description: string;
  btnText: string;
  btnStyles?: string;
};

const HeroTemplate = ({
  imgPath,
  heading,
  description,
  btnText,
  btnStyles,
}: HeroTemplateProps) => {
  return (
    <section className="mb-24">
      <div className="pt-[48px] lg:pt-[88px]">
        <div className="relative w-[100vw] h-[60vh] xl:h-[100vh] 2xl:h-[55vh]">
          <Image
            src={`${imgPath}`}
            alt="hero"
            fill
            className="object-cover object-[85%] md:object-top"
          />
          <div className="absolute w-full h-full ">
            <div className="wrapper_container h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl lg:text-[2.5rem]  font-[600] text-gray-800 mb-5 tracking-tight ">
                {heading}
              </h2>
              <p className="text-lg font-[500] text-gray-700 mb-4 ">
                {description}
              </p>
              <div>
                <Link
                  href={"/contact"}
                  className={`text-white tracking-wider font-[700] rounded px-2 py-2.5 ${btnStyles}`}
                >
                  {btnText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTemplate;
