"use client";

import React from "react";
import { PrimaryButton } from "../../Reusable";
import { useRouter } from "next/navigation";
import { CONTACT_US } from "@/constants/navbar";

type ContactUsProps = {
  buttonStyles?: string;
};
const ContactUs = ({
  buttonStyles = "px-5 py-2 lg:px-7 lg:py-2.5 text-xs lg:text-lg",
}: ContactUsProps) => {
  const router = useRouter();
  return (
    <PrimaryButton
      type="button"
      title={CONTACT_US}
      className={buttonStyles}
      clickHandler={() => router.push("/contact")}
    />
  );
};

export default ContactUs;
