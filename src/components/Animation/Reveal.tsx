"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  index?: number | null;
  styles?: string;
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number | null) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index !== null ? 0.1 * index : 0.2,
      duration: 0.42,
    },
  }),
};

const Reveal = ({ children, index = null, styles }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      // added class group since its wraps the div and makes the first and last tailwind classes invalid
      className={`group ${styles}`}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
