"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SideMenuLinks } from ".";

// hook to close the navbar when clicked outside
let useClickOutside = (handler: () => void) => {
  let domNode: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    let maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

//hook to get screen width
let useScreenWidht = (handler: (width: number) => void) => {
  useEffect(() => {
    let maybeHandler = () => {
      handler(window.innerWidth);
    };

    window.addEventListener("resize", maybeHandler);

    // Initial call to set initial screenWidth state
    maybeHandler();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", maybeHandler);
  });
};

const SideMenu = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const domeNode = useClickOutside(() => setIsNavMenuOpen(false));
  useScreenWidht((width) => setScreenWidth(width));

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
            ref={domeNode}
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
            <SideMenuLinks linkClickHandler={() => setIsNavMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
