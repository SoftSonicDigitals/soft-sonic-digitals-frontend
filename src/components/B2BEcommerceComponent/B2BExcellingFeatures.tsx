import Image from "next/image";
import React from "react";
import ExcellingFeaturesContainer from "./ExcellingFeaturesContainer";

const B2BExcellingFeatures = () => {
  return (
    <section id="b2b_excelling_features" className="bg-white-100 py-20 mb-24">
      <div className="wrapper_container ">
        <div className="flex-center gap-24 mb-24">
          <h1 className="section_heading mb-4   !w-[488px] flex-shrink-0 px-3">
            Grow how you want with excelling features
          </h1>
          <p className="section_description  ">
            When you avail our B2B website development services, you get robust
            B2B marketplaces, websites etc. with a comprehensive set of features
            which are ready to take your business to new heights. We have
            designed our solution so that it can be used with any B2B eCommerce
            company model at any time.
          </p>
        </div>

        <div className="flex-center gap-20 ">
          <Image
            src="/b2b/excelling_features.png"
            alt="excelling features"
            width={488}
            height={396}
            className="basis-2/5 self-start"
          />
          <ExcellingFeaturesContainer />
        </div>
      </div>
    </section>
  );
};

export default B2BExcellingFeatures;
