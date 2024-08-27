import {
  LayoutAnimator,
  ClientStatistics,
  ClientTableSection,
} from "@/components/Dashboard/Clients";
import { ADD_LEAD_BTN_TEXT, LEADS } from "@/constants/dashboard";

import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

const page = () => {
  return (
    <main className="md:pl-[5rem] pt-16 md:pt-0">
      <LayoutAnimator>
        <div>
          <div className="flex justify-between lg:items-center  my-10 gap-6">
            <h1 className="text-4xl font-[700] tracking-wide ">{LEADS}</h1>

            <Link
              className="bg-black-200 text-white text-sm flex flex-center gap-2 py-2.5 px-5 hover:bg-black-500 w-fit-content"
              href="/contact"
            >
              <IoAddSharp className="text-lg" />
              {ADD_LEAD_BTN_TEXT}
            </Link>
          </div>
        </div>
        <ClientStatistics />
        <ClientTableSection />
      </LayoutAnimator>
    </main>
  );
};

export default page;
