"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuArrowLeftToLine } from "react-icons/lu";
import { navbarVariants } from "@/animation";
import NavLinksContainer from "./NavLinksContainer";
import { useClickOutside } from "@/hooks/useClickOutside";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="flex flex-col ">
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
            <NavLinksContainer isOpen={isOpen} />
          </div>
        </div>
        <div className="flex-center my-10 gap-4 text-white font-[500] tracking-wider text-sm">
          <LuArrowLeftToLine className="h-6 w-6" /> {isOpen && "Logout"}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavMenu;
