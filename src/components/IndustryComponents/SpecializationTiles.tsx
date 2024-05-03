import Image from "next/image";
import React from "react";
type tilesDataArr = {
  tilesDataArr: {
    imgPath: string;
    title: string;
  }[];
};
const SpecializationTiles = ({ tilesDataArr }: tilesDataArr) => {
  return (
    <section>
      <div className="wrapper_container flex flex-wrap items-center justify-center gap-10 mb-24">
        {tilesDataArr.map(({ imgPath, title }, index) => (
          <div
            key={index}
            className="flex flex-center  flex-col px-2.5 py-10 border-[1px] border-gray-600 max-w-[205px] max-h-[180px]"
          >
            <Image
              src={imgPath}
              alt=""
              width={62}
              height={57}
              className="mb-4"
            />
            <p
              className="font-[600] text-base
           text-gray-800 text-center"
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializationTiles;
