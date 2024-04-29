import Image from "next/image";
import React from "react";
import Link from "next/link";
type HeroTemplateProps = {
  heroImgPath: string;
  heroHeading: string;
  heroDescription: string;
};

const HeroTemplate = ({
  heroImgPath,
  heroHeading,
  heroDescription,
}: HeroTemplateProps) => {
  return (
    <section className="mb-24">
      <div className="pt-[48px] lg:pt-[88px]">
        <div className="relative w-[100vw] h-[60vh] xl:h-[100vh] 2xl:h-[55vh]">
          <Image
            src="/prototype_page/hero.webp"
            alt="hero"
            fill
            className="object-cover object-[85%] md:object-top"
          />
          <div className="absolute w-full h-full ">
            <div className="wrapper_container h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl lg:text-[2.5rem]  font-[600] text-gray-800 mb-5 tracking-tight ">
                {heroHeading}
              </h2>
              <p className="text-lg font-[500] text-gray-700 mb-2 ">
                {heroDescription}
              </p>
              <div>
                <Link
                  href={"/contact"}
                  className={`text-white tracking-wider btn__backgroundcolor   font-[700] rounded  
                
              `}
                >
                  REQUEST A APPROVAL
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
