import { DASHBOARD_NAVLINKS } from "@/prototypes/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const NavLinksContainer = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="flex flex-col gap-8 my-10">
      {DASHBOARD_NAVLINKS.map(({ title, link, icon }, index) => (
        <NavLink
          title={title}
          link={link}
          icon={icon}
          key={index}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
};

export default NavLinksContainer;
