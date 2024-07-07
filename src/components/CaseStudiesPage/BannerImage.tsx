import Image from "next/legacy/image";
import React from "react";
import Reveal from "../Animation/Reveal";

type BannerImgPropsType = {
  bannerImgPath: string;
};
const BannerImage = ({ bannerImgPath }: BannerImgPropsType) => {
  return (
    <section>
      <Reveal>
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
      </Reveal>
    </section>
  );
};

export default BannerImage;
