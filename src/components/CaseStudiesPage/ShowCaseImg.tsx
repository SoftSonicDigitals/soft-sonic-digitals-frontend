import Image from "next/image";
import React from "react";

const ShowCaseImg = () => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-3  ">
        <div className="flex-center">
          <Image
            src={"/case_study_pages/feather_down/show_case.webp"}
            alt="show-case Image"
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
