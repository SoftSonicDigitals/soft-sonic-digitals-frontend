"use client";
import { useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import MobileNavMenu from "./MobileNavMenu";

const SideNavBar = () => {
  return (
    <>
      <NavMenu />
      <MobileNavMenu />
    </>
  );
};

export default SideNavBar;
