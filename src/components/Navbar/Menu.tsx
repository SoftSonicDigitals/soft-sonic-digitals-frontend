"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Menu = () => {
  const [openNavigationMenu, setOpenNavigationMenu] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setOpenNavigationMenu(true)}
      >
        <RxHamburgerMenu className="text-2xl font-[700]" />
      </button>

      <AnimatePresence>
        {openNavigationMenu && (
          <motion.div
            key="sidemenu"
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{
              width: 0,
            }}
            className={`fixed top-0 right-0  h-[100vh] w-[250px]  z-100 bg-white shadow-md transition duration-500`}
          >
            <button
              type="button"
              className="flex w-[95%] mr-14 justify-end  mt-3"
              onClick={() => setOpenNavigationMenu(false)}
            >
              <IoCloseOutline className="text-2xl font-[700] " />
            </button>
            <div>Solutions</div>
            <div>Platforms</div>
            <div>Industry</div>
            <div>Resources</div>
            <div>Customer</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
