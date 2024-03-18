"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LetsTalkButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="rounded border-2 px-8 py-2 border-gray-800 tracking-wider font-[700]"
      onClick={() => router.push("/contact")}
    >
      LET&apos;S TALK
    </button>
  );
};

export default LetsTalkButton;
