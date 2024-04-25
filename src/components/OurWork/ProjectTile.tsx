import { FEATHER_DOWN } from "@/prototypes/case_study_pages/featherDown";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectTile = () => {
  return (
    <Link href={"#"}>
      <div className="">
        <Image
          src={FEATHER_DOWN.ourWorkPageDisplayPath}
          alt="display"
          width={640}
          height={640}
        />
      </div>
    </Link>
  );
};

export default ProjectTile;
