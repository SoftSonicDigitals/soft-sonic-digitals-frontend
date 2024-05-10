"use client";
import React from "react";
import { PrimaryButton } from "../Reusable";
import { useRouter } from "next/navigation";

type GetInTouchContactBtnProps = {
  children: string;
};

const GetInTouchContactBtn = ({ children }: GetInTouchContactBtnProps) => {
  const router = useRouter();
  return (
    <PrimaryButton
      title={children}
      className="px-12 py-3 "
      clickHandler={() => router.push("/contact")}
    />
  );
};

export default GetInTouchContactBtn;
