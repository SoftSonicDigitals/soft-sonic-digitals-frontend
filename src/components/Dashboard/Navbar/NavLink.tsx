import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
type NavLinkProps = {
  link: string;
  icon: IconType;
  isOpen: boolean;
  title: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const NavLink = ({
  link,
  icon: Icon,
  isOpen,
  title,
  setIsOpen,
}: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/admin${link}`}
      className={`${
        pathname === `/admin${link}` ? "border-white" : "border-black-500"
      } border-l-[3px] hover:border-white  flex justify-center mx-0.5 transition duration-200"
        
  `}
      onClick={() => setIsOpen(false)}
    >
      <div className="text-white flex items-center gap-4 py-1.5 px-2 tracking-wider font-[500] text-sm  rounded-lg ">
        <Icon className="h-6 w-6 " />
        {isOpen && title}
      </div>
    </Link>
  );
};

export default NavLink;
