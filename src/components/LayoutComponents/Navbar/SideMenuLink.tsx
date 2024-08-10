import { NavLink } from "@/models/navbar";
import Link from "next/link";
import React from "react";

type SideMenuLinkProps = {
  linkClickHandler: () => void;
  navLinks: NavLink[] | undefined;
};

const SideMenuLink = ({ navLinks, linkClickHandler }: SideMenuLinkProps) => {
  console.log(navLinks);
  return (
    <>
      <div className="flex flex-col gap-3 text-[14px] ml-6">
        {navLinks?.map(({ title, link }: NavLink) => (
          <div key={title} className="">
            <Link href={link} onClick={() => linkClickHandler()}>
              {title.includes("-") ? title.split("-")[1].trim() : title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideMenuLink;
