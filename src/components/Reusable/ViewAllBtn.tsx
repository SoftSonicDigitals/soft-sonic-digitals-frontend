"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/navigation";

const ViewAllBtn = () => {
  const router = useRouter();
  return (
    <div className="flex-center">
      <PrimaryButton
        title="VIEW ALL"
        className="px-10 py-3 "
        clickHandler={() => router.push("/case-studies")}
      />
    </div>
  );
};

export default ViewAllBtn;
