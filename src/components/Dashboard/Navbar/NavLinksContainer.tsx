import { DASHBOARD_NAVLINKS } from "@/prototypes/dashboard";
import React, { Dispatch, SetStateAction } from "react";
import NavLink from "./NavLink";

const NavLinksContainer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-8 my-10">
      {DASHBOARD_NAVLINKS.map(({ title, link, icon }, index) => (
        <NavLink
          key={index}
          setIsOpen={setIsOpen}
          title={title}
          link={link}
          icon={icon}
          isOpen={isOpen}
        />
      ))}
    </div>
  );
};

export default NavLinksContainer;
