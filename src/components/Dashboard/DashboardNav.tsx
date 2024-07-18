"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="shadow-md top-0 fixed w-full bg-white z-[10]">
        <div className="wrapper_container flex items-stretch justify-between py-2 lg:py-0 ">
          <Link href={"/"}>
            <div
              className="cursor-pointer relative w-24 h-12 
      lg:w-28 lg:h-16 lg:my-3"
            >
              <Image src="/logo.svg" fill alt="logo" />
            </div>
          </Link>

          <div className="my-auto flex items-center gap-16">
            <Link
              scroll={false}
              href={"/admin/dashboard"}
              className={`font-[600] ${
                pathname === "/admin/dashboard" ? "hidden" : ""
              }`}
            >
              Dashboard
            </Link>

            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
