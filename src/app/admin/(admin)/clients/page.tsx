import {
  ClientLayoutAnimator,
  ClientStatistics,
} from "@/components/Dashboard/Clients";
import { ADD_CLIENT_BTN_TEXT, CLIENTS } from "@/constants/dashboard";
import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

const page = () => {
  return (
    <main className="md:pl-[5rem] pt-16 md:pt-0">
      <ClientLayoutAnimator>
        <div>
          <div className="flex justify-between lg:items-center flex-col lg:flex-row my-10 gap-6">
            <h1 className="text-3xl font-[600] ">{CLIENTS}</h1>

            <Link
              className="bg-black-500 text-white text-sm flex flex-center gap-2 py-2.5 px-5 hover:bg-black w-36"
              href="/contact"
            >
              <IoAddSharp className="text-lg" />
              {ADD_CLIENT_BTN_TEXT}
            </Link>
          </div>
        </div>
        <ClientStatistics />
      </ClientLayoutAnimator>
    </main>
  );
};

export default page;
