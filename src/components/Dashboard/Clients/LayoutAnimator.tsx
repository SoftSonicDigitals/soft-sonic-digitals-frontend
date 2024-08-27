"use client";
import { useNavbarOpenContext } from "@/context/NavbarContext";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LayoutAnimator = ({ children }: { children: React.ReactNode }) => {
  const { isNavbarOpen } = useNavbarOpenContext();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // Set isClient to true once the component has mounted
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a fallback component
  }

  return (
    <motion.div
      className={`wrapper_container`}
      initial={{ paddingLeft: "0rem" }}
      animate={{
        paddingLeft:
          window.innerWidth < 768 ? "0rem" : isNavbarOpen ? "11rem" : "0rem",
      }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default LayoutAnimator;
