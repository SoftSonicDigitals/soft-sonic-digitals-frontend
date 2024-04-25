import { FEATHER_DOWN } from "@/prototypes/case_study_pages/featherDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTile = () => {
  return (
    <>
      <Link href={"#"}>
        <div className="lg:max-w-[400px] lg:max-h-[400px] relative group">
          <Image
            src={FEATHER_DOWN.ourWorkPageDisplayPath}
            alt="display"
            width={720}
            height={720}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none group-hover:opacity-40 group-hover:pointer-events-auto" />
          <div className="absolute top-0  w-full h-full  ">
            <div className="flex-center flex-col w-full h-full">
              <h2 className="text-4xl tracking-wide text-white font-[500] mb-12 text-center">
                NEOM
              </h2>
              <p className="text-lg text-white tracking-wide px-4 text-center">
                Developed NEOMs custom ticketing portal by integrating Shopify
                with SAP
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectTile;
