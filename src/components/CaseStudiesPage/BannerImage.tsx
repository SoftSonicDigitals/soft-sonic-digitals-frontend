import Image from "next/legacy/image";
import React from "react";

const BannerImage = () => {
  return (
    <section>
      <div className="relative w-[100vw] mb-24 ">
        <Image
          src={"/case_study_pages/feather_down/feather_down_banner.webp"}
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
