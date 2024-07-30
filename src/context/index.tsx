"use client";
import { createContext, useState, ReactNode, useContext } from "react";

type NavbarOpenContextProps = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarOpenContext = createContext<NavbarOpenContextProps>({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
});

export const NavbarOpenWrapper = ({ children }: { children: ReactNode }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <NavbarOpenContext.Provider value={{ isNavbarOpen, setIsNavbarOpen }}>
      {children}
    </NavbarOpenContext.Provider>
  );
};

export const useNavbarOpenContext = () => useContext(NavbarOpenContext);

export default NavbarOpenContext;
