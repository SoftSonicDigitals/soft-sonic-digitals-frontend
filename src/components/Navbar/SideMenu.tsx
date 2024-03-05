"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
const SideMenu = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Function to update screenWidth state
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set initial screenWidth state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setIsNavMenuOpen(true)}
      >
        <RxHamburgerMenu className="text-2xl font-[700]" />
      </button>

      <AnimatePresence>
        {isNavMenuOpen && (
          <motion.div
            key="sidemenu"
            initial={{ width: 0 }}
            animate={{
              width:
                screenWidth && screenWidth / 2 > 300 ? screenWidth / 2 : 300,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{
              width: 0,
            }}
            className={`fixed top-0 right-0  h-[100vh]  z-100 bg-white shadow-md transition duration-500 `}
          >
            <button
              type="button"
              className="flex w-[95%] mr-14 justify-end  mt-3"
              onClick={() => setIsNavMenuOpen(false)}
            >
              <IoCloseOutline className="text-2xl font-[700] " />
            </button>
            <div className="ml-4 mr-5 ">
              <div>
                <div className="text-gray-800 font-bold text-md flex items-center justify-between border-b-[1px] border-gray-200 pb-3 mt-5">
                  <p className="tracking-wider">Solutions</p>
                  <FaPlus />
                </div>
              </div>
              <div>
                <div className="text-gray-800 font-bold text-md flex items-center justify-between border-b-[1px] border-gray-200 pb-3 mt-5">
                  <p className="tracking-wider">Platforms</p>
                  <FaPlus />
                </div>
              </div>

              <div>
                <div className="text-gray-800 font-bold text-md flex items-center justify-between border-b-[1px] border-gray-200 pb-3 mt-5">
                  <p className="tracking-wider">Industry</p>
                  <FaPlus />
                </div>
              </div>
              <div>
                <div className="text-gray-800 font-bold text-md flex items-center justify-between border-b-[1px] border-gray-200 pb-3 mt-5">
                  <p className="tracking-wider">Resources</p>
                  <FaPlus />
                </div>
              </div>
              <div>
                <div className="text-gray-800 font-bold text-md flex items-center justify-between border-b-[1px] border-gray-200 pb-3 mt-5">
                  <p className="tracking-wider">Customers</p>
                  <FaPlus />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
