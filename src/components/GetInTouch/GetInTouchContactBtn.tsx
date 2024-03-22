"use client";
import React from "react";
import { PrimaryButton } from "../Reusable";
import { useRouter } from "next/navigation";

const GetInTouchContactBtn = () => {
  const router = useRouter();
  return (
    <PrimaryButton
      title="LET'S TAlK"
      className="px-12 py-3"
      clickHandler={() => router.push("/contact")}
    />
  );
};

export default GetInTouchContactBtn;
