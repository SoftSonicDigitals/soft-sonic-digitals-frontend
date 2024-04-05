import Image from "next/image";
import Link from "next/link";
import React from "react";

const RandomCaseStudies = () => {
  return (
    <section>
      <div className="wrapper_container mb-12 md:mb-24 px-4 pt-16">
        <div className="grid  grid-cols-1  md:grid-cols-2 gap-8 max-w-[576px] md:max-w-fit mx-auto">
          <Link href="">
            <div className="relative ">
              <Image
                src={`/case_study_pages/feather_down/poster.webp`}
                height={400}
                width={576}
                alt="poster"
              />
              <Image
                src={`/case_study_pages/feather_down/logo.webp`}
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
            <p className="mt-2.5 text-lg font-[500] ">{"Arabian Ceramics"}</p>
          </Link>

          {/* <div className="relative ">
            <Image
              src={`/case_study_pages/feather_down/poster.webp`}
              height={400}
              width={576}
              alt="poster"
            />
            <Image
              src={`/case_study_pages/feather_down/logo.webp`}
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default RandomCaseStudies;
