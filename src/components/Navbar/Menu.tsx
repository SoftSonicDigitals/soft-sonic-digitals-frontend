"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => {
  return (
    <button type="button" className="lg:hidden">
      <RxHamburgerMenu className="text-2xl font-[700]" />
    </button>
  );
};

export default Menu;
