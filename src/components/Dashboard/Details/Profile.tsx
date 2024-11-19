import React from "react";
import { FiUser } from "react-icons/fi";
import IconData from "./IconData";
import { LeadDetails, ProfileInfoIcons } from "@/constants/admin";
import InfoBox from "./InfoBox";
import { ValueOf } from "next/dist/shared/lib/constants";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { EditButton } from "../EditForm";
type ProfileProps = {
  name: string;
  email: string;
  mobile: string;
  addressLine: string;
  postcode: string;
  state: string;
  company: string;
  service: string;
  budget: string;
  leadOwner: string | null;
};
const Profile = ({
  name,
  email,
  mobile,
  addressLine,
  postcode,
  state,
  company,
  service,
  budget,
  leadOwner,
}: ProfileProps) => {
  const profileInfoArray: {
    title: ValueOf<typeof LeadDetails>;
    value: string;
  }[] = [
    {
      title: LeadDetails.LEAD_OWNER,
      value: leadOwner ? leadOwner : "-",
    },
    {
      title: LeadDetails.COMPANY,
      value: company.length !== 0 ? company : "-",
    },
    { title: LeadDetails.SERVICE, value: service },
    { title: LeadDetails.BUDGET, value: budget },
  ];

  const formattedAddress = [addressLine, postcode, state]
    .filter(Boolean)
    .join(", ");

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
                <p className="text-3xl font-[700] tracking-wide text-gray-800 self-start capitalize ">
                  {name}
                </p>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 ">
                  <IconData icon={ProfileInfoIcons.MAIL} data={email} />
                  <div className="hidden lg:block bg-gray-700 min-w-1 min-h-1 rounded-full  self-center " />
                  <IconData icon={ProfileInfoIcons.PHONE} data={mobile} />
                </div>
                <IconData
                  icon={ProfileInfoIcons.ADDRESS}
                  data={formattedAddress}
                  styles="self-start"
                />
              </div>
            </div>
          </div>
          <EditButton />
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  border gap-[1px] bg-gray-200  ">
        {profileInfoArray.map((item, index) => (
          <InfoBox key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default Profile;
