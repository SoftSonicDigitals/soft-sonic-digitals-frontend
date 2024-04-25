import { FEATHER_DOWN } from "@/prototypes/case_study_pages/featherDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTile = () => {
  return (
    <>
      <Link href={"#"}>
        <div className="lg:max-w-[400px] lg:max-h-[400px]">
          <Image
            src={FEATHER_DOWN.ourWorkPageDisplayPath}
            alt="display"
            width={720}
            height={720}
          />
        </div>
      </Link>
    </>
  );
};

export default ProjectTile;
