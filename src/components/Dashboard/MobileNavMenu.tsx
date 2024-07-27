import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { DASHBOARD_NAVLINKS } from "@/prototypes/dashboard";
import { usePathname } from "next/navigation";
import { LuArrowLeftToLine } from "react-icons/lu";
const variants = {
  close: {
    width: "0",
    transition: { ease: "easeInOut", duration: 0.2 },
  },
  open: {
    width: "100vw",
    transition: { ease: "easeInOut", duration: 0.2 },
  },
};

const MobileNavMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed md:hidden h-16 shadow-md w-full z-20">
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
            variants={variants}
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
                    {DASHBOARD_NAVLINKS.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className={`${
                          pathname === `/admin${item.link}`
                            ? "border-white"
                            : ""
                        } border-l-[3px] hover:border-white border-[#12131c] flex justify-center mx-0.5 transition duration-200 
                      `}
                      >
                        <div className="text-white flex items-center gap-4 py-1.5 px-2 tracking-wider font-[500] text-sm rounded-lg">
                          <item.icons className="h-6 w-6" />
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavMenu;
