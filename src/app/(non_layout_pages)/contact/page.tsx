import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <nav className="shadow-md relative">
      <div
        className="wrapper_container flex justify-center 
       "
      >
        <Link href={"/"}>
          <div
            className="cursor-pointer relative w-[5.5rem] sm:w-24
          h-16 my-3"
          >
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>

        <Link href={"/"}>
          <div className="absolute top-[55%] -translate-y-[55%] right-[20px] flex-center cursor-pointer font-[600] uppercase tracking-wider text-[17px] border-b-2 border-black px-1 lg:mx-8">
            Home
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Contact;
