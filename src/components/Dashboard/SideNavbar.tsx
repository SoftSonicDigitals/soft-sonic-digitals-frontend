"use client";
import { DASHBOARD_NAVLINKS } from "@/prototypes/dashboard";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuArrowLeftToLine } from "react-icons/lu";

const containerVariant = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      daming: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      daming: 15,
      duration: 0.5,
    },
  },
};

const SideNavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [isOpen, setisOpen] = useState(false);
  const containerControls = useAnimationControls();
  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [isOpen, containerControls]);

  const handleOpenClose = () => {
    setisOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-[#12131c] z-10 gap-20 w-64 fixed top-0 left-0 h-screen shadow "
      variants={containerVariant}
      initial={"close"}
      animate={containerControls}
    >
      <div className="flex flex-col  justify-between h-screen">
        <div className="flex flex-col ">
          <Image
            src="/WhiteLogo.svg"
            alt="logo"
            width={110}
            height={80}
            style={{ objectFit: "contain" }}
            className="my-10 self-center"
            onClick={() => handleOpenClose()}
          />

          <div>
            <div className="flex flex-col gap-8 my-10">
              {DASHBOARD_NAVLINKS.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${
                    pathname === `/admin${item.link}` ? "border-white" : ""
                  }  border-l-[3px]  hover:border-white border-[#12131c] flex justify-center mx-0.5 trasnition duration-200`}
                >
                  <div className="text-white flex items-center gap-4 py-1.5 px-2 tracking-wider font-[500] text-sm  rounded-lg ">
                    <item.icons className="h-6 w-6 " />
                    {isOpen && item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-center my-10 gap-4 text-white font-[500] tracking-wider text-sm">
          <LuArrowLeftToLine className="h-6 w-6" /> {isOpen && "Logout"}
        </div>
      </div>
    </motion.nav>
  );
};

export default SideNavBar;
