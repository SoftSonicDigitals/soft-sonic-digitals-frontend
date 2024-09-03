import React from "react";
import { FiUser } from "react-icons/fi";
import IconData from "./IconData";
import { ProfileInfoIcons } from "@/constants/admin";
import InfoBox from "./InfoBox";
const Profile = () => {
  return (
    <section id="profile_details" className="mb-8">
      <div className="w-full border-x-[1px] border-t-[1px]  border-gray-200 py-8 px-4 md:p-8 ">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-8 px-4">
              <div className="flex-center">
                <div className="bg-gray-300 inline-block p-5 rounded-full">
                  <FiUser className="h-10 w-10 text-gray-800" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-[700] tracking-wide text-gray-800 self-start ">
                  Jerome Bell
                </p>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 ">
                  <IconData
                    icon={ProfileInfoIcons.MAIL}
                    data="jeromebell@gmail.com"
                  />
                  <div className="hidden lg:block bg-gray-700 min-w-1 min-h-1 rounded-full  self-center " />
                  <IconData
                    icon={ProfileInfoIcons.PHONE}
                    data="(405) 555-0128"
                  />
                </div>
                <IconData
                  icon={ProfileInfoIcons.ADDRESS}
                  data="7 Jacobs Street, Bankstown,2200, NSW"
                  styles="self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  border gap-[1px] bg-gray-200  ">
        {[1, 1, 1, 1].map((item, index) => (
          <InfoBox key={index} />
        ))}
      </div>
    </section>
  );
};

export default Profile;
