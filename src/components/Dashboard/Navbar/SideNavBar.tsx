import React from "react";
import NavMenu from "./NavMenu";
import MobileNavMenu from "./MobileNavMenu";

const SideNavBar = () => {
  return (
    <>
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="block md:hidden">
        <MobileNavMenu />
      </div>
    </>
  );
};

export default SideNavBar;
