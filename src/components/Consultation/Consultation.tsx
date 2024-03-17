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
        <div className="flex-center flex-col gap-16 ">
          {CONSULTATION.map(({ id, title, description, imageName }) => (
            <div
              key={id}
              className="flex flex-col gap-4 max-w-[680px]  hover:shadow-lg "
            >
              <div className="relative ">
                <Image
                  src={`/consultation/${imageName}`}
                  alt={"team member"}
                  fill
                  style={{ objectFit: "contain" }}
                  className="mb-8 max-h-[377px]"
                />
              </div>
              <div className="px-4 pb-6 flex flex-col gap-6 shadow-md">
                <h3 className=" text-2xl font-[600] text-gray-800">{title}</h3>
                <p className="">{description}</p>

                <button
                  type="button"
                  className="rounded border-2 px-8 py-2 border-gray-800 tracking-wider"
                >
                  <Link href={"/"}>{"LET'S TALK"}</Link>
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
