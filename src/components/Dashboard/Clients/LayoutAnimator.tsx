"use client";
import { useNavbarOpenContext } from "@/context";
import { motion } from "framer-motion";
import React from "react";

const LayoutAnimator = ({ children }: { children: React.ReactNode }) => {
  const { isNavbarOpen } = useNavbarOpenContext();
  return (
    <motion.div
      className={` wrapper_container  `}
      initial={{ paddingLeft: "0rem" }}
      animate={{ paddingLeft: isNavbarOpen ? "11rem" : "0rem" }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default LayoutAnimator;
