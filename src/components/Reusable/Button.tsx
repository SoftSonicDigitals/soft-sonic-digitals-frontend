import React from "react";

type ButtonProps = {
  title: string;
  btnStyles?: string;
};

const Button = ({ title, btnStyles }: ButtonProps) => {
  return (
    <button
      className={`text-white tracking-wider  bg-gradient-to-r from-orange to-pink font-[700] rounded  ${btnStyles} `}
    >
      {title}
    </button>
  );
};

export default Button;
