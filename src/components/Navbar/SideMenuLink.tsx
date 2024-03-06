import Link from "next/link";
import React from "react";
type NavLink = {
  title: string;
  link: string;
};
const SideMenuLink = ({ navLinks }: { navLinks: NavLink[] | undefined }) => {
  console.log(navLinks);
  return (
    <>
      <div className="flex flex-col gap-3 text-[14px] ml-6">
        {navLinks?.map(({ title, link }: NavLink) => (
          <div key={title} className="">
            <Link href={link}>
              {title.includes("-") ? title.split("-")[1].trim() : title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideMenuLink;
