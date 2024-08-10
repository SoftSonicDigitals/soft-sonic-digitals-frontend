"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/Reusable";

type GetInTouchContactBtnProps = {
  children: string;
  btnStyles?: string;
};

const GetInTouchContactBtn = ({
  children,
  btnStyles,
}: GetInTouchContactBtnProps) => {
  const router = useRouter();
  return (
    <PrimaryButton
      title={children}
      className={`px-12 py-3  ${btnStyles}`}
      clickHandler={() => router.push("/contact")}
    />
  );
};

export default GetInTouchContactBtn;
