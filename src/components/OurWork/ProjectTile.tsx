import { VIEW_CASE_STUDY_BTN } from "@/constants/our_work";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ProjectTileProps = {
  displayImg: string;
  title: string;
  description: string;
};

const ProjectTile = ({ displayImg, title, description }: ProjectTileProps) => {
  return (
    <>
      <div className="lg:max-w-[400px] lg:max-h-[400px] relative group overflow-hidden">
        <Image src={displayImg} alt="display" width={720} height={720} />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none group-hover:opacity-40 group-hover:pointer-events-auto" />
        <div className="absolute top-0  w-full h-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ">
          <div className="flex-center flex-col w-full h-full">
            <h2 className="text-4xl tracking-wide text-white font-[500] mb-12 text-center capitalize">
              {title}
            </h2>
            <p className="text-lg text-white tracking-wide px-4 text-center mb-8">
              {description}
            </p>
            <Link
              href={`/case-study/${title.replaceAll(" ", "_")}`}
              className="px-14 py-2.5 text-white font-[700] border-2 border-white text-sm tracking-wider hover:bg-white hover:text-gray-900 transition duration-200"
            >
              {VIEW_CASE_STUDY_BTN}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTile;
