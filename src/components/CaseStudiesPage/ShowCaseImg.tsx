import Image from "next/image";
import React from "react";
type ShowCaseImgPropsType = {
  showCaseImgPath: string;
};
const ShowCaseImg = ({ showCaseImgPath }: ShowCaseImgPropsType) => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-3  ">
        <div className="flex-center">
          <Image
            src={showCaseImgPath}
            alt="showcase image"
            width={1224}
            height={768}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ShowCaseImg;
