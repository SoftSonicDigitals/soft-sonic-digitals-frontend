"use client";
import React from "react";
type ButtonProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  clickHandler?: () => void;
  disabled?: boolean;
};

const PrimaryButton = ({
  disabled,
  type,
  title,
  className,
  clickHandler,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-white tracking-wider btn__backgroundcolor   font-[700] rounded  ${className} ${
        disabled ? "cursor-not-allowed" : ""
      } `}
      onClick={clickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
