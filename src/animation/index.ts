export const navbarVariants = {
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

export const mobileNavbarVariants = {
  close: {
    width: "0",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.35 },
  },
  open: {
    width: "100vw",
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.35 },
  },
};
