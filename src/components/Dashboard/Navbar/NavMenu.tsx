"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { navbarVariants } from "@/animation";
import NavLinksContainer from "./NavLinksContainer";
import { useClickOutside } from "@/hooks/useClickOutside";
import Logout from "./Logout";
import { useNavbarOpenContext } from "@/context";

const NavMenu = () => {
  const { isNavbarOpen: isOpen, setIsNavbarOpen: setIsOpen } =
    useNavbarOpenContext();

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const domeNode = useClickOutside(() => setIsOpen(false));
  return (
    <motion.nav
      className={`hidden md:block bg-[#12131c] z-10 gap-20 w-64 fixed top-0 left-0 h-screen shadow  `}
      variants={navbarVariants}
      initial={"close"}
      animate={isOpen ? "open" : "close"}
      ref={domeNode}
    >
      <div className="flex flex-col justify-between h-screen">
        <div className="flex flex-col cursor-pointer ">
          <Image
            src="/WhiteLogo.svg"
            alt="logo"
            width={110}
            height={80}
            style={{ objectFit: "contain" }}
            className="my-16 md:my-10 self-center"
            onClick={() => handleOpenClose()}
          />

          <div>
            <NavLinksContainer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        <Logout isOpen={isOpen} />
      </div>
    </motion.nav>
  );
};

export default NavMenu;
