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
    <section className="relative -mt-8 sm:-mt-20 z-50">
      <div className="wrapper_container flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-24">
        {tilesDataArr.map(({ imgPath, title }, index) => (
          <div
            key={index}
            className="flex flex-center  flex-col px-2.5 py-10 border-[1px] border-gray-600 max-w-[160px] sm:max-w-[205px] max-h-[180px] bg-white hover:border-white"
          >
            <Image
              src={imgPath}
              alt=""
              width={62}
              height={57}
              className="mb-4"
            />
            <p
              className="font-[600]  text-sm sm:text-base
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
