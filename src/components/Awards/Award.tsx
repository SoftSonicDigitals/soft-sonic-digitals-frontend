import Image from "next/image";
import React from "react";

type AwardType = {
  id: string;
  title: string;
  imageName: string;
};

const Award = ({ id, title, imageName }: AwardType) => {
  return (
    <div
      key={id}
      className="flex-center m-2  md:mx-[3.4rem] lg:mx-12 md:my-6 xl:p-2.5"
    >
      <Image
        src={`/awards/${imageName}`}
        alt={`${title}`}
        width={245}
        height={232}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Award;
