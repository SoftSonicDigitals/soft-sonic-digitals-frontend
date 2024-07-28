"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { LuArrowLeftToLine } from "react-icons/lu";
import { mobileNavbarVariants } from "@/animation";
import NavLinksContainer from "./NavLinksContainer";
import Logout from "./Logout";

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed md:hidden h-16 shadow-md w-full z-20 bg-white">
        <div className="flex items-center justify-between mx-7 h-full">
          <Link href="/">
            <Image src="/Logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <div onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu className="h-6 w-6" />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block md:hidden bg-[#12131c] gap-20 w-64 fixed top-0 left-0 h-screen shadow z-50"
            variants={mobileNavbarVariants}
            initial="close"
            animate={isOpen ? "open" : "close"}
            exit="close"
          >
            <div className="flex flex-col justify-between h-screen relative">
              <div
                className="md:hidden text-white absolute top-5 right-5 p-2"
                onClick={handleOpenClose}
              >
                <IoCloseSharp className="w-8 h-8" />
              </div>

              <div className="flex flex-col">
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
                  <div className="flex flex-col gap-8 my-10">
                    <NavLinksContainer isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>
              <Logout isOpen={isOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavMenu;
