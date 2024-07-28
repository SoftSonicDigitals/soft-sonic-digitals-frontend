import { useClerk } from "@clerk/nextjs";
import React from "react";
import { LuArrowLeftToLine } from "react-icons/lu";

const Logout = ({ isOpen }: { isOpen: boolean }) => {
  const { signOut } = useClerk();
  return (
    <div
      className="flex-center my-10 gap-4 text-white font-[500] tracking-wider text-sm cursor-pointer border-l-[3px] border-black-500 py-1 hover:border-white transition duration-300"
      onClick={() => signOut({ redirectUrl: "/" })}
    >
      <LuArrowLeftToLine className="h-6 w-6" />
      {isOpen && <span>Logout</span>}
    </div>
  );
};

export default Logout;
