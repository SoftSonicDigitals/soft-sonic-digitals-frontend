import React from "react";
import { PrimaryStyledHeadings } from "../Reusable";
import { MAIN_HEADING, SUB_HEADING } from "@/constants/consultation";
import { CONSULTATION } from "@/prototypes/consultation";
import Image from "next/image";
import Link from "next/link";

const Consultation = () => {
  return (
    <section id="consultation">
      <div className="wrapper_container flex-center flex-col mb-24">
        <PrimaryStyledHeadings
          mainHeading={MAIN_HEADING}
          subHeading={SUB_HEADING}
          mainHeadingStyles="mx-4 "
        />
        <div
          className="grid  grid-cols-1
          md:grid-cols-2 xl:grid-cols-3 gap-12  xl:mx-4 2xl:mx-12 px-4 "
        >
          {CONSULTATION.map(({ id, title, description, imageName }) => (
            <div
              key={id}
              className=" flex-col gap-4   hover:shadow-lg basis-full md:max-w-[325px] lg:max-w-[435px] 2xl:max-w-[375px] "
            >
              <div className="relative w-full max-w-3xl">
                <Image
                  src={`/consultation/${imageName}`}
                  alt={"team member"}
                  width={700}
                  height={705}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="px-5 md:px-8 pb-6 flex flex-col gap-6 shadow-md mt-8 text-gray-800">
                <h3 className="text-lg sm:text-xl md:text-2xl font-[700] text-gray-800 tracking-wide">
                  {title}
                </h3>
                <p className="tracking-wider mb-2 font-[500]">{description}</p>

                <button
                  type="button"
                  className="rounded border-2 px-8 py-2 border-gray-800 tracking-wider  font-[700]"
                >
                  <Link href={"/contact"}>{"LET'S TALK"}</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultation;
