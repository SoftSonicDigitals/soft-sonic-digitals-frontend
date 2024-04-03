import Image from "next/legacy/image";
import React from "react";

type BannerImgPropsType = {
  bannerImgPath: string;
};
const BannerImage = ({ bannerImgPath }: BannerImgPropsType) => {
  return (
    <section>
      <div className="relative w-[100vw] mb-12 md:mb-24 ">
        <Image
          src={`${bannerImgPath}`}
          alt="banner image"
          layout="responsive"
          height={688}
          width={1920}
          objectFit="contain"
          priority
        />
      </div>
    </section>
  );
};

export default BannerImage;
