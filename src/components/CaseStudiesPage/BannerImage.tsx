import Image from "next/image";
import React from "react";

const BannerImage = () => {
  return (
    <section>
      <div className="relative w-[100vw] mb-24 ">
        <Image
          src={"/case_study_pages/feather_down/feather_down_banner.webp"}
          alt="banner image"
          height={688}
          width={1920}
          layout="responsive"
          style={{ objectFit: "contain" }}
          sizes={"(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"}
        />
      </div>
    </section>
  );
};

export default BannerImage;
