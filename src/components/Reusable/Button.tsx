import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
};

const Button = ({ type, title, className, handleClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-white tracking-wider btn__backgroundcolor   font-[700] rounded  ${className} `}
    >
      {title}
    </button>
  );
};

export default Button;
