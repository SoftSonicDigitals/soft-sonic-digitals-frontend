import Image from "next/image";
import Link from "next/link";
import React from "react";
type CaseStudyTilesProps = {
  title: string;
  posterPath: string;
  logoPath: string;
};
const CaseStudyTiles = ({
  title,
  posterPath,
  logoPath,
}: CaseStudyTilesProps) => {
  return (
    <Link href={`/case-study/${title.replaceAll(" ", "_")}`}>
      <div className="relative ">
        <Image src={`${posterPath}`} height={400} width={576} alt="poster" />
        <Image
          src={`${logoPath}`}
          height={64}
          width={182}
          alt="logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </div>
      <p className="mt-2.5 text-lg font-[500]  capitalize">{title}</p>
    </Link>
  );
};

export default CaseStudyTiles;
