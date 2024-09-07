import React, { Fragment } from "react";

const DetailSkeletonLoader = () => {
  return (
    <>
      <div className="mb-8">
        <div className="w-full border-x-[1px] border-t-[1px] border-gray-200 py-8 px-4 md:p-8">
          <div className="flex justify-between">
            <div>
              <div className="flex gap-8 px-4">
                <div className="flex-center">
                  {/* Skeleton for Profile Icon with Pulse */}
                  <div className="bg-gray-300 inline-block p-5 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Skeleton for Profile Name with Pulse */}
                  <div className="w-40 h-8 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
                    {/* Skeleton for Email and Phone with Pulse */}
                    <div className="w-48 h-6 bg-gray-300 rounded-md animate-pulse"></div>

                    <div className="w-48 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                  {/* Skeleton for Address with Pulse */}
                  <div className="w-64 h-6 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton for InfoBoxes with Pulse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center border gap-[1px] ">
          {[1, 2, 3, 4].map((_, index) => (
            <Fragment key={index}>
              <div className="p-6 bg-white animate-pulse">
                {/* Skeleton for "Lead owner" text */}
                <div className="w-24 h-4 bg-gray-300 rounded-md mb-2"></div>

                {/* Skeleton for "Esther Howard" text */}
                <div className="w-36 h-6 bg-gray-300 rounded-md"></div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-1 items-center">
          {/* Create a few skeleton placeholders to represent the status tags */}
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="flex-center capitalize w-full py-2 max-w-[400px] font-[500] tracking-wide bg-gray-300 animate-pulse text-sm cursor-pointer"
            >
              {/* Skeleton for tag text */}
              <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center my-4 animate-pulse">
        {/* Skeleton for LeadSource */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-32 bg-gray-300 rounded-md"></div>
        </div>

        {/* Skeleton for CapturedDate */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <div className="h-6 w-32 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      <hr className="my-8 animate-pulse" />

      <div className="mb-12">
        {/* Skeleton for Heading */}
        <div className="w-full mb-5">
          <div className="h-8 w-1/3 bg-gray-300 rounded-md animate-pulse"></div>
        </div>

        <div className="border w-full p-6">
          {/* Skeleton for DetailBullets */}
          <div className="flex flex-col gap-4 mb-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                {/* Skeleton for Bullet Title */}
                <div className="h-4 w-1/4 bg-gray-300 rounded-md animate-pulse"></div>
                {/* Skeleton for Bullet Data */}
                <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Skeleton for InfoBox Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center border gap-[1px] bg-white">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="w-full h-24 bg-gray-300 rounded-md animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSkeletonLoader;
